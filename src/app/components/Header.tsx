import React from "react";

export const Header = () => {
  return (
    <div className="relative flex w-full flex-col items-start gap-4 self-stretch bg-transparent">
      <div className="relative flex w-full flex-col items-start gap-5 self-stretch bg-transparent">
        <h2 className="text-[32px] font-semibold leading-9 text-[#15171f]">
          Getting started
        </h2>
        <div className="h-px w-full bg-[#ebedf3]"></div>
      </div>
    </div>
  );
};
