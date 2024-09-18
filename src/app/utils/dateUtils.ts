import { format } from "date-fns";

export const formatTimestamp = (timestamp: number | string | Date): string => {
  const date = new Date(timestamp);
  return format(date, "M/d/yyyy, h:mm:ss a");
};
