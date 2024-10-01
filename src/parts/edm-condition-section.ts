/// CONDITION DIGI ///
/// CONDITION TPS ///
export const edmTPSFooterPart = (imgFooterNum: any, imageData: any) => {
  const sizes = Array(12).fill({ width: 0, height: 0 });
  imageData.slice(0, 12).forEach((image: any, index: any) => {
    sizes[index] = { width: image.width, height: image.height };
  });
  return `
    <!-- *SECTION Social Media -->
      <table
        width="700"
        cellpadding="0"
        cellspacing="0"
        style="margin: 0 auto; border-collapse: collapse">
        <tr>
          <td width="${sizes[0].width}">
            <!-- !APP -->
            <a
              _label="999_ce_footer_Samsung Members App"
              href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.samsung.android.voc%26hl%3Dth"
              target="_blank">
              <img
                src="images/ss-edm-ce-2024-436_${parseInt(
                  imgFooterNum
                )}.jpg?$ORIGIN_JPG$"
                alt=""
                width="${sizes[0].width}"
                height="${sizes[0].height}"
                style="display: block" />
            </a>
          </td>
          <td width="${sizes[1].width}">
            <!-- !FB -->
            <a
              _label="999_ce_footer_Facebook"
              href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fwww.facebook.com%2FSamsungThailand"
              target="_blank">
              <img
                src="images/ss-edm-ce-2024-436_${parseInt(
                  imgFooterNum + 1
                )}.jpg?$ORIGIN_JPG$"
                alt=""
                width="${sizes[1].width}"
                height="${sizes[1].height}"
                style="display: block" />
            </a>
          </td>
          <td width="${sizes[2].width}">
            <!-- !IG -->
            <a
              _label="999_ce_footer_Instagram"
              href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fwww.instagram.com%2Fsamsungthailand"
              target="_blank">
              <img
                src="images/ss-edm-ce-2024-436_${parseInt(
                  imgFooterNum + 2
                )}.jpg?$ORIGIN_JPG$"
                alt=""
                width="${sizes[2].width}"
                height="${sizes[2].height}"
                style="display: block" />
            </a>
          </td>
          <td width="${sizes[3].width}">
            <!-- !TW -->
            <a
              _label="999_ce_footer_X"
              href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Ftwitter.com%2FSamsungThailand"
              target="_blank">
              <img
                src="images/ss-edm-ce-2024-436_${parseInt(
                  imgFooterNum + 3
                )}.jpg?$ORIGIN_JPG$"
                alt=""
                width="${sizes[3].width}"
                height="${sizes[3].height}"
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
          <td width="${sizes[4].width}">
            <!-- !YT -->
            <a
              _label="999_ce_footer_Youtube"
              href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fwww.youtube.com%2Fuser%2FThaiSamsungMobile"
              target="_blank">
              <img
                src="images/ss-edm-ce-2024-436_${parseInt(
                  imgFooterNum + 4
                )}.jpg?$ORIGIN_JPG$"
                alt=""
                width="${sizes[4].width}"
                height="${sizes[4].height}"
                style="display: block" />
            </a>
          </td>
          <td width="${sizes[5].width}">
            <!-- !LINE -->
            <a
              _label="999_ce_footer_LINE"
              href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Flin.ee%2F6x4Oexj"
              target="_blank">
              <img
                src="images/ss-edm-ce-2024-436_${parseInt(
                  imgFooterNum + 5
                )}.jpg?$ORIGIN_JPG$"
                alt=""
                width="${sizes[5].width}"
                height="${sizes[5].height}"
                style="display: block" />
            </a>
          </td>
          <td width="${sizes[6].width}">
            <!-- !TIKTO9 -->
            <a
              _label="999_ce_footer_Tiktok"
              href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fwww.tiktok.com%2F%40samsungthailand"
              target="_blank">
              <img
                src="images/ss-edm-ce-2024-436_${parseInt(
                  imgFooterNum + 6
                )}.jpg?$ORIGIN_JPG$"
                alt=""
                width="${sizes[6].width}"
                height="${sizes[6].height}"
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
          <td width="${sizes[7].width}">
            <a
              _label="999_ce_footer_legal"
              href="https://www.samsung.com/th/info/legal/?samid=|%DA-ZSEA_SEG_BASIC_V2-HASH_EMAIL%|&cid="
              target="_blank">
              <!-- !LEGAL -->
              <img
                src="images/ss-edm-ce-2024-436_${parseInt(
                  imgFooterNum + 7
                )}.jpg?$ORIGIN_JPG$"
                alt=""
                width="${sizes[7].width}"
                height="${sizes[7].height}"
                style="display: block" />
            </a>
          </td>
          <td width="${sizes[8].width}">
            <!-- !LEGAL -->
            <img
              src="images/ss-edm-ce-2024-436_${parseInt(
                imgFooterNum + 8
              )}.jpg?$ORIGIN_JPG$"
              alt=""
              width="${sizes[8].width}"
              height="${sizes[8].height}"
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
          <td width="${sizes[9].width}">
            <a
              _label="999_ce_footer_privacy"
              href="https://www.samsung.com/th/info/privacy/?samid=|%DA-ZSEA_SEG_BASIC_V2-HASH_EMAIL%|&cid="
              target="_blank">
              <!-- !PRIVACY -->
              <img
                src="images/ss-edm-ce-2024-436_${parseInt(
                  imgFooterNum + 9
                )}.jpg?$ORIGIN_JPG$"
                alt=""
                width="${sizes[9].width}"
                height="${sizes[9].height}"
                style="display: block" />
            </a>
          </td>
          <td width="${sizes[10].width}">
            <a
              _label="999_ce_footer_unsubscribe"
              href="https://membership.gcrmportal.com/sec/common/optout.html"
              target="_blank">
              <!-- !UNSUBSCRIBE -->
              <img
                src="images/ss-edm-ce-2024-436_${parseInt(
                  imgFooterNum + 10
                )}.jpg?$ORIGIN_JPG$"
                alt=""
                width="${sizes[10].width}"
                height="${sizes[10].height}"
                style="display: block" />
            </a>
          </td>
        </tr>
      </table>
      <table
        width="${sizes[11].width}"
        cellpadding="0"
        cellspacing="0"
        style="margin: 0 auto; border-collapse: collapse">
        <tr>
          <td>
            <img
              src="images/ss-edm-ce-2024-436_${parseInt(
                imgFooterNum + 11
              )}.jpg?$ORIGIN_JPG$"
              alt=""
              width="${sizes[11].width}"
              height="${sizes[11].height}"
              style="display: block" />
          </td>
        </tr>
      </table>`;
};
