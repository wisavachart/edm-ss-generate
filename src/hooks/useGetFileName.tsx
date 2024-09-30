import useFileNameStore from "../store/useFileNameStore";

const useGetFileName = () => {
  const fileNameValue = useFileNameStore((state) => state.fileNameValue);
  const setFileNameValue = useFileNameStore((state) => state.setFileNameValue);

  const handleFileNameChange = (
    identifiler: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFileNameValue(identifiler, event.target.value);
  };

  return { fileNameValue, handleFileNameChange };
};

export default useGetFileName;
