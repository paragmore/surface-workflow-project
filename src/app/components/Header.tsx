import React from "react";

export const Header = () => {
  return (
    <div className="relative flex w-full flex-col items-start gap-4 self-stretch bg-transparent">
      <div className="relative flex w-full flex-col items-start gap-5 self-stretch bg-transparent">
        <h2 className="font-semibold leading-9 text-[#15171f] xs:text-[24px] lg:text-[32px]">
          Getting started
        </h2>
        <div className="h-px w-full bg-[#ebedf3]"></div>
      </div>
    </div>
  );
};
