import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const CodeArea = () => {
  const markUpDIGI = `<table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>
  <table>DIGI</table>`;
  // const markUpTPS = `<table>TPS</table>`;

  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      language="jsx"
      style={atomOneDark}
      customStyle={{
        background: "transparent",
        fontSize: "13px",
      }}>
      {markUpDIGI}
    </SyntaxHighlighter>
  );
};

export default CodeArea;
