import { contditionImageData } from "../type";

// TPS CONDITION
export const getTPSConditionPart = (
  conditionImageData?: contditionImageData[]
) => {
  //ข้อมูลภาพ
  const data = Array(12).fill({ name: "IMG", width: 0, height: 0 });
  conditionImageData
    ? conditionImageData.slice(0, 12).forEach((image, index) => {
        data[index] = {
          name: image.name,
          width: image.width,
          height: image.height,
        };
      })
    : data;

  return `
  <!-- *SECTION Social Media -->
    <table
      width="700"
      cellpadding="0"
      cellspacing="0"
      style="margin: 0 auto; border-collapse: collapse">
      <tr>
        <td width="${data[0].width}">
          <!-- !APP -->
          <a
            _label="999_ref-bs_footer_Samsung Members App"
            href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.samsung.android.voc%26hl%3Dth"
            target="_blank">
            <img
              src="images/${data[0].name}?$ORIGIN_JPG$"
              alt=""
              width="${data[0].width}"
              height="${data[0].height}"
              style="display: block" />
          </a>
        </td>
        <td width="${data[1].width}">
          <!-- !FB -->
          <a
            _label="999_ref-bs_footer_Facebook"
            href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fwww.facebook.com%2FSamsungThailand"
            target="_blank">
            <img
              src="images/${data[1].name}?$ORIGIN_JPG$"
              alt=""
              width="${data[1].width}"
              height="${data[1].height}"
              style="display: block" />
          </a>
        </td>
        <td width="${data[2].width}">
          <!-- !IG -->
          <a
            _label="999_ref-bs_footer_Instagram"
            href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fwww.instagram.com%2Fsamsungthailand"
            target="_blank">
            <img
              src="images/${data[2].name}?$ORIGIN_JPG$"
              alt=""
              width="${data[2].width}"
              height="${data[2].height}"
              style="display: block" />
          </a>
        </td>
        <td width="${data[3].width}">
          <!-- !TW -->
          <a
            _label="999_ref-bs_footer_X"
            href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Ftwitter.com%2FSamsungThailand"
            target="_blank">
            <img
              src="images/${data[3].name}?$ORIGIN_JPG$"
              alt=""
              width="${data[3].width}"
              height="${data[3].height}"
              style="display: block" />
          </a>
        </td>
      </tr>
    </table>
    <table
      width="700"
      cellpadding="0"
      cellspacing="0"
      style="margin: 0 auto; border-collapse: collapse">
      <tr>
        <td width="${data[4].width}">
          <!-- !YT -->
          <a
            _label="999_ref-bs_footer_Youtube"
            href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fwww.youtube.com%2Fuser%2FThaiSamsungMobile"
            target="_blank">
            <img
              src="images/${data[4].name}?$ORIGIN_JPG$"
              alt=""
              width="${data[4].width}"
              height="${data[4].height}"
              style="display: block" />
          </a>
        </td>
        <td width="${data[5].width}">
          <!-- !LINE -->
          <a
            _label="999_ref-bs_footer_LINE"
            href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Flin.ee%2F6x4Oexj"
            target="_blank">
            <img
              src="images/${data[5].name}?$ORIGIN_JPG$"
              alt=""
              width="${data[5].width}"
              height="${data[5].height}"
              style="display: block" />
          </a>
        </td>
        <td width="${data[6].width}">
          <!-- !TIKTO9 -->
          <a
            _label="999_ref-bs_footer_Tiktok"
            href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fwww.tiktok.com%2F%40samsungthailand"
            target="_blank">
            <img
              src="images/${data[6].name}?$ORIGIN_JPG$"
              alt=""
              width="${data[6].width}"
              height="${data[6].height}"
              style="display: block" />
          </a>
        </td>
      </tr>
    </table>
    <!-- !SECTION Social Media -->
    <!-- *SECTION Condition -->
    <table
      width="700"
      cellpadding="0"
      cellspacing="0"
      style="margin: 0 auto; border-collapse: collapse">
      <tr>
        <td width="${data[7].width}">
          <a
            _label="999_ref-bs_footer_legal"
            href="https://www.samsung.com/th/info/legal/?samid=|%DA-ZSEA_SEG_BASIC_V2-HASH_EMAIL%|&cid="
            target="_blank">
            <!-- !LEGAL -->
            <img
              src="images/${data[7].name}?$ORIGIN_JPG$"
              alt=""
              width="${data[7].width}"
              height="${data[7].height}"
              style="display: block" />
          </a>
        </td>
        <td width="${data[8].width}">
          <!-- !LEGAL -->
          <img
            src="images/${data[8].name}?$ORIGIN_JPG$"
            alt=""
            width="${data[8].width}"
            height="${data[8].height}"
            style="display: block" />
        </td>
      </tr>
    </table>
    <table
      width="700"
      cellpadding="0"
      cellspacing="0"
      style="margin: 0 auto; border-collapse: collapse">
      <tr>
        <td width="${data[9].width}">
          <a
            _label="999_ref-bs_footer_privacy"
            href="https://www.samsung.com/th/info/privacy/?samid=|%DA-ZSEA_SEG_BASIC_V2-HASH_EMAIL%|&cid="
            target="_blank">
            <!-- !PRIVACY -->
            <img
              src="images/${data[9].name}?$ORIGIN_JPG$"
              alt=""
              width="${data[9].width}"
              height="${data[9].height}"
              style="display: block" />
          </a>
        </td>
        <td width="${data[10].width}">
          <a
            _label="999_ref-bs_footer_unsubscribe"
            href="https://membership.gcrmportal.com/sec/common/optout.html"
            target="_blank">
            <!-- !UNSUBSCRIBE -->
            <img
              src="images/${data[10].name}?$ORIGIN_JPG$"
              alt=""
              width="${data[10].width}"
              height="${data[10].height}"
              style="display: block" />
          </a>
        </td>
      </tr>
    </table>
    <table
      width="700"
      cellpadding="0"
      cellspacing="0"
      style="margin: 0 auto; border-collapse: collapse">
      <tr>
        <td>
          <img
            src="images/${data[11].name}?$ORIGIN_JPG$"
            alt=""
            width="700"
            height="${data[11].height}"
            style="display: block" />
        </td>
      </tr>
    </table>
    <!-- !SECTION Condition -->`;
};

// DIGI CONDITION
export const getDIGICondotionPart = (
  conditionImageData?: contditionImageData[]
) => {
  //ข้อมูลภาพ
  const data = Array(12).fill({ name: "IMG", width: 0, height: 0 });
  conditionImageData
    ? conditionImageData.slice(0, 12).forEach((image, index) => {
        data[index] = {
          name: image.name,
          width: image.width,
          height: image.height,
        };
      })
    : data;

  return `
  <!-- *SECTION Social Media -->
      <table
        border="0"
        align="center"
        cellpadding="0"
        cellspacing="0"
        class="table_css"
        aria-hidden="true"
        role="presentation"
        style="
          background-color: #000000;
          width: auto;
          max-width: 700px;
          border-collapse: collapse;
          border-spacing: 0;
          border: none;
          margin: 0 auto;
        ">
        <tr>
          <td align="center" bgcolor="#000000">
            <table
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
              class="table_css"
              aria-hidden="true"
              role="presentation"
              style="
                background-color: #000000;
                width: auto;
                max-width: 700px;
                border-collapse: collapse;
                border-spacing: 0;
                border: none;
              ">
              <tr>
                <!-- !APP -->
                <td>
                  <a
                    _label="999_ref-bs_footer_Samsung Members App"
                    href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.samsung.android.voc%26hl%3Dth"
                    target="_blank">
                    <img
                      src="images/${data[0].name}?$ORIGIN_JPG$"
                      style="
                        max-width: ${data[0].width}px;
                        padding: 0;
                        display: block;
                        width: 100%;
                        height: auto;
                      "
                      aria-hidden="true"
                      alt=""
                      width="100%"
                      border="0"
                      align="center" />
                  </a>
                </td>
                <!-- !FB -->
                <td>
                  <a
                    _label="999_ref-bs_footer_Facebook"
                    href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fwww.facebook.com%2FSamsungThailand"
                    target="_blank">
                    <img
                      src="images/${data[1].name}?$ORIGIN_JPG$"
                      style="
                        max-width: ${data[1].width}px;
                        padding: 0;
                        display: block;
                        width: 100%;
                        height: auto;
                      "
                      aria-hidden="true"
                      alt=""
                      width="100%"
                      border="0"
                      align="center" />
                  </a>
                </td>
                <!-- !IG -->
                <td>
                  <a
                    _label="999_ref-bs_footer_Instagram"
                    href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fwww.instagram.com%2Fsamsungthailand"
                    target="_blank">
                    <img
                      src="images/${data[2].name}?$ORIGIN_JPG$"
                      style="
                        max-width: ${data[2].width}px;
                        padding: 0;
                        display: block;
                        width: 100%;
                        height: auto;
                      "
                      aria-hidden="true"
                      alt=""
                      width="100%"
                      border="0"
                      align="center" />
                  </a>
                </td>
                <!-- !TW -->
                <td>
                  <a
                    _label="999_ref-bs_footer_X"
                    href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Ftwitter.com%2FSamsungThailand"
                    target="_blank">
                    <img
                      src="images/${data[3].name}?$ORIGIN_JPG$"
                      style="
                        max-width: ${data[3].width}px;
                        padding: 0;
                        display: block;
                        width: 100%;
                        height: auto;
                      "
                      aria-hidden="true"
                      alt=""
                      width="100%"
                      border="0"
                      align="center" />
                  </a>
                </td>
              </tr>
            </table>
            <table
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
              class="table_css"
              aria-hidden="true"
              role="presentation"
              style="
                background-color: #000000;
                width: auto;
                max-width: 700px;
                border-collapse: collapse;
                border-spacing: 0;
                border: none;
              ">
              <tr>
                <!-- !YT -->
                <td>
                  <a
                    _label="999_ref-bs_footer_Youtube"
                    href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fwww.youtube.com%2Fuser%2FThaiSamsungMobile"
                    target="_blank">
                    <img
                      src="images/${data[4].name}?$ORIGIN_JPG$"
                      style="
                        max-width: ${data[4].width}px;
                        padding: 0;
                        display: block;
                        width: 100%;
                        height: auto;
                      "
                      aria-hidden="true"
                      alt=""
                      width="100%"
                      border="0"
                      align="center" />
                  </a>
                </td>
                <!-- !LINE -->
                <td>
                  <a
                    _label="999_ref-bs_footer_LINE"
                    href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Flin.ee%2F6x4Oexj"
                    target="_blank">
                    <img
                      src="images/${data[5].name}?$ORIGIN_JPG$"
                      style="
                        max-width: ${data[5].width}px;
                        padding: 0;
                        display: block;
                        width: 100%;
                        height: auto;
                      "
                      aria-hidden="true"
                      alt=""
                      width="100%"
                      border="0"
                      align="center" />
                  </a>
                </td>
                <!-- !TIKTOK -->
                <td>
                  <a
                    _label="999_ref-bs_footer_Tiktok"
                    href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fwww.tiktok.com%2F%40samsungthailand"
                    target="_blank">
                    <img
                      src="images/${data[6].name}?$ORIGIN_JPG$"
                      style="
                        max-width: ${data[6].width}px;
                        padding: 0;
                        display: block;
                        width: 100%;
                        height: auto;
                      "
                      aria-hidden="true"
                      alt=""
                      width="100%"
                      border="0"
                      align="center" />
                  </a>
                </td>
              </tr>
            </table>
            <!-- *SECTION Condition -->
            <table
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
              class="table_css"
              aria-hidden="true"
              role="presentation"
              style="
                background-color: #000000;
                width: auto;
                max-width: 700px;
                border-collapse: collapse;
                border-spacing: 0;
                border: none;
              ">
              <tr>
                <!-- !LEGAL -->
                <td>
                  <a
                    _label="999_ref-bs_footer_legal"
                    href="https://www.samsung.com/th/info/legal/?cid=th_ow_email_m-gc-sea_ref_launch_threfsbslaunch--allsegmen01eslnalndsna_image_refsbslaunchwv1-241019_allsegmentsedm"
                    target="_blank">
                    <img
                      src="images/${data[7].name}?$ORIGIN_JPG$"
                      style="
                        max-width: ${data[7].width}px;
                        padding: 0;
                        display: block;
                        width: 100%;
                        height: auto;
                      "
                      aria-hidden="true"
                      alt=""
                      width="100%"
                      border="0"
                      align="center" />
                  </a>
                </td>
                <!-- !LEGAL -->
                <td>
                  <img
                    src="images/${data[8].name}?$ORIGIN_JPG$"
                    style="
                      max-width: ${data[8].width}px;
                      padding: 0;
                      display: block;
                      width: 100%;
                      height: auto;
                    "
                    aria-hidden="true"
                    alt=""
                    width="100%"
                    border="0"
                    align="center" />
                </td>
              </tr>
            </table>
            <table
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
              class="table_css"
              aria-hidden="true"
              role="presentation"
              style="
                background-color: #000000;
                width: auto;
                max-width: 700px;
                border-collapse: collapse;
                border-spacing: 0;
                border: none;
              ">
              <tr>
                <!-- !PRIVACY -->
                <td>
                  <a
                    _label="999_ref-bs_footer_privacy"
                    href="https://www.samsung.com/th/info/privacy/?cid=th_ow_email_m-gc-sea_ref_launch_threfsbslaunch--allsegmen01eslnalndsna_image_refsbslaunchwv1-241019_allsegmentsedm"
                    target="_blank">
                    <img
                      src="images/${data[9].name}?$ORIGIN_JPG$"
                      style="
                        max-width: ${data[9].width}px;
                        padding: 0;
                        display: block;
                        width: 100%;
                        height: auto;
                      "
                      aria-hidden="true"
                      alt=""
                      width="100%"
                      border="0"
                      align="center" />
                  </a>
                </td>
                <td>
                  <a
                    _label="999_ref-bs_footer_unsubscribe"
                    href="https://membership.gcrmportal.com/sec/common/optout.html"
                    target="_blank">
                    <img
                      src="images/${data[10].name}?$ORIGIN_JPG$"
                      style="
                        max-width: ${data[10].width}px;
                        padding: 0;
                        display: block;
                        width: 100%;
                        height: auto;
                      "
                      aria-hidden="true"
                      alt=""
                      width="100%"
                      border="0"
                      align="center" />
                  </a>
                </td>
              </tr>
            </table>
            <table
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
              class="table_css"
              aria-hidden="true"
              role="presentation"
              style="
                background-color: #000000;
                width: auto;
                max-width: 700px;
                border-collapse: collapse;
                border-spacing: 0;
                border: none;
              ">
              <tr>
                <td>
                  <img
                    src="images/${data[11].name}?$ORIGIN_JPG$"
                    style="
                      max-width: 700px;
                      padding: 0;
                      display: block;
                      width: 100%;
                      height: auto;
                    "
                    aria-hidden="true"
                    alt=""
                    width="100%"
                    border="0"
                    align="center" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`;
};
