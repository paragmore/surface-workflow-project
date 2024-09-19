"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  onboardingSlice,
  selectOnboardingStatus,
} from "~/app/slices/onboardingSlice";
import { ONBOARDING_STATUS } from "~/app/types/onboarding";
import { useGetOrCreateUser } from "~/app/hooks/useGetOrCreateUser";
import { useAddTagForUserMutation } from "~/app/rtkQueries/surfaceQueries";
import { processCodeString } from "~/app/utils/stringUtils";
import { useTagAndEvent } from "~/app/hooks/useTagAndEvent";

import { SetupDropdown } from "../SetupDropdown/SetupDropdown";
import { InstallTagsDropdownContent } from "./InstallTagsDropdownContent";
import { getDropdownStatus } from "./InstallSurfaceTagsContent.utils";

const { setOnboardingStatus } = onboardingSlice.actions;

const Component = ({ code }: { code: string }) => {
  const onboardingStatus = useSelector(selectOnboardingStatus);
  const userName = useGetOrCreateUser(false);
  const { eventResp, tagResp, isTagLoading, isEventLoading } = useTagAndEvent();
  const [isInstallExpanded, setIsInstallExpanded] = useState(false);
  const [addNewTag, { isLoading: isAddingNewTag }] = useAddTagForUserMutation();

  useEffect(() => {
    if (eventResp?.event?.id) {
      dispatch(setOnboardingStatus(ONBOARDING_STATUS.INSTALL_SUCCESS));
    }
  }, [eventResp]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!tagResp?.tag) {
      dispatch(setOnboardingStatus(ONBOARDING_STATUS.INSTALL_TAG));
    }
  }, [tagResp, isTagLoading]);

  const onInstallTagClicked = async () => {
    if (!tagResp?.tag) await addNewTag({ userName });
    setIsInstallExpanded(true);
    dispatch(setOnboardingStatus(ONBOARDING_STATUS.COPY_SNIPPET));
  };

  const title = "Install Surface Tag on your site.";
  const subtitle = "Enable tracking and analytics.";
  const dropdownStatus = getDropdownStatus(onboardingStatus);
  const dropdownContents = (
    <InstallTagsDropdownContent
      code={processCodeString(code, "%{tagId}%", tagResp?.tag?.id)}
    />
  );

  const isExpanded =
    onboardingStatus !== ONBOARDING_STATUS.INSTALL_TAG &&
    onboardingStatus !== ONBOARDING_STATUS.TEST_TAG &&
    isInstallExpanded;

  const buttonProps =
    onboardingStatus === ONBOARDING_STATUS.INSTALL_TAG ||
    onboardingStatus === ONBOARDING_STATUS.TEST_TAG ||
    !isInstallExpanded
      ? {
          onClick: onInstallTagClicked,
          label: "Install tag",
          isLoading: isAddingNewTag,
        }
      : undefined;

  return (
    <SetupDropdown
      isLoading={isEventLoading}
      title={title}
      subtitle={subtitle}
      status={dropdownStatus}
      dropdownContents={dropdownContents}
      isExpanded={isExpanded}
      buttonProps={buttonProps}
    />
  );
};

export const InstallSurfaceTagsContent = React.memo(Component);
