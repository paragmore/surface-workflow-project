"use client";

import React, { useState } from "react";
import { SetupDropdown } from "../SetupDropdown/SetupDropdown";
import { EventTable } from "./EventTable/EventTable";

const eventData = [
  {
    event: "Track",
    visitor: "37d272f6-877b-47c6-98e5-5156bbfbc454",
    metadata: {},
    createdAt: 1694794136, // Integer timestamp
  },
  {
    event: "Page",
    visitor: "e7ef515a-7a5b-4949-9f28-8ae34790d144",
    metadata: { page_url: "https://withsurface.com/page-1" },
    createdAt: 1694794175,
  },
  {
    event: "Identity",
    visitor: "42d467c8-3bd1-4519-9ae6-bfb00adcc01c",
    metadata: { user_id: "42d467c8-3bd1-4519-9ae6-bfb00adcc01c" },
    createdAt: 1694794339,
  },
  {
    event: "Click",
    visitor: "aa731c78-c4e0-4e4f-b515-65259f498979",
    metadata: { element_id: "button-element" },
    createdAt: 1694794655,
  },
];

export const TestSurfaceTagsContent = () => {
  const [isInstallTag, setIsInstallTag] = useState<boolean>(false);

  const onInstallTagClicked = () => {
    setIsInstallTag(true);
  };
  return (
    <SetupDropdown
      title="Install Surface Tag on your site."
      subtitle="Enable tracking and analytics."
      dropdownContents={
        <table className="w-full rounded-lg border border-[#eaecf0] bg-white">
          <EventTable eventData={eventData} />
        </table>
      }
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
