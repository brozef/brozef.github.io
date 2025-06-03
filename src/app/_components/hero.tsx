'use client'
import { useEffect, useRef, useState } from "react";
import { HeroImage } from "./hero-image";

const data = [
  {src:"/assets/SackboyBigAdventure.webp", title:"Sackboy: A Big Adventure", subtitle:"Gameplay, User Interface, Performance, Unreal Engine 4"},
  {src:"/assets/ve_logo_main.png", title:"Vanguard Exiles", subtitle:"Gameplay, Simulation, Visualisation & Camera, Unity"},
  {src:"/assets/gears.png", title:"Gears of War: Reloaded", subtitle:"User Interface, Engine Improvements, Unreal Engine 3"}
];

export function Hero() {
  const [ childIndex, setChildIndex ] = useState<number>(0);
  const timer:any = useRef(0);
  const timerAdd:any = useRef(0);

  useEffect(() => {
    timer.current = setTimeout(() => {
      timerAdd.current = 0;
      setChildIndex((childIndex === data.length - 1 ? 0 : childIndex + 1));
    }, 7000 + timerAdd.current);

    return () => { clearTimeout(timer.current)};
  }, [childIndex, timer]);

  return (
    <section className="bg-[#bf4141] flex-grow flex flex-col gap-1 justify-end overflow-hidden relative">
        {
          data.map((item, i) => {
            return <HeroImage 
              key={i}
              src={item.src} 
              title={item.title}
              subtitle={item.subtitle} 
              visible={i === childIndex} 
            />
          })
        }
        <div className="ml-5 mb-4 lg:mb-5 flex flex-row gap-1 z-20">
        {
          data.map((item, i) => {
            return <div key={`b${i}`} className="w-[16px] h-[16px] lg:w-[8px] lg:h-[8px] cursor-pointer rounded-full duration-1000 border-[1px] border-solid transition-color"
              onClick={() => {
                timerAdd.current = 3000;
                clearTimeout(timer.current);
                setChildIndex(i);
              }}
              style={{
                backgroundColor: i === childIndex ? "rgba(255, 255, 255, 0.8)" : "transparent",
                borderColor: i === childIndex ? "white" : "rgba(255, 255, 255, 0.5)"
              }}></div>;
          })
        }</div>
    </section>
  );
}
