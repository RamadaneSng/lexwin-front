import { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "../lib/axios";

export const useData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    data: articles,
    error,
    mutate,
  } = useSWR("/api/articles", () =>
    axios.get("/api/articles").then((response) => response.data)
  );

  useEffect(() => {
    if (articles || error) {
      setIsLoading(false);
    }
  }, [articles, error]);

  return {
    articles,
    isLoading,
  };
};

export default useData;

