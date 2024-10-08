import { useCallback } from "react";
import conditionImageStore from "../store/conditionImageStore";
import { contditionImageData } from "../type";

const useGetConditionImg = () => {
  const conditionImageData = conditionImageStore((state) => state.images);
  const setConditionImages = conditionImageStore((state) => state.setImages);
  const handleConditionImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(event.target.files || []);

      const imagePromises = files.map((file) => {
        return new Promise<contditionImageData>((resolve) => {
          const reader = new FileReader();
          const image = new Image();
          reader.readAsDataURL(file);

          reader.onload = () => {
            image.src = reader.result as string;
            image.onload = () => {
              resolve({
                name: file.name,
                width: image.width,
                height: image.height,
                url: reader.result,
              });
            };
          };
        });
      });

      Promise.all(imagePromises).then((imageData) => {
        setConditionImages(imageData);
      });
    },
    [setConditionImages]
  );

  return { handleConditionImageUpload, conditionImageData };
};

export default useGetConditionImg;
