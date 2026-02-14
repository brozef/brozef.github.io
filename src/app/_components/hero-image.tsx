import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  src: Url;
  title: string;
  link: string;
  subtitle: string;
  visible: boolean;
};

export function HeroImage({ src, visible, subtitle, title, link }: Props) {
  return (
    <div className="w-[100%] h-[100%] absolute"  style={{pointerEvents: visible ? 'auto' : 'none'}}>      
        <div className="w-[100%] h-[100%] absolute bg-no-repeat bg-cover bg-[position:calc(50%+25vw)_0%] md:bg-[length:auto_150%] duration-1000 transition-opacity" style={{
            backgroundImage: `url(${src})`,
            mixBlendMode: 'multiply',
            filter: 'url(#posterize) contrast(3) grayscale(1) brightness(3) saturate(0)',
            opacity: visible ? 100 : 0
        }}></div>
         
         <div className="w-[100%] h-[100%] absolute flex flex-col justify-between px-5 pt-5 pb-9 lg:pb-8 text-white font-extrabold md:text-xl lg:text-2xl duration-1000 transition-opacity" style={{opacity: visible ? 100 : 0}}>
          <div className="flex justify-end">
            <p className="text-justify max-w-[800px] [text-align-last:justify]">
                {subtitle} 
            </p>
          </div>
          <p >
              <a href={link} target="_blank">{title}</a>
          </p>
        </div>
    </div>
  );
}
