import PanelImages from "../components/controll-pannel/panel-images";
import PanelLabelLink from "../components/controll-pannel/panel-label-link";
import PanelLayout from "../components/controll-pannel/panel-layout";
import { MenuTabs } from "../enum";

const useGetPannel = () => {
  const getpanel = (activeTab: MenuTabs) => {
    switch (activeTab) {
      case MenuTabs.LAYOUT:
        return <PanelLayout />;
      case MenuTabs.LINKANDLABEL:
        return <PanelLabelLink />;
      case MenuTabs.IMAGES:
        return <PanelImages />;
      default:
        return <PanelLayout />;
    }
  };
  return { getpanel };
};

export default useGetPannel;
