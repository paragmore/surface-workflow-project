import React from "react";
import { useSelector } from "react-redux";
import { selectIsCollapsed } from "~/app/slices/sidebarSlice";

export const SidebarMenuItem = ({
  icon,
  title,
}: {
  icon: () => React.JSX.Element;
  title: string;
  showTitle?: boolean;
}) => {
  const isCollapsed = useSelector(selectIsCollapsed);

  return (
    <div className="relative flex h-10 items-center gap-3 self-stretch rounded-lg bg-transparent pl-4 pr-3">
      {icon()}

      {!isCollapsed && (
        <p className="text-base font-medium leading-4 tracking-[0.1px] text-[#383f50]/50">
          {title}
        </p>
      )}
    </div>
  );
};
