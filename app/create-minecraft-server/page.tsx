import Footer from "@/components/footer";
import MinecraftHero from "@/components/MinecraftHero";
import Nav from "@/components/nav";
import Plan from "@/components/plan";
import Prices from "@/components/prices";
import Pricing from "@/components/pricing";
import ServerConfigurator from "@/components/ServerConfigurator";

export default function Minecraft() {
  return (
    <div className="relative bg-blue-950">
      <div className="sticky top-0 z-10">
        <Nav />
      </div>
      <MinecraftHero />
      <Pricing />
      <Prices />
      <ServerConfigurator />
      <Plan />
      <Footer />
    </div>
  );
}
