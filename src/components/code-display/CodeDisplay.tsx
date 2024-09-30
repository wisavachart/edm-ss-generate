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
      <div className="rounded-md bg-cb_4 h-[800px] flex flex-col">
        {/* dot & Copy */}
        <div className="w-full flex justify-between p-4 items-center">
          <div className="flex  gap-2 ">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-cb_3 w-[12px] h-[12px] rounded-full"></div>
            ))}
          </div>
          <div className="cursor-pointer flex gap-2 items-center">
            <img className="h-[20px]" src="icons/copy.svg" alt="" />
            <h6 className="text-cb_3 text-[14px] font-semibold">copy</h6>
          </div>
        </div>

        {/* File Tab */}
        <FileTab
          edmNum={fileNameValue.edmNum}
          linkNum={fileNameValue.linkNum}
        />
        {/* Syntax Highlight lib */}
        <div className="mt-5 px-4 h-[85%] overflow-scroll">
          <CodeArea />
        </div>
      </div>
    </div>
  );
};

export default CodeDisplay;
