import { useState, useEffect } from "react";
import { DateTime } from "../types";

const useUnixToDate = (unixTimestamp: number) => {
  const [dateTime, setDateTime] = useState<DateTime>({ date: "" });

  useEffect(() => {
    const date = new Date(unixTimestamp * 1000);
    const dateString = date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    setDateTime({ date: dateString });
  }, [unixTimestamp]);

  return dateTime;
};

export default useUnixToDate;
