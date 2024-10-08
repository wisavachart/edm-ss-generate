import { create } from "zustand";

type LabelLinkState = {
  labelLinks: { label: string; link: string }[];
  setLabelLink: (index: number, label: string, link: string) => void;
};

const useLabelLinkStore = create<LabelLinkState>((set) => ({
  labelLinks: [],
  setLabelLink: (index, label, link) => {
    set((state) => {
      const updatedLabelLinks = [...state.labelLinks];
      updatedLabelLinks[index] = { label, link };
      return { labelLinks: updatedLabelLinks };
    });
  },
}));

export default useLabelLinkStore;
