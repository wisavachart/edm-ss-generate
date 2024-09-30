import useGetFileName from "../../hooks/useGetFileName";
import CodeArea from "./code-display-codeArea";
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
        <div className="border-bottom-filename flex px-3 h-[32px] relative">
          <div className="flex gap-5 absolute -bottom-[2px]">
            <div className="border-bottom-filename-select py-1">
              <h6 className="text-cs_3 text-[14px]">{`${fileNameValue.edmNum}_${fileNameValue.linkNum}_digi.html`}</h6>
            </div>
            <div className="py-1">
              <h6 className="text-cs_3 text-[14px]">{`${fileNameValue.edmNum}_${fileNameValue.linkNum}_tps.html`}</h6>
            </div>
          </div>
        </div>
        {/* Code Area lib */}
        <div className="mt-5">
          <CodeArea />
        </div>
      </div>
    </div>
  );
};

export default CodeDisplay;
