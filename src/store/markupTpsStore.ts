import { create } from "zustand";

type markUpTPsState = {
  markUpTps: string;
  setMarkUpTps: (markup: string) => void;
};

const markUpTpsStore = create<markUpTPsState>((set) => ({
  markUpTps: ``,
  setMarkUpTps: (markup) => set({ markUpTps: markup }),
}));

export default markUpTpsStore;
