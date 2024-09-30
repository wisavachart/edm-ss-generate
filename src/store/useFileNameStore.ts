import { create } from "zustand";

type FileName = {
  edmNum: string;
  linkNum: string;
};

type FileNameState = {
  fileNameValue: FileName;
  setFileNameValue: (identifier: string, value: string) => void;
};

const useFileNameStore = create<FileNameState>((set) => ({
  //init
  fileNameValue: {
    edmNum: "",
    linkNum: "",
  },
  //set
  setFileNameValue: (identifier: string, value: string) =>
    set((state) => ({
      fileNameValue: {
        ...state.fileNameValue,
        [identifier]: value,
      },
    })),
}));

export default useFileNameStore;
