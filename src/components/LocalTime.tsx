"use client";

import { useEffect, useState } from "react";

/** Frankfurt local time, rendered client-side (static placeholder on the server). */
export default function LocalTime() {
  const [time, setTime] = useState("--:--");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Berlin" });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);
  return <span className="tnum">{time}</span>;
}
