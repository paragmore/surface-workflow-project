import React from "react";
import { StatusIndicator } from "../StatusIndicator";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import { Button } from "../Button";

export const InstallTagsDropdownContent = ({ code }: { code: string }) => {
  return (
    <>
      <CodeBlock code={`<script>\n${code}</script>`} language="html" />
      <StatusIndicator />
      <div className="flex w-full justify-end">
        <Button label="Test connection" />
      </div>
    </>
  );
};
