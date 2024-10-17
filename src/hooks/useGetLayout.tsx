import {
  createDigiColumnInrow,
  createTpsColumnInRow,
} from "../parts/edm-column-in-row";
import { openTableTagDIGI, openTableTagTPS } from "../parts/edm-header-part";
import { nomalRowDigi, nomalRowTps } from "../parts/edm-nomal-row";
import contentImageStore from "../store/contentImageStore";
import markUpTpsStore from "../store/markupTpsStore";
import useLabelLinkStore from "../store/useLabelLinkStore";
import useLayoutStore from "../store/useLayoutStore";

const useGetLayout = () => {
  const boxes = useLayoutStore((state) => state.boxes);
  const addRow = useLayoutStore((state) => state.addRow);
  const addCol = useLayoutStore((state) => state.addCol);
  const markUpTps = markUpTpsStore((state) => state.markUpTps);
  const markUpDIGI = markUpTpsStore((state) => state.markUpDIGI);
  const setMarkUpTps = markUpTpsStore((state) => state.setMarkUpTps);
  const setMarkUpDIGI = markUpTpsStore((state) => state.setMarkUpDIGI);
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
    // Start ----->
    let markupDigi = openTableTagDIGI();
    let markupText = openTableTagTPS();

    let i = 0;
    boxes.forEach((item, index) => {
      const colsLength = item.cols.length;
      const lastIndex = boxes.length - 1;

      //แถวปกติ
      let nomalrowDigi = `${nomalRowDigi(i, labelAndLinkData[i], imgdata[i])}
  </table>`;
      let nomalrow = `${nomalRowTps(i, labelAndLinkData[i], imgdata[i])}`;
      if (colsLength == 0) {
        markupDigi += nomalrowDigi;
        markupText += nomalrow;
        i += 1;
      }
      if (colsLength != 0) {
        let colsDigi = ``;
        let cols = ``;
        for (let j = 0; j <= colsLength - 1; j++) {
          // cols += `<td>${j}</td>`;
          colsDigi += `${createDigiColumnInrow(
            i + j,
            labelAndLinkData[i],
            imgdata[i + j]
          )}`;
          cols += `${createTpsColumnInRow(
            i + j,
            labelAndLinkData[i],
            imgdata[i + j]
          )}`;
        }
        let markColdigi = `${openTableTagDIGI()}
       <tr>${colsDigi}
      </tr>
  </table> 
        `;
        let markCol = `${openTableTagTPS()}
      <tr>${cols}
      </tr>
  </table>`;
        markupDigi += markColdigi;
        markupText += markCol;
        i += colsLength;
      }

      if (index < lastIndex) {
        const nextItemColsLength = boxes[index + 1].cols.length;
        const currentItemColsLenght = item.cols.length;
        // console.log(`Length of next item cols: ${nextItemColsLength}`);
        if (currentItemColsLenght == 0 && nextItemColsLength == 0) {
          markupDigi += `${openTableTagDIGI()}`;
        }
        if (currentItemColsLenght == 0 && nextItemColsLength !== 0) {
          //         markupDigi += `
          // </table>`;
          markupText += `
  </table>`;
        }
        //       currentItemColsLenght == 0 &&
        //         nextItemColsLength !== 0 &&
        //         (markupText += `
        // </table>`);

        if (currentItemColsLenght !== 0 && nextItemColsLength == 0) {
          markupDigi += `${openTableTagDIGI()}`;
          markupText += `${openTableTagTPS()}`;
        }
      } else if (index == lastIndex) {
        console.log("This is the last item, no next item.");
        const lastItemColsLength = boxes[lastIndex].cols.length;
        if (lastItemColsLength == 0) {
          //       markupDigi += `
          // </table>`;
          markupText += `
    </table>`;
        }
        //     lastItemColsLength == 0 &&
        //       (markupText += `
        // </table>`);
      }
    });
    // GENRATE --->
    setMarkUpTps(markupText);
    setMarkUpDIGI(markupDigi);
  };

  return { boxes, addCol, addRow, handleCreateHTML, markUpTps, markUpDIGI };
};

export default useGetLayout;
