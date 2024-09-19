import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { surfaceQueries } from "~/app/rtkQueries/surfaceQueries";
import { onboardingSlice } from "~/app/slices/onboardingSlice";
import { sidebarSlice } from "~/app/slices/sidebarSlice";
import { type ONBOARDING_STATUS } from "~/app/types/onboarding";

const reducers = combineReducers({
  onboarding: onboardingSlice.reducer,
  sidebar: sidebarSlice.reducer,
  [surfaceQueries.reducerPath]: surfaceQueries.reducer,
});

export type StoreType = {
  onboarding: { status: ONBOARDING_STATUS };
  sidebar: { isCollapsed: boolean };
};

export const makeStore = () => {
  const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST"],
        },
      }).concat([surfaceQueries.middleware]),
    devTools: true,
  });
  return store;
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
