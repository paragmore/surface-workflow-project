import { ONBOARDING_STATUS, Status } from "~/app/types/onboarding";

export const getDropdownStatus = (onboardingStatus: ONBOARDING_STATUS) => {
  switch (onboardingStatus) {
    case ONBOARDING_STATUS.INSTALL_SUCCESS:
      return Status.SUCCESSFUL;

    case ONBOARDING_STATUS.TEST_TAG:
      return Status.SUCCESSFUL;

    case ONBOARDING_STATUS.COPY_SNIPPET:
      return Status.EXECUTING;

    case ONBOARDING_STATUS.INSTALL_FAIL:
      return Status.FAILURE;

    default:
      return Status.PENDING;
  }
};
