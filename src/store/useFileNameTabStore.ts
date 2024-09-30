import { create } from "zustand";
import { FileTabs } from "../enum";

type FileTapState = {
  activeTab: FileTabs;
  setActiveTab: (tab: FileTabs) => void;
};

const useFileNameTabStore = create<FileTapState>((set) => ({
  activeTab: FileTabs.DIGI,
  setActiveTab: (tab: FileTabs) => set({ activeTab: tab }),
}));

export default useFileNameTabStore;
