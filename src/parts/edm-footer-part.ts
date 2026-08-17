export const getTPSFooter = (linkNum: string) => {
  return `
    <table
      width="700"
      cellpadding="0"
      cellspacing="0"
      style="margin: 0 auto; border-collapse: collapse">
      <tbody>
       <tr>
        <td>
          <p
            style="
              padding: 15px 0;
              text-align: center;
              font-size: 14px;
              color: #000;
            ">
            หากคุณไม่สามารถอ่านอีเมลนี้ได้
            <a
              href="https://www.samsung.com/th/edm/2025/${linkNum}/"
              target="_blank"
              style="color: #000; font-weight: bold"
              >กรุณาคลิกที่นี่</a
            ><br />
            <span>Thank you for being our valued customer.</span><br />
            Please
            <a
              href="https://www.samsung.com/th/edm/2025/${linkNum}/"
              target="_blank"
              style="color: #000; font-weight: bold"
              >click here</a
            >
            if you are unable to view content.
          </p>
        </td>
       </tr>
      </tbody>
    </table>
  </body>
</html>`;
};
