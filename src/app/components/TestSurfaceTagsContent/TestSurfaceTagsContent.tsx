"use client";

import React, { useState } from "react";
import { SetupDropdown } from "../SetupDropdown/SetupDropdown";
import { EventTable } from "./EventTable/EventTable";
import { useGetEventsQuery } from "~/app/rtkQueries/surfaceQueries";
import { type Event } from "@prisma/client";

export const TestSurfaceTagsContent = () => {
  const [isInstallTag, setIsInstallTag] = useState<boolean>(false);

  const { data: events, isLoading: isLoadingEvents } = useGetEventsQuery<{
    data: Array<Event>;
    isLoading: boolean;
  }>({});

  const onInstallTagClicked = () => {
    setIsInstallTag(true);
  };

  return (
    <SetupDropdown
      title="Install Surface Tag on your site."
      subtitle="Enable tracking and analytics."
      dropdownContents={<EventTable eventData={events} />}
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
