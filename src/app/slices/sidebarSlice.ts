import { createSlice } from "@reduxjs/toolkit";
import { type StoreType } from "~/lib/store";

const sliceName = "sidebar";

export const sidebarSlice = createSlice({
  name: sliceName,
  initialState: {
    isCollapsed: false,
  },
  reducers: {
    setIsCollapsedStatus: (state, { payload }: { payload: boolean }) => {
      state.isCollapsed = payload;
    },
  },
});

const selectSidebar = (state: StoreType) => state.sidebar;

export const selectIsCollapsed = (state: StoreType) =>
  selectSidebar(state).isCollapsed;
