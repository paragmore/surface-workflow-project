"use client";

import React from "react";
import { SetupDropdown } from "../SetupDropdown/SetupDropdown";
import { EventTable } from "./EventTable/EventTable";
import { useDispatch, useSelector } from "react-redux";
import {
  onboardingSlice,
  selectOnboardingStatus,
} from "~/app/slices/onboardingSlice";
import { ONBOARDING_STATUS, Status } from "~/app/types/onboarding";

const { setOnboardingStatus } = onboardingSlice.actions;

export const TestSurfaceTagsContent = () => {
  const onboardingStatus = useSelector(selectOnboardingStatus);
  const dispatch = useDispatch();

  const onTestTagClicked = () => {
    dispatch(setOnboardingStatus(ONBOARDING_STATUS.TEST_TAG));
  };

  const getDropdownStatus = () => {
    switch (onboardingStatus) {
      case ONBOARDING_STATUS.TEST_TAG:
        return Status.EXECUTING;

      default:
        return Status.PENDING;
    }
  };

  return (
    <SetupDropdown
      title="Test Surface Tag Events."
      subtitle="Test if the Surface Tag is properly emitting events.."
      dropdownContents={<EventTable />}
      isExpanded={onboardingStatus === ONBOARDING_STATUS.TEST_TAG}
      status={getDropdownStatus()}
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
