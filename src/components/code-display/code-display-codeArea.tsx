import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { edm_DIGI_header, edm_TPS_header } from "../../parts/edm-header-part";
import { FileTabs } from "../../enum";
import { getTPSFooter } from "../../parts/edm-footer-part";
import { getConditionPart } from "../../parts/edm-condition-section";

type CodeAreaPROPS = {
  linkNum: string;
  activeTab: FileTabs;
};

const CodeArea = ({ linkNum, activeTab }: CodeAreaPROPS) => {
  console.log("CodeArea render");
  const markUpDIGI = `${edm_DIGI_header}`;
  const markUpTPS = `${edm_TPS_header}${getConditionPart()}${getTPSFooter(
    linkNum
  )}`;

  const getActiveMarkup = (fileTab: FileTabs) => {
    switch (fileTab) {
      case "DIGI":
        return markUpDIGI;
      case "TPS":
        return markUpTPS;
      default:
        return markUpDIGI;
    }
  };
  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      language="jsx"
      style={atomOneDark}
      customStyle={{
        background: "transparent",
        fontSize: "13px",
      }}>
      {getActiveMarkup(activeTab)}
    </SyntaxHighlighter>
  );
};

export default CodeArea;
