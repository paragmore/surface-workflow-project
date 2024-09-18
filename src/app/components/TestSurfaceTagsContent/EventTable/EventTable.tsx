import React from "react";
import { EventTableRow } from "./EventTableRow";
import { EventTableHeader } from "./EventTableHeader";
import { type Event } from "@prisma/client";
import { useGetEventsQuery } from "~/app/rtkQueries/surfaceQueries";

export const EventTable = () => {
  const { data: eventsResp, isLoading: isLoadingEvents } = useGetEventsQuery<{
    data: { events: Array<Event> };
    isLoading: boolean;
  }>({});
  return (
    <table className="w-full rounded-lg border border-[#eaecf0] bg-white">
      <EventTableHeader />
      <tbody>
        {eventsResp?.events?.map((row, index) => (
          <EventTableRow
            tagId={row?.tagId}
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
