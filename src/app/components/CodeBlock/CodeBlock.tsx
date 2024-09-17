import React from "react";
import { CopyButton } from "./CodeCopy";
import SyntaxHighlighter from "react-syntax-highlighter";

type CodeBlockProps = {
  code: string;
  language: string;
};
export const CodeBlock = ({ code, language }: CodeBlockProps) => {
  return (
    <div className="relative">
      <CopyButton code={code} />
      <SyntaxHighlighter
        language={language}
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={true}
        showInlineLineNumbers={false}
        customStyle={{
          border: "1px solid #c3c3c3",
          borderRadius: "5px",
          padding: "30px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
