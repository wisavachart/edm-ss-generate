import useGetConditionImg from "../../hooks/useGetConditionImg";

const PanelImages = () => {
  const { conditionImageData, handleConditionImageUpload } =
    useGetConditionImg();

  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-semibold text-ct_3 text-[14px]">Images</h1>
      <div className="w-[300px] bg-white icon-border rounded-md shadow-sm pt-1 h-[800px] check">
        {/* Upload Content Image : */}
        <div className="flex flex-col gap-2 px-4 mt-4">
          <h6 className="font-semibold text-ct_3 text-[14px]">
            Upload Content Image :
          </h6>
          <div className="flex items-start justify-start">
            <label className="w-64 flex flex-col justify-center items-center  py-1 bg-white text-blue-500 rounded-md  border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white">
              <span className="text-center font-semibold leading-none text-[14px]">
                Select a file
              </span>
              <input
                type="file"
                multiple
                accept="image/*"
                // onChange={(e) => handleConditionImageUpload(e)}
                className="hidden"
              />
            </label>
          </div>
        </div>
        {/* Upload Condition Image : */}
        <div className="flex flex-col gap-2 px-4 mt-4">
          <h6 className="font-semibold text-ct_3 text-[14px]">
            Upload Condition Image :
          </h6>
          <div className="flex items-start justify-start">
            <label className="w-64 flex flex-col justify-center items-center  py-1 bg-white text-blue-500 rounded-md  border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white">
              <span className="text-center font-semibold leading-none text-[14px]">
                Select a file
              </span>
              <input
                type="file"
                className="hidden"
                multiple
                accept="image/*"
                onChange={(e) => handleConditionImageUpload(e)}
              />
            </label>
          </div>
        </div>

        {/* display area */}
        <div className="flex flex-col">
          {conditionImageData.map((image: any, index: any) => (
            <div key={index} style={{ margin: "10px 0" }}>
              <p className="text-[14px]">
                <strong>Name:</strong> {image.name}
              </p>
              <p className="text-[14px]">
                <strong>Width:</strong> {image.width}px
              </p>
              <p className="text-[14px]">
                <strong>Height:</strong> {image.height}px
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PanelImages;
