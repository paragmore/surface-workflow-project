import React from "react";
import { useSelector } from "react-redux";
import { selectOnboardingStatus } from "~/app/slices/onboardingSlice";
import { ONBOARDING_STATUS } from "~/app/types/onboarding";
import { StatusIndicator } from "../StatusIndicator";
import { Status } from "../../types/onboarding";

export const OnboardingStatusIndicator = () => {
  const onboardingStatus = useSelector(selectOnboardingStatus);

  switch (onboardingStatus) {
    case ONBOARDING_STATUS.INSTALL_SUCCESS:
      return (
        <StatusIndicator
          type={Status.SUCCESSFUL}
          subtitle="Connected successfully!"
        />
      );
    case ONBOARDING_STATUS.TEST_CONNECTION:
      return (
        <StatusIndicator
          type={Status.EXECUTING}
          subtitle="Checking for Tag..."
        />
      );
    case ONBOARDING_STATUS.INSTALL_FAIL:
      return (
        <StatusIndicator
          type={Status.FAILURE}
          title="We couldn’t detect the Surface Tag on your website. Please ensure the snippet is added correctly."
          subtitle={
            <ul>
              <li>
                Recheck the code snippet to ensure it’s correctly placed before
                the closing <code>&lt;/head&gt;</code> tag.
              </li>
              <li>
                Ensure there are no blockers (like ad blockers) preventing the
                script from running.
              </li>
              <li>Try again once you’ve made the corrections.</li>
            </ul>
          }
        />
      );

    default:
      return null;
  }
};
