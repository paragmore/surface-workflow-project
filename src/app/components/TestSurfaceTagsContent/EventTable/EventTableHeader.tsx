import React from "react";

export const EventTableHeader = () => {
  const cellClass =
    "border-b border-[#eaecf0] p-3 text-sm md:text-base font-medium leading-[18px] text-[#15171f]";

  return (
    <thead className="hidden md:table-header-group">
      <tr>
        <th className={cellClass}>Event</th>
        <th className={cellClass}>Visitor</th>
        <th className={cellClass}>Metadata</th>
        <th className={cellClass}>Created at</th>
      </tr>
    </thead>
  );
};
