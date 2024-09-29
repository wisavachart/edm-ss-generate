import ControlLayout from "../components/controll-pannel/ControlLayout";
import SidebarMenu from "../components/sidebar-menu/SidebarMenu";

const CreateHTML = () => {
  return (
    <div className="flex">
      <SidebarMenu />
      <ControlLayout />
    </div>
  );
};

export default CreateHTML;
