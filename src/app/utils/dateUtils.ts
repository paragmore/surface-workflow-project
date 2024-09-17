import { format } from 'date-fns';

export const formatTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp * 1000); 
  return format(date, 'M/d/yyyy, h:mm:ss a');
}

