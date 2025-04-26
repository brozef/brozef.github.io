'use client'
import { ReactNode, useEffect, useState } from "react";4

type Props = {
  children: ReactNode[];
};

export function Carousel({ children }: Props) {
  const [ childIndex, setChildIndex ] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(childIndex)
      setChildIndex((childIndex === children.length - 1 ? 0 : childIndex + 1));
      return () => clearTimeout(timer);
    }, 7000);
  }, [childIndex]);

  
  return <div>
  {
    children.map((c, i) => {
      if (i !== childIndex) {
        return <div key={i} className="duration-1000 transition-opacity opacity-0 mix-blend-multiply">{c}</div>
      } else {
        return <div key={i} className="duration-1000 transition-opacity opacity-100 mix-blend-multiply">{c}</div>
      }
    })
  }
  </div>;
}
