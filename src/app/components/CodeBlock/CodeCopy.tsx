"use client";

import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "../Button";

type Props = {
  code: string;
};
export const CopyButton = ({ code }: Props) => {
  return (
    <button className="absolute right-1 top-2">
      <CopyToClipboard text={code} onCopy={() => alert("Copied!")}>
        <div>
          <Button
            isDisabled={false}
            label="Copy Snippet"
            onClick={() => null}
          />
        </div>
      </CopyToClipboard>
    </button>
  );
};
