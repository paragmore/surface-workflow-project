import React, { useEffect, useState } from "react";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import { Button } from "../Button";
import {
  useGetEventByTagIdQuery,
  useGetTagByUserQuery,
} from "~/app/rtkQueries/surfaceQueries";
import { type Event, type Tag } from "@prisma/client";
import { useGetOrCreateUser } from "~/app/hooks/useGetOrCreateUser";
import { useDispatch, useSelector } from "react-redux";
import {
  onboardingSlice,
  selectOnboardingStatus,
} from "~/app/slices/onboardingSlice";
import { ONBOARDING_STATUS } from "~/app/types/onboarding";
import { OnboardingStatusIndicator } from "../OnboardingStatusIndicator/OnboardingStatusIndicator";

const { setOnboardingStatus } = onboardingSlice.actions;

export const InstallTagsDropdownContent = ({ code }: { code: string }) => {
  const onboardingStatus = useSelector(selectOnboardingStatus);

  const userName = useGetOrCreateUser();
  const dispatch = useDispatch();

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

  const onTestConnectionClicked = async () => {
    dispatch(setOnboardingStatus(ONBOARDING_STATUS.TEST_CONNECTION));
    await refetch();
    if (!eventResp?.event) {
      dispatch(setOnboardingStatus(ONBOARDING_STATUS.INSTALL_FAIL));
      return;
    }
    setTimeout(() => {
      dispatch(setOnboardingStatus(ONBOARDING_STATUS.COPY_SNIPPET));
    }, 2000);
  };

  const onNextStepClicked = async () => {
    dispatch(setOnboardingStatus(ONBOARDING_STATUS.TEST_TAG));
  };

  return (
    <>
      <CodeBlock code={`<script>\n${code}</script>`} language="html" />
      <OnboardingStatusIndicator />
      <div className="flex w-full justify-end">
        {onboardingStatus === ONBOARDING_STATUS.INSTALL_SUCCESS ? (
          <Button label="Next step" onClick={onNextStepClicked} />
        ) : (
          <Button label="Test connection" onClick={onTestConnectionClicked} />
        )}
      </div>
    </>
  );
};
