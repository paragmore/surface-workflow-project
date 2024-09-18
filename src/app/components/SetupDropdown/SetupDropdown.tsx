import React, { type ReactNode } from "react";
import { CircleTickIcon } from "~/app/icons/CircleTickIcon";
import { Button } from "../Button";

enum Status {
  PENDING = "pending",
  EXECUTING = "executing",
  SUCCESSFUL = "successful",
  FAILURE = "failure",
}

const getStatusColor = (status: Status): string => {
  switch (status) {
    case Status.PENDING:
      return "text-[#F3F3F3]";
    case Status.EXECUTING:
      return "text-[#2F64EE]";
    case Status.SUCCESSFUL:
      return "text-[#0C5132]";
    case Status.FAILURE:
      return "text-[#DF1C41]";
    default:
      return "text-[#F3F3F3]";
  }
};

export const SetupDropdown = ({
  title,
  subtitle,
  dropdownContents,
  isExpanded,
  buttonProps,
}: {
  title: string;
  subtitle: string;
  dropdownContents?: ReactNode;
  isExpanded?: boolean;
  buttonProps?: {
    isDisabled: boolean;
    label: string;
    onClick: () => void | Promise<void>;
  };
}) => {
  return (
    <div className="relative flex w-full flex-col items-start gap-6 self-stretch bg-transparent">
      <div className="relative flex w-full flex-col items-center gap-[23px] self-stretch rounded-lg border-2 border-[#ebedf3] bg-white p-6 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.03)] shadow-[0px_4px_13px_0px_rgba(0,0,0,0.04)]">
        <div className="relative flex w-full items-center gap-[23px]">
          <div className="relative h-6 w-6 overflow-hidden rounded-[70px] bg-[#f3f3f3]">
            <div className={getStatusColor(Status.SUCCESSFUL)}>
              <CircleTickIcon />
            </div>
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
          {buttonProps && (
            <Button
              isDisabled={buttonProps.isDisabled}
              label={buttonProps.label}
              onClick={buttonProps.onClick}
            />
          )}
        </div>
        {isExpanded ? dropdownContents : null}
      </div>
    </div>
  );
};
