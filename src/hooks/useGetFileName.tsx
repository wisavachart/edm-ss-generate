import useFileNameStore from "../store/useFileNameStore";
import debounce from "lodash.debounce";

const useGetFileName = () => {
  const fileNameValue = useFileNameStore((state) => state.fileNameValue);
  const setFileNameValue = useFileNameStore((state) => state.setFileNameValue);

  const handleFileNameChange = debounce(
    (identifiler: string, value: string) => {
      setFileNameValue(identifiler, value);
    },
    1000
  );

  const handleChange = (
    identifiler: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleFileNameChange(identifiler, event.target.value);
  };

  return { fileNameValue, handleChange };
};

export default useGetFileName;
