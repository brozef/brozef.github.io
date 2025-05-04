import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { Hero } from "@/app/_components/hero";

export default function Index() {

  return (
    <main className="flex flex-col min-h-[100svh]">
      <Intro />
      <Hero />
    </main>
  );
}
