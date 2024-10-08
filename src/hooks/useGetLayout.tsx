import useLayoutStore from "../store/useLayoutStore";

const useGetLayout = () => {
  const boxes = useLayoutStore((state) => state.boxes);
  const addRow = useLayoutStore((state) => state.addRow);
  const addCol = useLayoutStore((state) => state.addCol);

  const handleCreateHTML = () => {
    console.log("create");
  };

  return { boxes, addCol, addRow, handleCreateHTML };
};

export default useGetLayout;
