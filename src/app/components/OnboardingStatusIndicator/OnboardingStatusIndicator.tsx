import React from "react";
import { useSelector } from "react-redux";
import { selectOnboardingStatus } from "~/app/slices/onboardingSlice";
import { ONBOARDING_STATUS } from "~/app/types/onboarding";
import { StatusIndicator, StatusIndicatorTypes } from "../StatusIndicator";

export const OnboardingStatusIndicator = () => {
  const onboardingStatus = useSelector(selectOnboardingStatus);

  switch (onboardingStatus) {
    case ONBOARDING_STATUS.INSTALL_SUCCESS:
      return (
        <StatusIndicator
          type={StatusIndicatorTypes.SUCCESS}
          subtitle="Connected successfully!"
        />
      );
    case ONBOARDING_STATUS.TEST_CONNECTION:
      return (
        <StatusIndicator
          type={StatusIndicatorTypes.PENDING}
          subtitle="Checking for Tag..."
        />
      );
    case ONBOARDING_STATUS.INSTALL_FAIL:
      return (
        <StatusIndicator
          type={StatusIndicatorTypes.DANGER}
          title="We couldn’t detect the Surface Tag on your website. Please ensure the snippet is added correctly."
          subtitle={`Recheck the code snippet to ensure it’s correctly placed before the closing </head> tag.
Ensure there are no blockers (like ad blockers) preventing the script from running.
Try again once you’ve made the corrections.`}
        />
      );

    default:
      return null;
  }
};
