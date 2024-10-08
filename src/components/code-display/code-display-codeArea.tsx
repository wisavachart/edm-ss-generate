import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { edm_DIGI_header, edm_TPS_header } from "../../parts/edm-header-part";
import { FileTabs } from "../../enum";
import { getTPSFooter } from "../../parts/edm-footer-part";
import {
  getDIGICondotionPart,
  getTPSConditionPart,
} from "../../parts/edm-condition-section";
import { contditionImageData } from "../../type";
import useGetLayout from "../../hooks/useGetLayout";

type CodeAreaPROPS = {
  linkNum: string;
  activeTab: FileTabs;
  conditionImageData: contditionImageData[];
};

const CodeArea = ({
  linkNum,
  activeTab,
  conditionImageData,
}: CodeAreaPROPS) => {
  const { markUpTps, markUpDIGI } = useGetLayout();
  const markUpDigi = `${edm_DIGI_header}${markUpDIGI}${getDIGICondotionPart(
    conditionImageData
  )}`;
  const markUpTPS = `${edm_TPS_header}${markUpTps}${getTPSConditionPart(
    conditionImageData
  )}${getTPSFooter(linkNum)}`;

  const getActiveMarkup = (fileTab: FileTabs) => {
    switch (fileTab) {
      case "DIGI":
        return markUpDigi;
      case "TPS":
        return markUpTPS;
      default:
        return markUpDigi;
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
