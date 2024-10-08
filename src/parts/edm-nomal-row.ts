export const nomalRowTps = (
  index: number,
  labelAndLink: {
    label: string;
    link: string;
  },
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
            <!-- !IMG_${index + 1}-->
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
        </td>
      </tr>`;
};

export const nomalRowDigi = (
  index: number,
  labelAndLink: {
    label: string;
    link: string;
  },
  data?: { name: string; width: number; height: number }
) => {
  if (!data) {
    return `
      <!-- !IMG_01 -->
        <tr>
          <td align="top">
            <a
              _label="01_ref_product-sbs_image"
              href="https://www.samsung.com/th/refrigerators/side-by-side/rs4000dc-sbside-with-large-capacity-rs4000dc-side-by-side-with-large-capacity-583l-silver-rs57dg4000m9st/?cid=th_ow_email_m-gc-sea_ref_launch_threfsbslaunch--allsegmen01eslnalndsna_image_refsbslaunchwv1-241019_allsegmentsedm"
              target="_blank"
              style="display: block; border: none">
              <img
                src="images/ss-edm-ce-2024-451_01.jpg?$ORIGIN_JPG$"
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
          </td>
        </tr>`;
  }

  return `
      <!-- !IMG_${index + 1} -->
        <tr>
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
          </td>
        </tr>`;
};
