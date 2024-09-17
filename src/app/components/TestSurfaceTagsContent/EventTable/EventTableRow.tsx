import React from "react";
import { type Event } from "~/app/types/event";
import { formatTimestamp } from "~/app/utils/dateUtils";

export const EventTableRow: React.FC<Event> = ({
  event,
  visitor,
  metadata,
  createdAt,
}) => {
  const cellClass =
    "border-b border-[#eaecf0] p-3 text-base font-medium leading-[18px] text-[#667085]";

  return (
    <tr>
      <td className={cellClass}>{event}</td>
      <td className={cellClass}>{visitor}</td>
      <td className={cellClass}>{JSON.stringify(metadata)}</td>
      <td className={cellClass}>{formatTimestamp(createdAt)}</td>
    </tr>
  );
};
