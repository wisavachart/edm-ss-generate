import { useCallback } from "react";
import contentImageStore from "../store/contentImageStore";
import { contentImageData } from "../type";

const useGetContentImg = () => {
  const contentImageData = contentImageStore((state) => state.images);
  const setContentImages = contentImageStore((state) => state.setImages);
  const handleContentImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(event.target.files || []);

      const imagePromises = files.map((file) => {
        return new Promise<contentImageData>((resolve) => {
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
        setContentImages(imageData);
      });
    },
    [setContentImages]
  );
  return { handleContentImageUpload, contentImageData };
};

export default useGetContentImg;
