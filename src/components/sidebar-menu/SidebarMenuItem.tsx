type SidebarMenuItemPROPS = {
  name: string;
  src: string;
};
const SidebarMenuItem = ({ name, src }: SidebarMenuItemPROPS) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex icon-border  rounded-lg items-center justify-center h-[36px] w-[36px]">
        <img src={src} alt="" />
      </div>
      <h6 className="text-ct_3 font-semibold">{name}</h6>
    </div>
  );
};

export default SidebarMenuItem;
