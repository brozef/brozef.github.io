'use client'
import { useEffect, useState } from "react";
import { HeroImage } from "./hero-image";

const data = [
  {src:"/assets/SackboyBigAdventure.webp", title:"Sackboy: A Big Adventure", subtitle:"Gameplay, UI, Performance"},
  {src:"/assets/ve_logo_main.png", title:"Vanguard Exiles", subtitle:"Gameplay, Simulation, Visualisation & Camera"}
];

export function Hero() {
  const [ childIndex, setChildIndex ] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChildIndex((childIndex === data.length - 1 ? 0 : childIndex + 1));
      return () => clearTimeout(timer);
    }, 7000);
  }, [childIndex]);

  return (
    <section className="bg-[#bf4141] flex-grow flex flex-col gap-4 overflow-hidden relative">
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
    </section>
  );
}
