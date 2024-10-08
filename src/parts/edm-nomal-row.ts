export const nomalRowTps = (
  index: number,
  data?: { name: string; width: number; height: number }
) => {
  if (!data) {
    return `
      <tr>
        <td width="700">
          <a
            _label="04_ref_offer-warranty_cta"
            href="https://www.samsung.com/th/refrigerators/side-by-side/rs4000dc-sbside-with-large-capacity-rs4000dc-side-by-side-with-large-capacity-583l-silver-rs57dg4000m9st/?samid=|%DA-ZSEA_SEG_BASIC_V2-HASH_EMAIL%|&cid="
            target="_blank">
            <!-- !IMG_${index + 1} -->
            <img
              src="images/IMGNAME?$ORIGIN_JPG$"
              alt=""
              width="0"
              height="0"
              style="display: block" />
          </a>
        </td>
      </tr>`;
  }
  return `
      <tr>
        <td width="700">
          <a
            _label="04_ref_offer-warranty_cta"
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
        </td>
      </tr>`;
};
