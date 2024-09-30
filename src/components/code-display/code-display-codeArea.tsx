import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const CodeArea = () => {
  const markUp = `<table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>
  <table></table>`;

  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      language="jsx"
      style={atomOneDark}
      customStyle={{
        background: "transparent",
        fontSize: "13px",
      }}>
      {markUp}
    </SyntaxHighlighter>
  );
};

export default CodeArea;
