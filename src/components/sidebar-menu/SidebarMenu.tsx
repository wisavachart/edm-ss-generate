import SidebarMenuItem from "./SidebarMenuItem";

const setUpMenu = [
  { menuName: "Layout", icons: "icons/layout.svg" },
  { menuName: "Label and Link", icons: "icons/link.svg" },
  { menuName: "Images", icons: "icons/image.svg" },
];

const SidebarMenu = () => {
  return (
    <div className="fixed flex flex-col gap-3 h-[calc(100vh-56.67px)] text-[14px] mt-[56.67px] pt-8 pr-6 border-right  w-[200px]">
      <h1 className="font-extrabold text-ct_4">Setup</h1>
      <div className="flex flex-col gap-3">
        {setUpMenu.map((menu) => (
          <SidebarMenuItem
            key={menu.menuName}
            name={menu.menuName}
            src={menu.icons}
          />
        ))}
      </div>
    </div>
  );
};
export default SidebarMenu;
