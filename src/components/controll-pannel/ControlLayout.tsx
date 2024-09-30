import useGetPannel from "../../hooks/useGetPannel";
import useMenuNameTabStore from "../../store/useMenuNameTabStore";
import CodeDisplay from "../code-display/CodeDisplay";

// THIS IS PARENT CONTROL PANEL
const ControlLayout = () => {
  const { activeTab } = useMenuNameTabStore();
  const { getpanel } = useGetPannel();

  return (
    <div className="mt-[56.67px] w-full relative check- ml-[190px]">
      {/* BG */}
      <div className="absolute top-0 flex overflow-hidden z-0">
        <img src="bg/bg.png" alt="" />
      </div>
      <div className="ml-6 pt-8 relative z-10 flex gap-4">
        {getpanel(activeTab)}
        <CodeDisplay />
      </div>
    </div>
  );
};

export default ControlLayout;
