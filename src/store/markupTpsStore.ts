import { create } from "zustand";

type markUpTPsState = {
  markUpTps: string;
  markUpDIGI: string;
  setMarkUpTps: (markup: string) => void;
  setMarkUpDIGI: (markup: string) => void;
};

const markUpTpsStore = create<markUpTPsState>((set) => ({
  markUpTps: ``,
  markUpDIGI: ``,
  setMarkUpTps: (markup) => set({ markUpTps: markup }),
  setMarkUpDIGI: (markup) => set({ markUpDIGI: markup }),
}));

export default markUpTpsStore;
