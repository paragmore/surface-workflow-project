"use client";

import React from "react";
import { SetupDropdown } from "../SetupDropdown/SetupDropdown";
import { EventTable } from "./EventTable/EventTable";
import { useGetEventsQuery } from "~/app/rtkQueries/surfaceQueries";
import { type Event } from "@prisma/client";
import { useDispatch, useSelector } from "react-redux";
import {
  onboardingSlice,
  selectOnboardingStatus,
} from "~/app/slices/onboardingSlice";
import { ONBOARDING_STATUS } from "~/app/types/onboarding";

const { setOnboardingStatus } = onboardingSlice.actions;

export const TestSurfaceTagsContent = () => {
  const onboardingStatus = useSelector(selectOnboardingStatus);
  const dispatch = useDispatch();

  const { data: eventsResp, isLoading: isLoadingEvents } = useGetEventsQuery<{
    data: { events: Array<Event> };
    isLoading: boolean;
  }>({});

  const onTestTagClicked = () => {
    dispatch(setOnboardingStatus(ONBOARDING_STATUS.TEST_TAG));
  };

  return (
    <SetupDropdown
      title="Test Surface Tag Events."
      subtitle="Test if the Surface Tag is properly emitting events.."
      dropdownContents={<EventTable eventData={eventsResp?.events} />}
      isExpanded={onboardingStatus === ONBOARDING_STATUS.TEST_TAG}
      buttonProps={
        onboardingStatus !== ONBOARDING_STATUS.TEST_TAG
          ? {
              onClick: onTestTagClicked,
              isDisabled:
                onboardingStatus !== ONBOARDING_STATUS.INSTALL_SUCCESS,
              label: "Test tag",
            }
          : undefined
      }
    />
  );
};
