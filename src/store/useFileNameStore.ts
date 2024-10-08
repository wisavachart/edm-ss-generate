import { create } from "zustand";
import { FileName } from "../type";

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

// INSTANCE WAY
// import { create } from "zustand";
// import { FileName } from "../type";

// type FileNameState = {
//   fileNameValue: FileName;
//   setFileNameValue: (identifier: string, value: string) => void;
// };

// const useFileNameStore = create<FileNameState>((set) => ({
//   //init
//   fileNameValue: {
//     edmNum: "",
//     linkNum: "",
//   },
//   //set
//   setFileNameValue: (identifier: string, value: string) =>
//     set((state) => ({
//       fileNameValue: {
//         ...state.fileNameValue,
//         [identifier]: value,
//       },
//     })),
// }));

// export default useFileNameStore;
