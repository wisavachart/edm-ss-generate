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
    <table
      width="700"
      cellpadding="0"
      cellspacing="0"
      style="margin: 0 auto; border-collapse: collapse">
      <tbody>
      <tr>
        <td width="${data[0].width}">
          
          <a            
            href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.samsung.android.voc%26hl%3Dth"
            _label="999_ref-bs_footer_Samsung Members App"
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
          
          <a            
            href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fwww.facebook.com%2FSamsungThailand"
            _label="999_ref-bs_footer_Facebook"
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
          
          <a            
            href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fwww.instagram.com%2Fsamsungthailand"
            _label="999_ref-bs_footer_Instagram"
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
          
          <a
            
            href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Ftwitter.com%2FSamsungThailand"
            _label="999_ref-bs_footer_X"
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
      </tbody>
    </table>
    <table
      width="700"
      cellpadding="0"
      cellspacing="0"
      style="margin: 0 auto; border-collapse: collapse">
      <tbody>
      <tr>
        <td width="${data[4].width}">
          
          <a
            
            href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fwww.youtube.com%2Fuser%2FThaiSamsungMobile"
            _label="999_ref-bs_footer_Youtube"
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
          
          <a
            
            href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Flin.ee%2F6x4Oexj"
            _label="999_ref-bs_footer_LINE"
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
          
          <a
            
            href="https://samsungseao.demdex.net/event?d_adsrc=Email&d_event=click&d_campaign=TH23&d_adgroup=Footer&d_rd=https%3A%2F%2Fwww.tiktok.com%2F%40samsungthailand"
            _label="999_ref-bs_footer_Tiktok"
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
      </tbody>
    </table>
    <table
      width="700"
      cellpadding="0"
      cellspacing="0"
      style="margin: 0 auto; border-collapse: collapse">
      <tbody>
      <tr>
        <td width="${data[7].width}">
          <a
            
            href="https://www.samsung.com/th/info/legal/?samid=|%DA-ZSEA_SEG_BASIC_V2-HASH_EMAIL%|&cid="
            _label="999_ref-bs_footer_legal"
            target="_blank">
            
            <img
              src="images/${data[7].name}?$ORIGIN_JPG$"
              alt=""
              width="${data[7].width}"
              height="${data[7].height}"
              style="display: block" />
          </a>
        </td>
        <td width="${data[8].width}">
          
          <img
            src="images/${data[8].name}?$ORIGIN_JPG$"
            alt=""
            width="${data[8].width}"
            height="${data[8].height}"
            style="display: block" />
        </td>
       </tr>
      </tbody>
    </table>
    <table
      width="700"
      cellpadding="0"
      cellspacing="0"
      style="margin: 0 auto; border-collapse: collapse">
      <tbody>
      <tr>
        <td width="${data[9].width}">
          <a
            
            href="https://www.samsung.com/th/info/privacy/?samid=|%DA-ZSEA_SEG_BASIC_V2-HASH_EMAIL%|&cid="
            _label="999_ref-bs_footer_privacy"
            target="_blank">
            
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
            
            href="https://membership.gcrmportal.com/sec/common/optout.html"
            _label="999_ref-bs_footer_unsubscribe"
            target="_blank">
           
            <img
              src="images/${data[10].name}?$ORIGIN_JPG$"
              alt=""
              width="${data[10].width}"
              height="${data[10].height}"
              style="display: block" />
          </a>
        </td>
       </tr>
      </tbody>
    </table>
    <table
      width="700"
      cellpadding="0"
      cellspacing="0"
      style="margin: 0 auto; border-collapse: collapse">
      <tbody>
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
      </tbody>
    </table>
    `;
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
                <td>
                  
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
                  
                </td>
                
                <td>
                 
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
                  
                </td>
                
                <td>
                  
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
                  
                </td>
                
                <td>
                  
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
                  
                </td>
               
                <td>
                  
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
                  
                </td>
               
                <td>
                  
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
                  
                </td>
               
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
              
                <td>
                 
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
                 
                </td>
                <td>
                 
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
