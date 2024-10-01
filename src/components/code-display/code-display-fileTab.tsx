import { FileTabs } from "../../enum";

type FileTabPROPS = {
  edmNum: string;
  linkNum: string;
  activeTab: FileTabs;
  setActiveTab: (tab: FileTabs) => void;
};

const FileTab = ({
  edmNum,
  linkNum,
  activeTab,
  setActiveTab,
}: FileTabPROPS) => {
  return (
    <div className="border-bottom-filename flex px-4 h-[32px] relative">
      <div className="flex gap-5 absolute -bottom-[2px]">
        <div
          className={`py-1 cursor-pointer ${
            activeTab === FileTabs.DIGI && `border-bottom-filename-select`
          }`}
          onClick={() => setActiveTab(FileTabs.DIGI)}>
          <h6
            className={`${
              activeTab === FileTabs.DIGI ? `text-cs_3` : `text-cb_1`
            } text-[14px]`}>{`${edmNum}_${linkNum}_digi.html`}</h6>
        </div>
        <div
          className={`py-1 cursor-pointer ${
            activeTab === FileTabs.TPS && `border-bottom-filename-select`
          }`}
          onClick={() => setActiveTab(FileTabs.TPS)}>
          <h6
            className={`${
              activeTab === FileTabs.TPS ? `text-cs_3` : `text-cb_1`
            } text-[14px]`}>{`${edmNum}_${linkNum}_tps.html`}</h6>
        </div>
      </div>
    </div>
  );
};
export default FileTab;
