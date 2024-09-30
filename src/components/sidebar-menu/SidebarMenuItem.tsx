import useSetupMenu from "../../hooks/useSetupMenu";

type SidebarMenuItemPROPS = {
  name: string;
  src: string;
};
const SidebarMenuItem = ({ name, src }: SidebarMenuItemPROPS) => {
  const { selectedMenu, handleMenuClick } = useSetupMenu();
  return (
    <div
      className="flex items-center gap-4 cursor-pointer text-ct_3 hover:text-cs_3"
      onClick={() => handleMenuClick(name)}>
      <div className="flex icon-border  rounded-lg items-center justify-center h-[36px] w-[36px]">
        <img src={src} alt="" />
      </div>
      <h6 className={selectedMenu === name ? `font-semibold` : `font-thin`}>
        {name}
      </h6>
    </div>
  );
};

export default SidebarMenuItem;
