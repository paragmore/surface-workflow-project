import React, { type ReactNode } from "react";
import { CircleTickIcon } from "~/app/icons/CircleTickIcon";
import { Button } from "../Button";
import { Status } from "~/app/types/onboarding";
import { InfoIcon } from "~/app/icons/InfoIcon";
import { getStatusColor } from "~/app/utils/colorUtils";
import { Skeleton } from "~/components/ui/skeleton";

export const SetupDropdown = ({
  title,
  subtitle,
  dropdownContents,
  isExpanded,
  buttonProps,
  status,
  isLoading,
}: {
  title: string;
  subtitle: string;
  dropdownContents?: ReactNode;
  isExpanded?: boolean;
  buttonProps?: {
    isDisabled?: boolean;
    label: string;
    onClick: () => void | Promise<void>;
    isLoading?: boolean
  };
  status: Status;
  isLoading?: boolean;
}) => {
  const statusColors = getStatusColor(status);
  return (
    <div className="relative flex w-full flex-col items-start gap-6 self-stretch bg-transparent">
      {isLoading ? (
        <Skeleton className="rounded-20 h-[70px] w-full" />
      ) : (
        <div className="relative flex w-full flex-col items-center gap-[23px] self-stretch rounded-lg border-2 border-[#ebedf3] bg-white p-6 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.03)] shadow-[0px_4px_13px_0px_rgba(0,0,0,0.04)]">
          <div className="relative flex w-full items-center gap-[23px]">
            <div className="relative h-6 w-6 overflow-hidden rounded-[70px] bg-[#f3f3f3]">
              <div>
                {status === Status.FAILURE ? (
                  <InfoIcon textColor={statusColors.text} />
                ) : (
                  <CircleTickIcon
                    bgColor={statusColors.bg}
                    textColor={statusColors.text}
                  />
                )}
              </div>
            </div>
            <div className="relative flex w-full flex-1 flex-col items-start justify-center gap-3 bg-transparent">
              <div className="relative flex h-5 w-full items-center gap-2 self-stretch bg-transparent">
                <p className="xs:text-base lg:text-lg font-medium tracking-[0.1px] text-black">
                  {title}
                </p>
              </div>
              <p className="xs:text-xs lg:text-base leading-5 tracking-[0.08em] text-[#5f6065]">
                {subtitle}
              </p>
            </div>
            {buttonProps && (
              <Button
                isDisabled={buttonProps.isDisabled}
                label={buttonProps.label}
                onClick={buttonProps.onClick}
                isLoading={buttonProps.isLoading}
              />
            )}
          </div>
          {isExpanded ? dropdownContents : null}
        </div>
      )}
    </div>
  );
};
