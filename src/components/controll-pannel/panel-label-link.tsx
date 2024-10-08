import contentImageStore from "../../store/contentImageStore";
import useGetLabelLink from "../../hooks/useGetLabelLink";

const PanelLabelLink = () => {
  const contentImageData = contentImageStore((state) => state.images);
  const { handleInputChange, labelLinks } = useGetLabelLink(
    contentImageData.length
  );

  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-semibold text-ct_3 text-[14px]">Label and Link</h1>

      <div className="w-[300px] bg-white icon-border rounded-md shadow-sm pt-1">
        {/* ถ้า contentImageData มีข้อมูล ให้สร้าง input */}
        {contentImageData.length > 0 ? (
          contentImageData.map((_, index) => (
            <div key={index} className="flex flex-col gap-2 p-2">
              <div className="flex flex-col">
                <label className="text-sm">Label {index + 1}</label>
                <input
                  type="text"
                  value={labelLinks[index]?.label}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      e.target.value,
                      labelLinks[index].link
                    )
                  }
                  placeholder={`Enter label for image ${index + 1}`}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm">Link {index + 1}</label>
                <input
                  type="text"
                  value={labelLinks[index]?.link}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      labelLinks[index].label,
                      e.target.value
                    )
                  }
                  placeholder={`Enter link for image ${index + 1}`}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 p-2">No images available.</p>
        )}
      </div>
    </div>
  );
};

export default PanelLabelLink;

// State สำหรับเก็บค่าของ link และ label ของแต่ละ input
// const [inputs, setInputs] = useState(
//   contentImageData.map(() => ({ label: "", link: "" }))
// );

// console.log(inputs);

// // Handle การเปลี่ยนแปลง input
// const handleInputChange = (index: number, field: string, value: string) => {
//   const updatedInputs = inputs.map((input, i) =>
//     i === index ? { ...input, [field]: value } : input
//   );
//   setInputs(updatedInputs);
// };
