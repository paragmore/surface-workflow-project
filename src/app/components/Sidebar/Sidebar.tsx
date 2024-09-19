"use client";

import React, { useEffect } from "react";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarBody } from "./SidebarBody";
import useDeviceResolution from "~/app/hooks/useDeviceResolution";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCollapsed, sidebarSlice } from "../../slices/sidebarSlice";

const { setIsCollapsedStatus } = sidebarSlice.actions;

export const Sidebar = () => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector(selectIsCollapsed);
  const { isMobile, isTablet } = useDeviceResolution();

  const toggleSidebar = () => dispatch(setIsCollapsedStatus(!isCollapsed));
  useEffect(() => {
    dispatch(setIsCollapsedStatus(isMobile));
  }, [isMobile, isTablet]);

  return (
    <>
      <div
        className={`sticky top-0 h-screen text-white transition-all duration-300 ${isCollapsed ? "w-12" : "w-64"} `}
      >
        <button
          className="absolute right-0 top-2 rounded bg-gray-700 px-2 py-1 text-xs"
          onClick={toggleSidebar}
          style={{ zIndex: 10 }}
        >
          {isCollapsed ? "→" : "←"}
        </button>
        <div
          className={`flex-start relative flex h-screen flex-col justify-between overflow-hidden rounded-br-[18px] rounded-tr-[18px] bg-[#f9f9f9] pb-10 shadow-[-3px_4px_10px_-3px_rgba(0,0,0,0.08)] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.03)] ${isCollapsed ? "w-[60px]" : "w-[281px]"} `}
        >
          <SidebarBody />
          <SidebarFooter />
        </div>
      </div>
    </>
  );
};
