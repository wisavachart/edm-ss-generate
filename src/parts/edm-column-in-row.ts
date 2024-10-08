export const createTpsColumnInRow = (
  index: number,
  data?: { name: string; width: number; height: number }
) => {
  if (!data) {
    return `
    <td width="257">
          <a
            _label="05_ref_offer-specialprice_text"
            href="https://www.samsung.com/th/refrigerators/side-by-side/rs4000dc-sbside-with-large-capacity-rs4000dc-side-by-side-with-large-capacity-583l-silver-rs57dg4000m9st/?samid=|%DA-ZSEA_SEG_BASIC_V2-HASH_EMAIL%|&cid="
            target="_blank">
            <!-- !IMG_-->
            <img
              src="images/ss-edm-ce-2024-451_11.jpg?$ORIGIN_JPG$"
              alt=""
              width="257"
              height="160"
              style="display: block" />
          </a>
        </td>`;
  }
  return `
        <td width="257">
          <a
            _label="05_ref_offer-specialprice_text"
            href="https://www.samsung.com/th/refrigerators/side-by-side/rs4000dc-sbside-with-large-capacity-rs4000dc-side-by-side-with-large-capacity-583l-silver-rs57dg4000m9st/?samid=|%DA-ZSEA_SEG_BASIC_V2-HASH_EMAIL%|&cid="
            target="_blank">
            <!-- !IMG_${index + 1} -->
            <img
              src="images/${data.name}?$ORIGIN_JPG$"
              alt=""
              width="${data.width}"
              height="${data.height}"
              style="display: block" />
          </a>
        </td>`;
};
