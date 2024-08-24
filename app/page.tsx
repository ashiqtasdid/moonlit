import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Feature1 from "@/components/feature1";
import Feature2 from "@/components/feature2";
import Feature3 from "@/components/feature3";
import Feature4 from "@/components/feature4";
import Pricing from "@/components/pricing";
import Packages from "@/components/packages";
import Prices from "@/components/prices";

export default function Home() {
  return (
    <div className="relative bg-blue-950">
      <div className="sticky top-0 z-10">
        <Nav />
      </div>
      <Hero />
      <Packages />
      <Features />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Pricing />
      <Prices />
    </div>
  );
}
