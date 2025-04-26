import { Button } from "./button";
import { Carousel } from "./carousel";
import { HeroImage } from "./hero-image";

export function Hero() {
  return (
    <section className="bg-[#bf4141] flex-grow flex flex-col gap-4 overflow-hidden relative">
        <Carousel>
          <HeroImage src="/assets/SackboyBigAdventure.webp"/>
          <HeroImage src="/assets/ve_logo_main.png"/>
        </Carousel>
        <div className="flex bg-black mix-blend-screen lg:pl-16 py-8 flex-col items-start justify-start gap-2 lg:gap-16 text-xs xl:text-lg z-10">
            <Button inverse href="/">
              Taurus
            </Button>
            <Button inverse href="/">
              Pender
            </Button>
            <Button inverse href="/">
              Vanguard Exiles
            </Button>
            <Button inverse href="#sackboy">
              Sackboy: A Big Adventure
            </Button>
        </div>
          <p className="text-white md:text-xl lg:text-2xl mt-5 mb-[-100px] mr-10 w-[70%] max-w-[850px] text-justify font-extrabold border-white lg:absolute z-10">
            Gameplay Mechanics, Simulation, Visualisation & Camera 
          </p>
        
          

    </section>
  );
}
