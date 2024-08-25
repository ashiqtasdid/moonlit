import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Packages from "@/components/packages";
import Prices from "@/components/prices";
import Review from "@/components/review";
import Card from "@/components/card";
import Feature from "@/components/feature";
import Plan from "@/components/plan";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative bg-blue-950">
      <div className="sticky top-0 z-10">
        <Nav />
      </div>
      <Hero />
      <Packages />
      <Features />
      <Feature />
      <Pricing />
      <Prices />
      <Review />
      <Plan />
      <Footer />
    </div>
  );
}
