import { useEffect, useState } from "react";
import { WeatherAPIResponse } from "../types";

const useFetch = (API_URL: string) => {
  const [data, setData] = useState<WeatherAPIResponse>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(API_URL, {
          signal: abortController.signal,
        });
        if (!response.ok) {
          throw new Error("Failed to fetch weather data!");
        }
        const data: WeatherAPIResponse = await response.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        if ((err as any).name !== "AbortError") {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [API_URL]);

  return { data, loading };
};

export default useFetch;
