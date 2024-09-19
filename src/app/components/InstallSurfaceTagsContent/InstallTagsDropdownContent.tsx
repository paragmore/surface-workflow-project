import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  onboardingSlice,
  selectOnboardingStatus,
} from "~/app/slices/onboardingSlice";
import { ONBOARDING_STATUS } from "~/app/types/onboarding";
import { useTagAndEvent } from "~/app/hooks/useTagAndEvent";

import { OnboardingStatusIndicator } from "../OnboardingStatusIndicator/OnboardingStatusIndicator";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import { Button } from "../Button";

const { setOnboardingStatus } = onboardingSlice.actions;

export const InstallTagsDropdownContent = ({ code }: { code: string }) => {
  const onboardingStatus = useSelector(selectOnboardingStatus);
  const dispatch = useDispatch();
  const { eventResp, refetchEvent } = useTagAndEvent();

  useEffect(() => {
    if (eventResp?.event?.id) {
      dispatch(setOnboardingStatus(ONBOARDING_STATUS.INSTALL_SUCCESS));
    }
  }, [eventResp]);

  const onTestConnectionClicked = async () => {
    dispatch(setOnboardingStatus(ONBOARDING_STATUS.TEST_CONNECTION));
    await refetchEvent();
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

  const renderButton = () => {
    const buttonProps =
      onboardingStatus === ONBOARDING_STATUS.INSTALL_SUCCESS
        ? { label: "Next step", onClick: onNextStepClicked }
        : { label: "Test connection", onClick: onTestConnectionClicked };

    return <Button {...buttonProps} />;
  };

  return (
    <>
      <CodeBlock code={`<script>\n${code}</script>`} language="html" />
      <OnboardingStatusIndicator />
      <div className="flex w-full justify-end">{renderButton()}</div>
    </>
  );
};
