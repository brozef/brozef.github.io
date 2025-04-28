import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  src: Url;
  title: string;
  subtitle: string;
  visible: boolean;
};

export function HeroImage({ src, visible, subtitle, title }: Props) {
  return (
    <div className="w-[100%] h-[100%] absolute">      
        <div className="w-[100%] h-[100%] absolute bg-no-repeat bg-cover bg-[position:calc(50%+25vw)_0%] md:bg-[length:auto_150%] duration-1000 transition-opacity" style={{
            backgroundImage: `url(${src})`,
            mixBlendMode: 'multiply',
            filter: 'url(#posterize) contrast(3) grayscale(1) brightness(3) saturate(0)',
            opacity: visible ? 100 : 0
        }}></div>
         
         <div className="w-[100%] h-[100%] absolute flex flex-col justify-between px-5 py-5 text-white font-extrabold md:text-xl lg:text-2xl duration-1000 transition-opacity" style={{opacity: visible ? 100 : 0}}>
          <p className="text-right">
              {subtitle}
          </p>
          <p>
              {title}
          </p>
        </div>
    </div>
  );
}
