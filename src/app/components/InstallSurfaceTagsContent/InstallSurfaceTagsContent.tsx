"use client";

import React, { useEffect, useState } from "react";
import { SetupDropdown } from "../SetupDropdown/SetupDropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  onboardingSlice,
  selectOnboardingStatus,
} from "~/app/slices/onboardingSlice";
import { ONBOARDING_STATUS } from "~/app/types/onboarding";
import { InstallTagsDropdownContent } from "./InstallTagsDropdownContent";
import { useGetOrCreateUser } from "~/app/hooks/useGetOrCreateUser";
import {
  useAddTagForUserMutation,
  useGetEventByTagIdQuery,
  useGetTagByUserQuery,
} from "~/app/rtkQueries/surfaceQueries";
import { type Tag } from "@prisma/client";
import { SuspenseWrapper } from "../SuspenseWrapper";

const { setOnboardingStatus } = onboardingSlice.actions;

const processCodeString = (code: string, tagId: string) => {
  console.log("TAG", tagId)
  if (!tagId) return "";
  return code.replace("%{tagId}%", tagId);
};

export const InstallSurfaceTagsContent = ({ code }: { code: string }) => {
  const onboardingStatus = useSelector(selectOnboardingStatus);
  const userName = useGetOrCreateUser();
  const [addNewTag, { isLoading: isAddingNewTag }] = useAddTagForUserMutation();

  const [isInstallExpanded, setIsInstallExpanded] = useState(false);

  const { data: tagResp, isLoading: isTagLoading } = useGetTagByUserQuery<{
    data: { tag: Tag };
    isLoading: boolean;
  }>({ userName: userName });

  const {
    data: eventResp,
    isLoading: isEventLoading,
    refetch,
    isFetching: isEventFectching,
  } = useGetEventByTagIdQuery<{
    data: { event: Event };
    isLoading: boolean;
    isFetching: boolean;
  }>({ tagId: tagResp?.tag?.id }, { skip: !tagResp });

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
  return (
    <SuspenseWrapper>
      <SetupDropdown
        title="Install Surface Tag on your site."
        subtitle="Enable tracking and analytics."
        dropdownContents={
          <InstallTagsDropdownContent
            code={processCodeString(code, tagResp?.tag?.id)}
          />
        }
        isExpanded={
          onboardingStatus !== ONBOARDING_STATUS.INSTALL_TAG &&
          onboardingStatus !== ONBOARDING_STATUS.TEST_TAG &&
          isInstallExpanded
        }
        buttonProps={
          onboardingStatus === ONBOARDING_STATUS.INSTALL_TAG ||
          onboardingStatus === ONBOARDING_STATUS.TEST_TAG ||
          !isInstallExpanded
            ? {
                onClick: onInstallTagClicked,
                label: "Install tag",
              }
            : undefined
        }
      />
    </SuspenseWrapper>
  );
};
