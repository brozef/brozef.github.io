import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  src: Url;
};

export function HeroImage({ src }: Props) {
  return (
    <div className="w-[100%] h-[100%] absolute bg-no-repeat bg-cover bg-[position:calc(50%+25vw)_0%] md:bg-[length:auto_150%]" style={{
        backgroundImage: `url(${src})`,
        mixBlendMode: 'multiply',
        filter: 'url(#posterize) contrast(3) grayscale(1) brightness(3) saturate(0)'
    }}></div>
  );
}
