import { useEffect } from "react";
import useLabelLinkStore from "../store/useLabelLinkStore";

const useGetLabelLink = (length: number) => {
  const { labelLinks, setLabelLink } = useLabelLinkStore();

  // Initializing the labelLinks if empty
  useEffect(() => {
    if (labelLinks.length === 0) {
      const initialLabels = Array.from({ length }, () => ({
        label: "",
        link: "",
      }));
      initialLabels.forEach((item, index) => {
        setLabelLink(index, item.label, item.link); // Set initial values in the store
      });
    }
  }, [length, labelLinks, setLabelLink]); // Dependencies include length and store actions

  const handleInputChange = (index: number, label: string, link: string) => {
    setLabelLink(index, label, link);
  };

  return {
    labelLinks,
    handleInputChange,
  };
};

export default useGetLabelLink;
