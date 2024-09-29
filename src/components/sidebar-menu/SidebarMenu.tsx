import SidebarMenuItem from "./SidebarMenuItem";

const SidebarMenu = () => {
  return (
    <div className="fixed flex flex-col gap-3 h-[calc(100vh-56.67px)] text-[14px] mt-[56.67px] pt-8 pr-6 border-right  w-[200px]">
      <h1 className="font-extrabold text-ct_4">Setup</h1>
      <div className="flex flex-col gap-3">
        <SidebarMenuItem name="Layout" src="/src/assets/icons/layout.svg" />
        <SidebarMenuItem
          name="Label and Link"
          src="/src/assets/icons/link.svg"
        />
        <SidebarMenuItem name="Images" src="/src/assets/icons/image.svg" />
      </div>
    </div>
  );
};

export default SidebarMenu;
