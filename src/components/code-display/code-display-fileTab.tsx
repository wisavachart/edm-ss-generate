import { FileName } from "../../type";

const FileTab = ({ edmNum, linkNum }: FileName) => {
  return (
    <div className="border-bottom-filename flex px-3 h-[32px] relative">
      <div className="flex gap-5 absolute -bottom-[2px]">
        <div className="border-bottom-filename-select py-1">
          <h6 className="text-cs_3 text-[14px]">{`${edmNum}_${linkNum}_digi.html`}</h6>
        </div>
        <div className="py-1">
          <h6 className="text-cs_3 text-[14px]">{`${edmNum}_${linkNum}_tps.html`}</h6>
        </div>
      </div>
    </div>
  );
};

export default FileTab;
