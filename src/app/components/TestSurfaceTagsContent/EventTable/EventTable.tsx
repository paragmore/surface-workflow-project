import React from "react";
import { EventTableRow } from "./EventTableRow";
import { type Event } from "~/app/types/event";
import { EventTableHeader } from "./EventTableHeader";

export const EventTable = ({ eventData }: { eventData: Array<Event> }) => {
  return (
    <>
      <EventTableHeader />
      <tbody>
        {eventData?.map((row, index) => (
          <EventTableRow
            key={index}
            name={row.name}
            visitor={row.visitor}
            metadata={row.metadata}
            createdAt={row.createdAt}
          />
        ))}
      </tbody>
    </>
  );
};
