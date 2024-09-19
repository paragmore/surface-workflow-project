import { ChevronDownIcon } from "~/app/icons/ChevronDownIcon";
import { UserIcon } from "~/app/icons/UserIcon";

export const WorkspaceMenu = () => (
  <div className="relative flex h-[27px] w-full flex-col items-center justify-center gap-4 self-stretch bg-transparent">
    <div className="relative flex h-10 w-full items-center gap-3 self-stretch rounded bg-transparent pl-4 pr-3">
      <UserIcon />
      <p className="text-base font-semibold leading-4 tracking-[0.1px] text-[#383f50]">
        My workspace
      </p>
      <ChevronDownIcon />
    </div>
  </div>
);
