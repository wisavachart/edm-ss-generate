import useGetFileName from "../../hooks/useGetFileName";
import CodeArea from "./code-display-codeArea";
import FileTab from "./code-display-fileTab";
import CodeDisplayHeader from "./code-display-header";

// THIS IS MAIN CODE DISPLAY PARENT
const CodeDisplay = () => {
  const { fileNameValue } = useGetFileName();
  return (
    <div className="w-full flex flex-col gap-3">
      <CodeDisplayHeader
        edmNum={fileNameValue.edmNum}
        linkNum={fileNameValue.linkNum}
      />
      {/* Code display Area */}
      <div className="rounded-md bg-cb_4 h-[800px]">
        {/* dot */}
        <div className="w-full  flex p-3  gap-2">
          {[...Array(3)].map((circle) => (
            <div
              key={circle}
              className="bg-cb_3 w-[12px] h-[12px] rounded-full"></div>
          ))}
        </div>
        {/* File Tab */}
        <FileTab
          edmNum={fileNameValue.edmNum}
          linkNum={fileNameValue.linkNum}
        />
        {/* Syntax Highlight lib */}
        <div className="mt-5">
          <CodeArea />
        </div>
      </div>
    </div>
  );
};

export default CodeDisplay;
