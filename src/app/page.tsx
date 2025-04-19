import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { Hero } from "@/app/_components/hero";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main className="flex flex-col min-h-screen">
      <Intro />
      <Hero />
      {allPosts.length > 0 && <MoreStories posts={allPosts} />}
    </main>
  );
}
