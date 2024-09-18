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

export const InstallSurfaceTagsContent = ({ code }: { code: string }) => {
  const onboardingStatus = useSelector(selectOnboardingStatus);
  const userName = useGetOrCreateUser();
  const [addNewTag, { isLoading: isAddingNewTag }] = useAddTagForUserMutation();

  const { data: tagResp, isLoading: isTagLoading } = useGetTagByUserQuery<{
    data: { tag: Tag };
    isLoading: boolean;
  }>({ userName: userName });

  const { data: event, isLoading: s } = useGetEventByTagIdQuery<{
    data: Tag;
    isLoading: boolean;
  }>({ tagId: tagResp?.tag?.id }, { skip: !tagResp });

  console.log("event", event, tagResp?.tag);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!tagResp?.tag) {
      dispatch(setOnboardingStatus(ONBOARDING_STATUS.INSTALL_TAG));
    } else {
      dispatch(setOnboardingStatus(ONBOARDING_STATUS.COPY_SNIPPET));
    }
  }, [tagResp, isTagLoading]);

  const [isInstallTag, setIsInstallTag] = useState<boolean>(false);

  const onInstallTagClicked = async () => {
    await addNewTag({ userName });
    setIsInstallTag(true);
  };
  return (
    <SuspenseWrapper>
      <SetupDropdown
        title="Install Surface Tag on your site."
        subtitle="Enable tracking and analytics."
        dropdownContents={<InstallTagsDropdownContent code={code} />}
        isExpanded={onboardingStatus !== ONBOARDING_STATUS.INSTALL_TAG}
        buttonProps={
          onboardingStatus === ONBOARDING_STATUS.INSTALL_TAG
            ? {
                onClick: onInstallTagClicked,
                isDisabled: isInstallTag,
                label: "Install tag",
              }
            : undefined
        }
      />
    </SuspenseWrapper>
  );
};
