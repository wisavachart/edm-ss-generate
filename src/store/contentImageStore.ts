import { create } from "zustand";
import { contentImageData } from "../type";

type ImageStoreState = {
  images: contentImageData[];
  setImages: (imageData: contentImageData[]) => void;
};

const contentImageStore = create<ImageStoreState>((set) => ({
  images: [],

  // Function to set images data
  setImages: (imageData: contentImageData[]) =>
    set(() => ({ images: imageData })),
}));

export default contentImageStore;
