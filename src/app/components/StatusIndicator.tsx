import React from "react";
import { InfoIcon } from "../icons/InfoIcon";

export enum StatusIndicatorTypes {
  PENDING = "pending",
  SUCCESS = "success",
  DANGER = "danger",
}

const getStatusIndicatorColors = (status: StatusIndicatorTypes): string => {
  switch (status) {
    case StatusIndicatorTypes.PENDING:
      return "#4159CF";
    case StatusIndicatorTypes.SUCCESS:
      return "#38C793";
    case StatusIndicatorTypes.DANGER:
      return "#DF1C41";
    default:
      return "#F3F3F3";
  }
};

export const StatusIndicator = ({
  type,
  title,
  subtitle,
}: {
  type: StatusIndicatorTypes;
  title?: string;
  subtitle?: string;
}) => {
  return (
    <div
      className={`relative flex w-full items-start gap-2 self-stretch overflow-hidden rounded-lg p-2`}
      style={{ backgroundColor: getStatusIndicatorColors(type) }}
    >
      <div
        style={{
          color: getStatusIndicatorColors(type),
        }}
      >
        <InfoIcon />
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
