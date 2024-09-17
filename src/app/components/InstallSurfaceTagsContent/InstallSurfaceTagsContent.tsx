"use client";

import React, { useState } from "react";
import { SetupDropdown } from "../SetupDropdown/SetupDropdown";
import { CodeBlock } from "../CodeBlock/CodeBlock";

const code = `<script>
(function(w, d, s, l, i) {
w[l] = w[l] || [];
w[l].push({
'surface.start': new Date().getTime(),
event: 'surface.js'
});
var f = d.getElementsByTagName(s)[0],
j = d.createElement(s),
dl = l != 'surface' ? '&l=' + l : '';
j.async = true;
j.src = 'https://www.surface-analytics.com/tag.js?id=' + i + dl;
f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'surface', 'SURFACE_TAG_ID');
</script>`;

export const InstallSurfaceTagsContent = () => {
  const [isInstallTag, setIsInstallTag] = useState<boolean>(false);

  const onInstallTagClicked = () => {
    setIsInstallTag(true);
  };
  return (
    <SetupDropdown
      title="Install Surface Tag on your site."
      subtitle="Enable tracking and analytics."
      dropdownContents={<CodeBlock code={code} language="javascript" />}
      isExpanded={isInstallTag}
      buttonProps={
        !isInstallTag
          ? {
              onClick: onInstallTagClicked,
              isDisabled: isInstallTag,
              label: "Install tag",
            }
          : undefined
      }
    />
  );
};
