import React from "react";
import { InfoIcon } from "../icons/InfoIcon";
import { getStatusColor } from "../utils/colorUtils";
import { type Status } from "../types/onboarding";

export const StatusIndicator = ({
  type,
  title,
  subtitle,
}: {
  type: Status;
  title?: string;
  subtitle?: string | React.JSX.Element;
}) => {
  return (
    <div
      className={`relative flex w-full items-center gap-2 self-stretch overflow-hidden rounded-lg p-2 py-4`}
      style={{ backgroundColor: getStatusColor(type).bg }}
    >
      <div className="px-5">
        <InfoIcon textColor={getStatusColor(type).text} />
      </div>
      <div className="flex flex-col">
        <small className="text-sm leading-5 tracking-[-0.008400000000000001em] text-[#0a0d14]">
          {title}
        </small>

        <small className="text-xs leading-4 text-[#0a0d14]">{subtitle}</small>
      </div>
    </div>
  );
};
