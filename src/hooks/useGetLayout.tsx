import { createTpsColumnInRow } from "../parts/edm-column-in-row";
import { openTableTagTPS } from "../parts/edm-header-part";
import { nomalRowTps } from "../parts/edm-nomal-row";
import contentImageStore from "../store/contentImageStore";
import markUpTpsStore from "../store/markupTpsStore";
import useLabelLinkStore from "../store/useLabelLinkStore";
import useLayoutStore from "../store/useLayoutStore";

const useGetLayout = () => {
  const boxes = useLayoutStore((state) => state.boxes);
  const addRow = useLayoutStore((state) => state.addRow);
  const addCol = useLayoutStore((state) => state.addCol);
  const markUpTps = markUpTpsStore((state) => state.markUpTps);
  const setMarkUpTps = markUpTpsStore((state) => state.setMarkUpTps);
  const contentImageData = contentImageStore((state) => state.images);
  const labelAndLinkData = useLabelLinkStore((state) => state.labelLinks);

  const imgdata = Array(contentImageData.length).fill({
    name: "IMG",
    width: 0,
    height: 0,
  });
  contentImageData
    ? contentImageData
        .slice(0, contentImageData.length)
        .forEach((image, index) => {
          imgdata[index] = {
            name: image.name,
            width: image.width,
            height: image.height,
          };
        })
    : imgdata;

  const handleCreateHTML = () => {
    let markupText = openTableTagTPS();
    let i = 0;
    boxes.forEach((item, index) => {
      const colsLength = item.cols.length;
      const lastIndex = boxes.length - 1;

      //แถวปกติ
      // let nomalrow = `<tr><td></td></tr>`;
      let nomalrow = `${nomalRowTps(i, labelAndLinkData[i], imgdata[i])}`;
      if (colsLength == 0) {
        markupText += nomalrow;
        i += 1;
      }
      if (colsLength != 0) {
        let cols = ``;
        for (let j = 0; j <= colsLength - 1; j++) {
          // cols += `<td>${j}</td>`;
          cols += `${createTpsColumnInRow(i + j, imgdata[i + j])}`;
        }

        let markCol = `${openTableTagTPS()}
      <tr>${cols}
      </tr>
  </table>`;

        markupText += markCol;
        i += colsLength;
      }

      if (index < lastIndex) {
        const nextItemColsLength = boxes[index + 1].cols.length;
        const currentItemColsLenght = item.cols.length;
        // console.log(`Length of next item cols: ${nextItemColsLength}`);
        currentItemColsLenght == 0 &&
          nextItemColsLength !== 0 &&
          (markupText += `
  </table>`);

        if (currentItemColsLenght !== 0 && nextItemColsLength == 0) {
          markupText += `${openTableTagTPS()}`;
        }
      } else if (index == lastIndex) {
        console.log("This is the last item, no next item.");
        const lastItemColsLength = boxes[lastIndex].cols.length;
        lastItemColsLength == 0 &&
          (markupText += `
    </table>`);
      }
    });
    setMarkUpTps(markupText);
  };

  return { boxes, addCol, addRow, handleCreateHTML, markUpTps };
};

export default useGetLayout;
