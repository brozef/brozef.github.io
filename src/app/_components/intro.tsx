'use client'
import { getMyCurrentTime } from "@/lib/mytime";
import { useEffect, useState } from "react";

export function Intro() {
  const [ timeStr, setTimeStr ] = useState<string>(getMyCurrentTime());
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeStr(getMyCurrentTime());
      }, 60000);

      return () => clearTimeout(timer);
    }, [timeStr]);

  return (
    <section className="flex-row flex justify-between items-end mt-16 mb-2 md:mb-2 bg-white">
      <p className="text-right text-[11px] pl-3 md:pl-10 mb-3 lg:mb-4">
       Brisbane, Aus | {timeStr}
      </p>
      <h1 className="text-right text-7xl md:text-9xl font-bold tracking-tighter leading-tight pr-2 md:pr-8">
        Brozef
      </h1>
    </section>
  );
}
