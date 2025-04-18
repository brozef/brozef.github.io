import { Button } from "./button";

export function Hero() {
  return (
    <section className="bg-[#bf4141] h-[calc(100vh-300px)]">
      <div className="py-4 grid grid-cols-2 gap-4">
        <div className="flex py-16 flex-row space-between h-[100vh]">
            <Button inverse color="#bf4141">
              Taurus
            </Button>
            
            <Button inverse color="#bf4141">
              Pender
            </Button>
            
            <Button inverse color="#bf4141">
              Vanguard Exiles
            </Button>

            <Button inverse color="#bf4141">
              Sackboy: A Big Adventure
            </Button>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-white text-xl lg:text-2xl mr-10 w-[70%] max-w-[850px] text-justify font-extrabold border-white">
            Experienced in both creative and technical roles, with a passion for developing interactive applications and enhancing user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
