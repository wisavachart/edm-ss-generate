import { create } from "zustand";
import { MenuTabs } from "../enum";

type MenuTapState = {
  activeTab: MenuTabs;
  selectedMenu: string;
  setActiveTab: (tab: MenuTabs) => void;
  setSelectedMenu: (name: string) => void;
};

const useMenuNameTabStore = create<MenuTapState>((set) => ({
  activeTab: MenuTabs.LAYOUT,
  selectedMenu: "Layout",
  setActiveTab: (tab: MenuTabs) => set({ activeTab: tab }),
  setSelectedMenu: (name: string) =>
    set({
      selectedMenu: name,
    }),
}));

export default useMenuNameTabStore;
