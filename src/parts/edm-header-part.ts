export const edm_DIGI_header = `  <!-- *SECTION Content -->`;

export const edm_TPS_header = `  <!-- *SECTION Content -->`;

// TPS
export const openTableTagTPS = () => {
  return `
  <table
    width="700"
    cellpadding="0"
    cellspacing="0"
    style="margin: 0 auto; border-collapse: collapse">`;
};
// DIGI
export const openTableTagDIGI = () => {
  return `
   <table
     border="0"
     align="center"
     cellpadding="0"
     cellspacing="0"
     class="table_css"
     aria-hidden="true"
     role="presentation"
     style="
       background-color: #ffffff;
       width: auto;
       max-width: 700px;
       border-collapse: collapse;
       border-spacing: 0;
       border: none;
        ">`;
};
