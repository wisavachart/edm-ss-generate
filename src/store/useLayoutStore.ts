import { create } from "zustand";
import { Box } from "../type";

type BoxesState = {
  boxes: Box[];
  addRow: () => void;
  addCol: () => void;
};

const useLayoutStore = create<BoxesState>((set) => ({
  // Initial state
  boxes: [],
  addRow: () =>
    set((state) => ({
      boxes: [...state.boxes, { cols: [] }],
    })),
  addCol: () =>
    set((state) => ({
      boxes: state.boxes.map((box, i) =>
        i === state.boxes.length - 1 ? { ...box, cols: [...box.cols, {}] } : box
      ),
    })),
}));

export default useLayoutStore;
