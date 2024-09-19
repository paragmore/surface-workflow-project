import { type Event } from "@prisma/client";
import React from "react";
import { formatTimestamp } from "~/app/utils/dateUtils";

export const EventTableRow: React.FC<Event> = ({
  name,
  visitor,
  metadata,
  createdAt,
}) => {
  const cellClass =
    "border-b border-[#eaecf0] p-3 text-sm md:text-base font-medium text-[#667085] break-words";

  return (
    <tr className="flex flex-col md:table-row">
      <td className={cellClass}>{name}</td>
      <td className={cellClass}>{visitor}</td>
      <td className={cellClass}>{JSON.stringify(metadata)}</td>
      <td className={cellClass}>{formatTimestamp(createdAt)}</td>
    </tr>
  );
};
