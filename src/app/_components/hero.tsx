import { Button } from "./button";

export function Hero() {
  return (
    <section className="bg-[#bf4141] flex-grow flex gap-4">
        <div className="flex lg:pl-16 py-16 flex-col justify-end lg:justify-start gap-8 lg:gap-16 text-xs xl:text-lg">
            <Button>
              Taurus
            </Button>
            <Button>
              Pender
            </Button>
            <Button >
              Vanguard Exiles
            </Button>
            <Button>
              Sackboy: A Big Adventure
            </Button>
        </div>

        <div className="grow flex flex-col items-end">
          <div className="flex w-full grow flex-col items-end bg-no-repeat xl:bg-auto xl:bg-right-top bg-cover" style={{
            backgroundImage: 'url(/assets/ve_logo_main.png)',//SackboyBigAdventure.webp //ve_logo_main.png
            mixBlendMode: 'multiply',
            filter: 'url(#posterize) contrast(3) grayscale(1) brightness(3) saturate(0)',
          }}>
          </div>
          <p className="text-white md:text-xl lg:text-2xl mt-5 mb-[-100px] mr-10 w-[70%] max-w-[850px] text-justify font-extrabold border-white absolute">
            Experienced in both creative and technical roles, with a passion for developing interactive applications and enhancing user experiences.
          </p>
        </div>

    </section>
  );
}
