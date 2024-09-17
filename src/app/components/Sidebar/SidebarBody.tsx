import React from "react";
import { ChevronDownIcon } from "~/app/icons/ChevronDownIcon";
import { CircleIcon } from "~/app/icons/CircleIcon";
import { FunnelIcon } from "~/app/icons/FunnelIcon";
import { HomeIcon } from "~/app/icons/HomeIcon";
import { IntegrationsIcon } from "~/app/icons/IntegrationsIcon";
import { LeadsIcon } from "~/app/icons/LeadsIcon";
import { SegmentsIcon } from "~/app/icons/SegmentsIcon";
import { SettingsIcon } from "~/app/icons/SettingsIcon";
import { UserIcon } from "~/app/icons/UserIcon";
import { WorkflowsIcon } from "~/app/icons/WorkflowsIcon";
import { SidebarMenuItem } from "./SidebarMenuItem";

export const SidebarBody = () => {
  return (
    <div className="relative flex w-[241px] flex-col items-start justify-center gap-5 bg-transparent">
      <div className="relative flex w-full flex-col items-center justify-center gap-4 self-stretch bg-transparent">
        <div className="relative flex w-full flex-col items-start gap-5 self-stretch bg-[#dddddd]">
          <div className="h-px w-full bg-[#dddddd]"></div>
        </div>
        <div className="relative flex h-[27px] w-full flex-col items-center justify-center gap-4 self-stretch bg-transparent">
          <div className="relative flex h-10 w-full items-center gap-3 self-stretch rounded bg-transparent pl-4 pr-3">
            <UserIcon />
            <p className="text-base font-semibold leading-4 tracking-[0.1px] text-[#383f50]">
              My workspace
            </p>
            <ChevronDownIcon />
          </div>
        </div>
        <div className="relative flex w-full flex-col items-start gap-5 self-stretch bg-[#383f50]">
          <div className="h-px w-full bg-[#dddddd]"></div>
        </div>
        <div className="relative flex h-10 w-full items-center gap-3 self-stretch rounded-md border border-[#f0f0f0] bg-[#383f50] pl-4 pr-3 shadow-[0px_1px_5px_0px_rgba(0,0,0,0.10)]">
          <CircleIcon />
          <p className="text-base font-medium leading-4 tracking-[0.1px] text-white">
            Getting started
          </p>
        </div>
        <div className="relative flex w-full flex-col items-start gap-5 self-stretch bg-[#383f50]">
          <div className="h-px w-full bg-[#dddddd]"></div>
        </div>
        <div className="relative flex w-full flex-col items-start gap-1 self-stretch bg-transparent">
          <div className="relative flex h-10 w-full items-center gap-3 self-stretch rounded-lg bg-transparent pl-4 pr-3">
            <HomeIcon />
            <p className="text-base font-medium leading-4 tracking-[0.1px] text-[#383f50]/50">
              Overview
            </p>
          </div>
          <div className="relative flex w-full flex-col items-start gap-1 self-stretch bg-transparent">
            <SidebarMenuItem title="Funnels" icon={FunnelIcon} />
            <SidebarMenuItem title="Leads" icon={LeadsIcon} />
            <SidebarMenuItem title="Segments" icon={SegmentsIcon} />
            <SidebarMenuItem title="Workflows" icon={WorkflowsIcon} />
            <SidebarMenuItem title="Integrations" icon={IntegrationsIcon} />
            <SidebarMenuItem title="Settings" icon={SettingsIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};
