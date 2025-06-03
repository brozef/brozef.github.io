import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { Hero } from "@/app/_components/hero";
import { BelowFold } from "@/app/_components/below-fold";

export default function Index() {

  return (
    <div>
      <main className="flex flex-col min-h-[600px] h-[100svh]">
        <Intro />
        <Hero />
      </main>
      <BelowFold />
    </div>
  );
}
