import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { edm_DIGI_header, edm_TPS_header } from "../../parts/edm-header-part";
import useFileNameTabStore from "../../store/useFileNameTabStore";
import { FileTabs } from "../../enum";
import useFileNameStore from "../../store/useFileNameStore";
import { getTPSFooter } from "../../parts/edm-footer-part";
const CodeArea = () => {
  const { activeTab } = useFileNameTabStore();
  const { fileNameValue } = useFileNameStore();
  const markUpDIGI = `${edm_DIGI_header}`;
  const markUpTPS = `${edm_TPS_header}${getTPSFooter(fileNameValue.linkNum)}`;

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
