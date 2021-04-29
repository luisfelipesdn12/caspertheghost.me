import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism-async-light";
import Theme from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import styles from "css/blog.module.scss";

interface Props {
  inline: boolean;
  className: string;
}

const MDCode: React.FC<Props> = (props) => {
  const { inline, className, children } = props;
  const match = /language-(\w+)/.exec(className || "");
  const text = String(children).replace(/\n$/, "");
  const [btnText, setBtnText] = React.useState("Copy");

  function handleCopy() {
    if (typeof window !== "undefined" && window.navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setBtnText("Copied!");
      setTimeout(() => setBtnText("Copy"), 1000);
    }
  }

  return !inline && match ? (
    <div>
      <button onClick={handleCopy} className={styles.copy_btn}>
        {btnText}
      </button>

      <SyntaxHighlighter style={Theme} language={match[1]} {...props}>
        {text}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className={className}>{props.children}</code>
  );
};

export default MDCode;
