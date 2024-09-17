import React from "react";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarBody } from "./SidebarBody";

export const Sidebar = () => {
  return (
    <div className="flex-start relative flex h-full w-[281px] flex-col justify-between overflow-hidden rounded-br-[18px] rounded-tr-[18px] bg-[#f9f9f9] pb-10 shadow-[-3px_4px_10px_-3px_rgba(0,0,0,0.08)] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.03)]">
      <SidebarBody />
      <SidebarFooter />
    </div>
  );
};
