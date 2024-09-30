import { FileName } from "../../type";

const CodeDisplayHeader = ({ edmNum, linkNum }: FileName) => {
  return (
    <div className="flex gap-16">
      <h1 className="font-semibold text-ct_3 text-[14px] ">
        EDM ID :<span className="text-ct_4"> {edmNum}</span>
      </h1>
      <h1 className="font-semibold text-ct_3 text-[14px] ">
        Link : <span className="text-ct_4"> {linkNum}</span>
      </h1>
    </div>
  );
};

export default CodeDisplayHeader;
