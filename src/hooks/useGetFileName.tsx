import { useEffect, useRef, useState } from "react";
import useFileNameStore from "../store/useFileNameStore";
import debounce from "lodash.debounce";

const useGetFileName = () => {
  const fileNameValue = useFileNameStore((state) => state.fileNameValue);
  const setFileNameValue = useFileNameStore((state) => state.setFileNameValue);

  // Local state to hold immediate input value
  const [localValues, setLocalValues] = useState(fileNameValue);

  const debouncehandleFileNameChange = useRef(
    debounce((identifiler: string, value: string) => {
      setFileNameValue(identifiler, value);
    }, 1000)
  ).current;

  useEffect(() => {
    setLocalValues(fileNameValue);
  }, [fileNameValue]);

  const handleChange = (
    identifiler: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    // Update local state first for smooth input experience
    setLocalValues((prev) => ({
      ...prev,
      [identifiler]: value,
    }));

    debouncehandleFileNameChange(identifiler, value);
  };

  return { localValues, handleChange, fileNameValue };
};

export default useGetFileName;

// instanly Method
// import { useState } from "react";
// import useFileNameStore from "../store/useFileNameStore";
// import debounce from "lodash.debounce";

// const useGetFileName = () => {
//   const fileNameValue = useFileNameStore((state) => state.fileNameValue);
//   const setFileNameValue = useFileNameStore((state) => state.setFileNameValue);

//   // Local state to hold immediate input value
//   const [localValues, setLocalValues] = useState(fileNameValue);

//   const handleFileNameChange = debounce(
//     (identifiler: string, value: string) => {
//       setFileNameValue(identifiler, value);
//     },
//     1000
//   );

//   const handleChange = (
//     identifiler: string,
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const value = event.target.value;
//     // Update local state first for smooth input experience
//     setLocalValues((prev) => ({
//       ...prev,
//       [identifiler]: value,
//     }));
//     handleFileNameChange(identifiler, value);
//   };

//   return { localValues, handleChange };
// };

// export default useGetFileName;

//CLICK TO SUBMIT METHOD
// https://chatgpt.com/share/6704d40e-09b8-8013-84c5-faa82cd4b11b
