import { type Event } from "@prisma/client";
import React from "react";
import { formatTimestamp } from "~/app/utils/dateUtils";
import { TableRow } from "./TableRow";

export const EventTableRow: React.FC<Event> = ({
  name,
  visitor,
  metadata,
  createdAt,
}) => {
  const cellClass =
    "border-b border-[#eaecf0] p-3 text-sm xs:text-xs lg:text-base font-medium text-[#667085] break-words";

  return (
    <TableRow>
      <td className={cellClass}>{name}</td>
      <td className={cellClass}>{visitor}</td>
      <td className={cellClass}>
        <div className="line-clamp-3">{JSON.stringify(metadata)}</div>
      </td>
      <td className={cellClass}>{formatTimestamp(createdAt)}</td>
    </TableRow>
  );
};
