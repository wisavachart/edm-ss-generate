import useGetFileName from "../../hooks/useGetFileName";
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
      <div className="rounded-md bg-cb_4 h-[800px]"></div>
    </div>
  );
};

export default CodeDisplay;
