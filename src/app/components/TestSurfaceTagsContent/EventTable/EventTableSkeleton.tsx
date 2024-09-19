import React from "react";
import { Skeleton } from "~/components/ui/skeleton";

export const EventTableSkeleton = () => {
  return (
    <>
      {Array.from({ length: 4 }).map((arr, index) => (
        <tr key={`event-table-row-${index}`}>
          {Array.from({ length: 4 }).map((arr, tdIndex) => (
            <td key={`event-table-row-${index}_${tdIndex}`}>
              <Skeleton className="rounded-20 h-[20px] w-full" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};
