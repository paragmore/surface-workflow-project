import React from "react";

export const SidebarFooter = () => {
  return (
    <div className="relative flex items-center gap-[11px] rounded-lg bg-transparent py-2 pl-3 pr-[14px]">
      <div className="relative h-7 w-7 overflow-hidden rounded-[25px] bg-white"></div>
      <div className="relative flex w-full flex-1 items-center gap-3 bg-transparent">
        <div className="relative flex w-full flex-1 flex-col items-start gap-2 bg-transparent">
          <p className="text-base font-medium leading-6 tracking-[0.2px] text-[#383f50]">
            Chris Hood
          </p>
          <small className="text-xs font-medium leading-4 text-[#6c7385]">
            hello@example.com
          </small>
        </div>
      </div>
    </div>
  );
};
