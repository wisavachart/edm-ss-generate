import { create } from "zustand";
import { Box } from "../type";

type BoxesState = {
  boxes: Box[];
  addRow: () => void;
  addCol: () => void;
  undoLastAction: () => void; // Undo function
  resetBoxes: () => void; // Reset function
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
  //Reset
  resetBoxes: () =>
    set(() => ({
      boxes: [],
    })),
  undoLastAction: () =>
    set((state) => {
      const boxes = [...state.boxes];

      if (boxes.length === 0) return { boxes }; // No boxes to undo

      const lastBox = boxes[boxes.length - 1]; // Get the last row

      if (lastBox.cols.length > 0) {
        // If the last row has columns, remove the last column
        lastBox.cols.pop();
      } else {
        // If the last row has no columns, remove the entire row
        boxes.pop();
      }

      return { boxes };
    }),
}));

export default useLayoutStore;
