import Hero from "@/components/main/Hero";
import BestSellers from "@/components/main/product/bestSellers/BestSellers";
import NewCollection from "@/components/main/product/newCollection/NewCollection";

export default function Home() {
  return (
    <main>
      <Hero/>
      <NewCollection/>
      <BestSellers/>
    </main>
  );
}
