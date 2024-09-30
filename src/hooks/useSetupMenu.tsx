import { MenuTabs } from "../enum";
import useMenuNameTabStore from "../store/useMenuNameTabStore";

const useSetupMenu = () => {
  const selectedMenu = useMenuNameTabStore((state) => state.selectedMenu);
  const setSelectedMenu = useMenuNameTabStore((state) => state.setSelectedMenu);
  const setActiveTab = useMenuNameTabStore((state) => state.setActiveTab);

  const handleMenuClick = (name: string) => {
    setSelectedMenu(name);
    switch (name) {
      case "Layout":
        setActiveTab(MenuTabs.LAYOUT);
        break;
      case "Label and Link":
        setActiveTab(MenuTabs.LINKANDLABEL);
        break;
      case "Images":
        setActiveTab(MenuTabs.IMAGES);
        break;
      default:
        setActiveTab(MenuTabs.LAYOUT);
    }
  };

  return { selectedMenu, handleMenuClick };
};

export default useSetupMenu;
