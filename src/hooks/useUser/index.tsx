import { useQuery } from "react-query";
import { HttpClient } from "services/api";

import * as I from "./types";

export function useUser({ page = 1 }: I.Params): I.ModelUser {
  const { data, isLoading, error, isFetching } = useQuery<I.GetUserResponse>(
    ["users", page],
    async () => {
      const { data, headers } = await HttpClient.get("/users", {
        params: {
          page,
        },
      });

      const totalCount = Number(headers["x-total-count"]);

      const users = data?.users || [{}];

      return { users, totalCount };
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutes,
    }
  );

  return {
    users: data?.users,
    totalCount: data?.totalCount,
    isFetching,
    isLoading,
    error,
  };
}
