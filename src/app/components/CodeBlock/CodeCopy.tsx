"use client";

import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "../Button";
import { useToast } from "~/hooks/use-toast";

type Props = {
  code: string;
};
export const CopyButton = ({ code }: Props) => {
  const { toast } = useToast();

  return (
    <div className="absolute right-1 top-2">
      <CopyToClipboard
        text={code}
        onCopy={() =>
          toast({
            title: "Copied!",
          })
        }
      >
        <div>
          <Button
            isDisabled={false}
            label="Copy Snippet"
            onClick={() => null}
          />
        </div>
      </CopyToClipboard>
    </div>
  );
};
