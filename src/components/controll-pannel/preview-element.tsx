import useGetLayout from "../../hooks/useGetLayout";

const PreviewElement = () => {
  const { boxes } = useGetLayout();

  return boxes.map((box, i) => (
    <div key={i} className="h-6 bg-black w-[180px] rounded-sm flex text-center">
      <h1 className="text-white"></h1>
      {box.cols.map((_, j) => (
        <div key={j} className="flex-1 bg-green-500 border flex text-center">
          <h1 className="text-white"></h1>
        </div>
      ))}
    </div>
  ));
};
export default PreviewElement;
