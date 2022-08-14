import { useCallback, useEffect, useState } from "react";

export const useRequest = <T>(request: () => Promise<T>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T>();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const requestData = await request();
    setData(requestData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    data,
    refetch: async () => {
      if (!isLoading) {
        await fetchData();
      }
    },
  };
};
