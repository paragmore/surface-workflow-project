"use client";

import React, { useState } from "react";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarBody } from "./SidebarBody";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  return (
    <>
      {/* <button
        className="absolute left-4 top-4 rounded bg-gray-700 px-2 py-1 text-sm"
        onClick={toggleSidebar}
        style={{ zIndex: 10, backgroundColor: "Red" }}
      >
        {isCollapsed ? "→" : "←"}
      </button> */}
      <div
        className={`sticky top-0 h-screen transition-all duration-300 ${isCollapsed ? "w-2" : "w-64"} bg-gray-800 text-white`}
      >
        <div className="flex-start relative flex h-screen w-[281px] flex-col justify-between overflow-hidden rounded-br-[18px] rounded-tr-[18px] bg-[#f9f9f9] pb-10 shadow-[-3px_4px_10px_-3px_rgba(0,0,0,0.08)] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.03)]">
          <SidebarBody />
          <SidebarFooter />
        </div>
      </div>
    </>
  );
};
