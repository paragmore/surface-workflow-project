import { createSlice } from "@reduxjs/toolkit";
import { ONBOARDING_STATUS } from "../types/onboarding";
import { type StoreType } from "~/lib/store";

const sliceName = "onboarding";

export const onboardingSlice = createSlice({
  name: sliceName,
  initialState: {
    status: ONBOARDING_STATUS.INSTALL_TAG,
  },
  reducers: {
    setOnboardingStatus: (
      state,
      { payload }: { payload: ONBOARDING_STATUS },
    ) => {
      state.status = payload;
    },
  },
});

const selectOnboarding = (state: StoreType) => state.onboarding;

export const selectOnboardingStatus = (state: StoreType) =>
  selectOnboarding(state).status;
