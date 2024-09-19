import React from "react";
import { CircleIcon } from "~/app/icons/CircleIcon";
import { FunnelIcon } from "~/app/icons/FunnelIcon";
import { HomeIcon } from "~/app/icons/HomeIcon";
import { IntegrationsIcon } from "~/app/icons/IntegrationsIcon";
import { LeadsIcon } from "~/app/icons/LeadsIcon";
import { SegmentsIcon } from "~/app/icons/SegmentsIcon";
import { SettingsIcon } from "~/app/icons/SettingsIcon";
import { WorkflowsIcon } from "~/app/icons/WorkflowsIcon";
import { SurfaceLogo } from "~/app/icons/SurfaceLogo";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { Divider } from "./Divider";
import { WorkspaceMenu } from "./WorkspaceMenu";
import { useSelector } from "react-redux";
import { selectIsCollapsed } from "~/app/slices/sidebarSlice";

export const SidebarBody = () => {
  const isCollapsed = useSelector(selectIsCollapsed);

  return (
    <div className="relative flex flex-col items-start justify-center gap-5 bg-transparent xs:w-[241px] lg:w-[241px]">
      <div className="relative flex w-full flex-col items-center justify-center gap-4 self-stretch bg-transparent pl-5">
        {!isCollapsed && (
          <>
            <div className="mt-5 w-full pl-1">
              <SurfaceLogo />
            </div>
            <Divider />
          </>
        )}

        <WorkspaceMenu />
        <Divider />
        <div className="relative flex h-10 w-full items-center gap-3 self-stretch rounded-md border border-[#f0f0f0] bg-[#383f50] pl-4 pr-3 shadow-[0px_1px_5px_0px_rgba(0,0,0,0.10)]">
          <CircleIcon />
          {!isCollapsed && (
            <p className="text-base font-medium leading-4 tracking-[0.1px] text-white">
              Getting started
            </p>
          )}
        </div>
        <Divider />
        <div className="relative flex w-full flex-col items-start gap-1 self-stretch bg-transparent">
          <SidebarMenuItem title="Overview" icon={HomeIcon} />
          <SidebarMenuItem title="Funnels" icon={FunnelIcon} />
          <SidebarMenuItem title="Leads" icon={LeadsIcon} />
          <SidebarMenuItem title="Segments" icon={SegmentsIcon} />
          <SidebarMenuItem title="Workflows" icon={WorkflowsIcon} />
          <SidebarMenuItem title="Integrations" icon={IntegrationsIcon} />
          <SidebarMenuItem title="Settings" icon={SettingsIcon} />
        </div>
      </div>
    </div>
  );
};
