export const createTpsColumnInRow = (
  index: number,
  labelAndLink: {
    label: string;
    link: string;
  },
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
        <td width="${data.width}">
          <a
            _label="${labelAndLink.label}"
            href="${
              labelAndLink.link
            }?samid=|%DA-ZSEA_SEG_BASIC_V2-HASH_EMAIL%|&cid="
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

export const createDigiColumnInrow = (
  index: number,
  labelAndLink: {
    label: string;
    link: string;
  },
  data?: { name: string; width: number; height: number }
) => {
  if (!data) {
    return `
    <!-- !IMG_${index + 1} -->
    <td align="top">
            <a
              _label="01_ref_product-sbs_cta"
              href="https://www.samsung.com/th/refrigerators/side-by-side/rs4000dc-sbside-with-large-capacity-rs4000dc-side-by-side-with-large-capacity-583l-silver-rs57dg4000m9st/?cid=th_ow_email_m-gc-sea_ref_launch_threfsbslaunch--allsegmen01eslnalndsna_image_refsbslaunchwv1-241019_allsegmentsedm"
              target="_blank"
              style="display: block; border: none">
              <img
                src="images/ss-edm-ce-2024-451_02.jpg?$ORIGIN_JPG$"
                width="700"
                height=""
                alt=""
                style="
                  padding: 0;
                  display: block;
                  width: 100%;
                  max-width: 700px;
                  height: auto;
                  border: none;
                " />
            </a>
          </td>`;
  }
  return `
        <!-- !IMG_${index + 1} -->
        <td align="top">
            <a
              _label="${labelAndLink.label}"
              href="${
                labelAndLink.link
              }?cid=th_ow_email_m-gc-sea_ref_launch_threfsbslaunch--allsegmen01eslnalndsna_image_refsbslaunchwv1-241019_allsegmentsedm"
              target="_blank"
              style="display: block; border: none">
              <img
                src="images/${data.name}?$ORIGIN_JPG$"
                width="700"
                height=""
                alt=""
                style="
                  padding: 0;
                  display: block;
                  width: 100%;
                  max-width: ${data.width}px;
                  height: auto;
                  border: none;
                " />
            </a>
        </td>`;
};
