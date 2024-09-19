import React from "react";
import { EventTableRow } from "./EventTableRow";
import { EventTableHeader } from "./EventTableHeader";
import { type Tag, type Event } from "@prisma/client";
import {
  useGetEventsQuery,
  useGetTagByUserQuery,
} from "~/app/rtkQueries/surfaceQueries";
import { useGetOrCreateUser } from "~/app/hooks/useGetOrCreateUser";
import { EventTableSkeleton } from "./EventTableSkeleton";

export const EventTable = () => {
  const userName = useGetOrCreateUser();

  const { data: tagResp, isLoading: isTagLoading } = useGetTagByUserQuery<{
    data: { tag: Tag };
    isLoading: boolean;
  }>({ userName: userName }, { skip: !userName });

  const { data: eventsResp, isLoading: isLoadingEvents } = useGetEventsQuery<{
    data: { events: Array<Event> };
    isLoading: boolean;
  }>({ tagId: tagResp?.tag?.id }, { skip: !tagResp?.tag?.id });

  const isLoadingTable = isLoadingEvents || isTagLoading;

  return (
    <table className="w-full rounded-lg border border-[#eaecf0] bg-white">
      <EventTableHeader />
      <tbody className="block md:table-row-group">
        {isLoadingTable && <EventTableSkeleton />}
        {!isLoadingTable &&
          eventsResp?.events?.map((row, index) => (
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
