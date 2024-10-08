import useGetFileName from "../../hooks/useGetFileName";
import useGetLayout from "../../hooks/useGetLayout";

import PreviewElement from "./preview-element";

const PanelLayout = () => {
  //Input filename
  const { handleChange, localValues } = useGetFileName();
  //Input Layout
  const { addCol, addRow, handleCreateHTML } = useGetLayout();

  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-semibold text-ct_3 text-[14px] ">Layout</h1>
      {/* PANEL */}
      <div className="w-[300px] bg-white icon-border rounded-md shadow-sm pt-1">
        {/* FILE NAME */}
        <div className="flex flex-col border-bottom px-4 py-3 gap-3">
          <h1 className="text-[14px] font-medium">File name</h1>
          {/* FILE NAME FORM */}
          <form>
            <div className="flex gap-2">
              <div className="flex gap-2 items-center bg-ct_1 rounded-md flex-1">
                <h6 className="text-[12px] text-ct_3 px-2">EDM ID :</h6>
                <input
                  id="edmNum"
                  name="edmNum"
                  value={localValues.edmNum}
                  type="number"
                  className="file-name-input py-1"
                  placeholder="0"
                  onChange={(event) => {
                    handleChange("edmNum", event);
                  }}
                />
              </div>
              <div className="flex gap-2 items-center bg-ct_1 rounded-md flex-1">
                <h6 className="text-[12px] text-ct_3 px-2">Link :</h6>
                <input
                  id="linkNum"
                  name="linkNum"
                  value={localValues.linkNum}
                  type="number"
                  className="file-name-input py-1"
                  placeholder="0"
                  onChange={(event) => handleChange("linkNum", event)}
                />
              </div>
            </div>
          </form>
          {/* <div className="">
            <button className="font-medium text-[14px] w-full btn-border rounded-sm">
              Set Filename
            </button>
          </div> */}
        </div>
        {/* ADD ROW */}
        <div className="border-bottom px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-[14px] font-medium">Add row</h1>
            <div className="flex items-center gap-4">
              <img src="icons/row.svg" alt="" />
              <h1
                onClick={addRow}
                className="text-[20px] font-bold text-cb_4 px-2 bg-ct_1 hover:bg-ct_2  rounded-md cursor-pointer">
                +
              </h1>
            </div>
          </div>
        </div>
        {/* ADD COLUMN */}
        <div className="border-bottom px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-[14px] font-medium">Add column in row</h1>
            <div className="flex items-center gap-4">
              <img src="icons/column.svg" alt="" />
              <h1
                onClick={addCol}
                className="text-[20px] font-bold text-cb_4 px-2 bg-ct_1 hover:bg-ct_2  rounded-md cursor-pointer">
                +
              </h1>
            </div>
          </div>
        </div>
        {/* BTN */}
        <div className="flex flex-col gap-2 px-4 py-3">
          {/* BTN RESET BACK PREVIEW*/}
          <div className="flex justify-between gap-2">
            <button className="font-medium text-[14px] btn-border flex-1 rounded-sm">
              Back
            </button>
            <button className="font-medium text-[14px] btn-border flex-1 rounded-sm">
              Reset
            </button>
          </div>
          {/* BTN RESET CREATE */}
          <div className="">
            <button
              onClick={handleCreateHTML}
              className="font-medium text-[14px] w-full btn-border rounded-sm">
              Create Html Tag
            </button>
          </div>
        </div>
        {/* Preview */}
        <div className=" px-4 pb-4">
          <h1 className="text-[12px] text-ct_3 pb-2">Preview</h1>
          <div className="w-full  bg-ct_1 rounded-md items-center flex flex-col justify-center py-4 gap-[2px]">
            <PreviewElement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelLayout;
