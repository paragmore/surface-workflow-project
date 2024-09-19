import React from "react";

export const MenuHeader = ({
  title,
  Icon,
}: {
  title: string;
  Icon: React.ComponentType;
}) => (
  <div className="relative flex h-10 w-full items-center gap-3 self-stretch rounded-lg bg-transparent pl-4 pr-3">
    <Icon />
    <p className="text-base font-medium leading-4 tracking-[0.1px] text-[#383f50]/50">
      {title}
    </p>
  </div>
);
