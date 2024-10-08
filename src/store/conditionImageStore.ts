import { create } from "zustand";
import { contditionImageData } from "../type";

type ImageStoreState = {
  images: contditionImageData[];
  setImages: (imageData: contditionImageData[]) => void;
};

const conditionImageStore = create<ImageStoreState>((set) => ({
  images: [],

  // Function to set images data
  setImages: (imageData: contditionImageData[]) =>
    set(() => ({ images: imageData })),
}));

export default conditionImageStore;
