import useLayoutStore from "../store/useLayoutStore";

const useGetLayout = () => {
  const boxes = useLayoutStore((state) => state.boxes);
  const addRow = useLayoutStore((state) => state.addRow);
  const addCol = useLayoutStore((state) => state.addCol);
  return { boxes, addCol, addRow };
};

export default useGetLayout;
