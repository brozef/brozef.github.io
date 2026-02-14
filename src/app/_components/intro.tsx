'use client'
import { getMyCurrentTime, TimeInfo } from "@/lib/mytime";
import { useEffect, useState } from "react";

export function Intro() {
  const [ timeInfo, setTimeInfo ] = useState<TimeInfo>({time:"", activity:"", secondsToMin:0});

  console.log(timeInfo.secondsToMin);
    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeInfo(getMyCurrentTime());
      }, timeInfo.secondsToMin * 1000);

      return () => clearTimeout(timer);
    }, [timeInfo]);

  return (
    <section className="flex-row flex justify-between items-end mt-10 md:mt-16 mb-2 bg-white">
      <div className="flex items-center pl-3 md:pl-10 mb-3 lg:mb-4 gap-2 max-h-[32px] min-h-[32px]">
      {timeInfo.activity ? <img src={timeInfo.activity} style={{imageRendering: "pixelated"}} width="32" height="32"/> : null}
        <p className="text-justify [text-align-last:justify] text-[11px] leading-[16px] md:leading-[32px]">
        Brisbane, Aus <span className="hidden md:inline">|</span> <br className="inline md:hidden"/>{timeInfo.time}
        </p>
      </div>
      <h1 className="text-right text-7xl md:text-9xl font-bold tracking-tighter leading-tight pr-2 md:pr-8">
        Brozef
      </h1>
    </section>
  );
}
