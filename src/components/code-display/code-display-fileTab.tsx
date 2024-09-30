import { FileTabs } from "../../enum";
import useFileNameTabStore from "../../store/useFileNameTabStore";
import { FileName } from "../../type";

const FileTab = ({ edmNum, linkNum }: FileName) => {
  const { activeTab, setActiveTab } = useFileNameTabStore();
  return (
    <div className="border-bottom-filename flex px-4 h-[32px] relative">
      <div className="flex gap-5 absolute -bottom-[2px]">
        <div
          className={`py-1 cursor-pointer ${
            activeTab === FileTabs.DIGI && `border-bottom-filename-select`
          }`}
          onClick={() => setActiveTab(FileTabs.DIGI)}>
          <h6 className="text-cs_3 text-[14px]">{`${edmNum}_${linkNum}_digi.html`}</h6>
        </div>
        <div
          className={`py-1 cursor-pointer ${
            activeTab === FileTabs.TPS && `border-bottom-filename-select`
          }`}
          onClick={() => setActiveTab(FileTabs.TPS)}>
          <h6 className="text-cb_1 text-[14px]">{`${edmNum}_${linkNum}_tps.html`}</h6>
        </div>
      </div>
    </div>
  );
};
export default FileTab;
