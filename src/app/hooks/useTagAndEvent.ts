import { type Event, type Tag } from "@prisma/client";

import {
  useGetTagByUserQuery,
  useGetEventByTagIdQuery,
} from "~/app/rtkQueries/surfaceQueries";
import { useGetOrCreateUser } from "~/app/hooks/useGetOrCreateUser";

export const useTagAndEvent = () => {
  const userName = useGetOrCreateUser(false);

  const { data: tagResp, isLoading: isTagLoading } = useGetTagByUserQuery<{
    data: { tag: Tag };
    isLoading: boolean;
  }>({ userName: userName }, { skip: !userName });

  const {
    data: eventResp,
    isLoading: isEventLoading,
    refetch: refetchEvent,
    isFetching: isEventFetching,
  } = useGetEventByTagIdQuery<{
    data: { event: Event };
    isLoading: boolean;
    isFetching: boolean;
  }>({ tagId: tagResp?.tag?.id }, { skip: !tagResp });

  return {
    tagResp,
    eventResp,
    isTagLoading,
    isEventLoading,
    refetchEvent,
    isEventFetching,
  };
};
