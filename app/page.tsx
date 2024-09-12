import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Prices from "@/components/prices";
import Banner from "@/components/card";
import Feature from "@/components/feature";
import Plan from "@/components/plan";
import Footer from "@/components/footer";
import HoverCard from "@/components/hovercard";

export default function Home() {
  return (
    <div className="relative bg-blue-950">
      <div className="sticky top-0 z-10">
        <Nav />
      </div>
      <Hero />
      <div className="bg-blue-950 text-center py-10" id="play">
        <div className="flex items-center justify-center space-x-4">
          <span className="block h-px w-16 bg-gradient-to-r from-transparent to-gray-600"></span>
          <div className="text-gray-400 text-sm font-semibold tracking-wide">
            YOUR FAVOURITE GAMES, ON MOONLIT
          </div>
          <span className="block h-px w-16 bg-gradient-to-l from-transparent to-gray-600"></span>
        </div>
        <h1 className="text-white text-4xl font-bold mt-4">
          Play the games you love,
          <br /> with the friends you love
        </h1>
      </div>
      <HoverCard/>
      <div className="bg-blue-950 text-center py-20">
        <div className="flex items-center justify-center space-x-4">
          <span className="block h-px w-16 bg-gradient-to-r from-transparent to-gray-600"></span>
          <div className="text-gray-400 text-sm font-semibold tracking-wide">
          OUR COMPETITION
          </div>
          <span className="block h-px w-16 bg-gradient-to-l from-transparent to-gray-600"></span>
        </div>
      </div>
      <Feature />
      <div className="bg-blue-950 text-center pt-20" id="pricing">
        <div className="flex items-center justify-center space-x-4">
          <span className="block h-px w-16 bg-gradient-to-r from-transparent to-gray-600"></span>
          <div className="text-gray-500 text-sm font-semibold tracking-wide">
          PRICES
          </div>
          <span className="block h-px w-16 bg-gradient-to-l from-transparent to-gray-600"></span>
        </div>
      </div>
      <Prices />
      <Plan />
      <Banner />
      <Footer />
    </div>
  );
}
