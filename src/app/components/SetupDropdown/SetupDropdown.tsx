import React from "react";
import { CircleTickIcon } from "~/app/icons/CircleTickIcon";

export const SetupDropdown = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="relative flex w-full flex-col items-start gap-6 self-stretch bg-transparent">
      <div className="relative flex w-full items-center gap-[23px] self-stretch rounded-lg border-2 border-[#ebedf3] bg-white p-6 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.03)] shadow-[0px_4px_13px_0px_rgba(0,0,0,0.04)]">
        <div className="relative h-6 w-6 overflow-hidden rounded-[70px] bg-[#f3f3f3]">
          <CircleTickIcon />
        </div>
        <div className="relative flex w-full flex-1 flex-col items-start justify-center gap-3 bg-transparent">
          <div className="relative flex h-5 w-full items-center gap-2 self-stretch bg-transparent">
            <p className="text-lg font-medium tracking-[0.1px] text-black">
              {title}
            </p>
          </div>
          <p className="text-base leading-5 tracking-[0.08em] text-[#5f6065]">
            {subtitle}
          </p>
        </div>
        <button className="relative flex h-9 items-center justify-center gap-2 rounded-lg bg-[#2f64ee] px-4 py-2.5">
          <span className="text-sm font-semibold leading-6 tracking-[0.2px] text-white">
            Install tag
          </span>
        </button>
      </div>
    </div>
  );
};
