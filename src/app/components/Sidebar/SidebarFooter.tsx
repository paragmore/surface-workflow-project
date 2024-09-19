import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { selectIsCollapsed } from "~/app/slices/sidebarSlice";

export const SidebarFooter = () => {
  const isCollapsed = useSelector(selectIsCollapsed);

  return (
    <div
      className={`relative flex items-center gap-[11px] rounded-lg bg-transparent ${isCollapsed ? "gap-0 px-4 py-0" : "pl-3 pr-[14px]"}`}
    >
      <div className="relative h-7 w-7 overflow-hidden rounded-[25px] bg-white">
        <Image
          width={40}
          height={40}
          alt="avt"
          src="https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg"
        />
      </div>
      {!isCollapsed && (
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
      )}
    </div>
  );
};
