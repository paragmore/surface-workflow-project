import React from "react";
import { EventTableRow } from "./EventTableRow";
import { EventTableHeader } from "./EventTableHeader";
import { type Event } from "@prisma/client";

export const EventTable = ({ eventData }: { eventData: Array<Event> }) => {
  return (
    <table className="w-full rounded-lg border border-[#eaecf0] bg-white">
      <EventTableHeader />
      <tbody>
        {eventData?.map((row, index) => (
          <EventTableRow
            id={row.id}
            key={index}
            name={row.name}
            visitor={row.visitor}
            metadata={row.metadata}
            createdAt={row.createdAt}
          />
        ))}
      </tbody>
    </table>
  );
};
