"use client";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Prices = () => {
  const handleOrderClick = (planNumber: number) => {
    console.log(planNumber);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="text-center py-8 text-2xl sm:text-3xl font-bold text-white">
        Choose the perfect plan for your community
      </div>
      <div className="hidden md:flex flex-col items-center md:flex-row md:justify-center space-y-10 md:space-y-0 md:space-x-10">
        {/* Plan 1 */}
        <div className="w-full h-[530px] max-w-xs md:max-w-sm lg:max-w-md hover:ring-2 transition hover:ring-emerald-600 rounded-xl bg-blue-900 text-white">
          <div className="flex justify-between px-6 py-4">
            <div className="text-2xl font-semibold">2GB</div>
            <div className="text-blue-400 font-bold text-md">$5/mo</div>
          </div>
          <div className="px-6 text-gray-500 font-medium">
            Perfect for friends
          </div>
          <div className="px-6 flex flex-col space-y-3 py-4">
            {[
              "2 Threads for Ryzen 7950X3D [Shared]",
              "30GB of NVMe Storage",
              "24/7 Support + 2 Free Backups",
              "Shared CPU Threads",
              "99.9% Uptime Guarantee",
              "Available in UK",
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RiVerifiedBadgeFill className="text-blue-400 text-2xl" />
                <span className="text-md font-semibold">{item}</span>
              </div>
            ))}
          </div>
          <div className="pb-4 pt-24 md:pt-36 mx-3">
            <button
              onClick={() => handleOrderClick(1)}
              className="w-full rounded-2xl border-2 border-dashed border-black bg-blue-500 text-white px-6 py-2 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            >
              Order now
            </button>
          </div>
        </div>

        {/* Plan 2 */}
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-md hover:ring-2 transition hover:ring-emerald-600 rounded-xl bg-blue-900 text-white">
          <div className="flex justify-between px-6 py-4">
            <div className="text-2xl font-semibold">4GB</div>
            <div className="text-blue-400 font-bold text-md">$9/mo</div>
          </div>
          <div className="px-6 text-gray-500 font-medium">
            Ideal for small communities
          </div>
          <div className="px-6 flex flex-col space-y-3 py-4">
            {[
              "4 Threads for Ryzen 7950X3D [Dedicated]",
              "45GB of NVMe Storage",
              "24/7 Support + 5 Free Backups",
              "480Gbps DDoS Protection",
              "One-click Modpack Installer",
              "Dedicated CPU Threads",
              "Support for Custom Startup flags",
              "99.9% Uptime Guarantee",
              "Available in UK",
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RiVerifiedBadgeFill className="text-blue-400 text-2xl" />
                <span className="text-md font-semibold">{item}</span>
              </div>
            ))}
          </div>
          <div className="py-4 mx-3">
            <button
              onClick={() => handleOrderClick(2)}
              className="w-full rounded-2xl border-2 border-dashed border-black bg-blue-500 text-white px-6 py-2 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            >
              Order now
            </button>
          </div>
        </div>

        {/* Plan 3 */}
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-md hover:ring-2 transition hover:ring-emerald-600 rounded-xl bg-blue-900 text-white">
          <div className="flex justify-between px-6 py-4">
            <div className="text-2xl font-semibold">8GB</div>
            <div className="text-blue-400 font-bold text-md">$15/mo</div>
          </div>
          <div className="px-6 text-gray-500 font-medium">
            Ideal for growing communities
          </div>
          <div className="px-6 flex flex-col space-y-3 py-4">
            {[
              "6 Threads for Ryzen 7950X3D [Dedicated]",
              "100GB of NVMe Storage",
              "24/7 Support + 10 Free Backups",
              "480Gbps DDoS Protection",
              "One-click Modpack Installer",
              "Dedicated CPU Threads",
              "Support for Custom Startup flags",
              "99.9% Uptime Guarantee",
              "Available in UK",
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RiVerifiedBadgeFill className="text-blue-400 text-2xl" />
                <span className="text-md font-semibold">{item}</span>
              </div>
            ))}
          </div>
          <div className="py-4 mx-3">
            <button
              onClick={() => handleOrderClick(3)}
              className="w-full rounded-2xl border-2 border-dashed border-black bg-blue-500 text-white px-6 py-2 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            >
              Order now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden flex justify-center py-8">
        <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md">
          <CarouselContent>
            <CarouselItem>
              <Card className="w-full h-[530px] bg-blue-900 text-white rounded-xl hover:ring-2 transition hover:ring-emerald-600">
                <CardContent className="p-0">
                  <div className="flex justify-between px-6 py-4">
                    <div className="text-2xl font-semibold">2GB</div>
                    <div className="text-blue-400 font-bold text-md">
                      $5/mo
                    </div>
                  </div>
                  <div className="px-6 text-gray-500 font-medium">
                    Perfect for friends
                  </div>
                  <div className="px-6 flex flex-col space-y-3 py-4">
                    {[
                      "2 Threads for Ryzen 7950X3D [Shared]",
                      "30GB of NVMe Storage",
                      "24/7 Support + 2 Free Backups",
                      "Shared CPU Threads",
                      "99.9% Uptime Guarantee",
                      "Available in UK",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RiVerifiedBadgeFill className="text-blue-400 text-2xl" />
                        <span className="text-md font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pb-4 pt-24 md:pt-36 mx-3">
                    <button
                      onClick={() => handleOrderClick(1)}
                      className="w-full rounded-2xl border-2 border-dashed border-black bg-blue-500 text-white px-6 py-2 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                    >
                      Order now
                    </button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-full h-[580px] bg-blue-900 text-white rounded-xl hover:ring-2 transition hover:ring-emerald-600">
                <CardContent className="p-0">
                  <div className="flex justify-between px-6 py-4">
                    <div className="text-2xl font-semibold">4GB</div>
                    <div className="text-blue-400 font-bold text-md">
                      $9/mo
                    </div>
                  </div>
                  <div className="px-6 text-gray-500 font-medium">
                    Ideal for small communities
                  </div>
                  <div className="px-6 flex flex-col space-y-3 py-4">
                    {[
                      "4 Threads for Ryzen 7950X3D [Dedicated]",
                      "45GB of NVMe Storage",
                      "24/7 Support + 5 Free Backups",
                      "480Gbps DDoS Protection",
                      "One-click Modpack Installer",
                      "Dedicated CPU Threads",
                      "Support for Custom Startup flags",
                      "99.9% Uptime Guarantee",
                      "Available in UK",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RiVerifiedBadgeFill className="text-blue-400 text-2xl" />
                        <span className="text-md font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="py-4 mx-3">
                    <button
                      onClick={() => handleOrderClick(2)}
                      className="w-full rounded-2xl border-2 border-dashed border-black bg-blue-500 text-white px-6 py-2 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                    >
                      Order now
                    </button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-full h-[580px] bg-blue-900 text-white rounded-xl hover:ring-2 transition hover:ring-emerald-600">
                <CardContent className="p-0">
                  <div className="flex justify-between px-6 py-4">
                    <div className="text-2xl font-semibold">8GB</div>
                    <div className="text-blue-400 font-bold text-md">
                      $15/mo
                    </div>
                  </div>
                  <div className="px-6 text-gray-500 font-medium">
                    Ideal for growing communities
                  </div>
                  <div className="px-6 flex flex-col space-y-3 py-4">
                    {[
                      "6 Threads for Ryzen 7950X3D [Dedicated]",
                      "100GB of NVMe Storage",
                      "24/7 Support + 10 Free Backups",
                      "480Gbps DDoS Protection",
                      "One-click Modpack Installer",
                      "Dedicated CPU Threads",
                      "Support for Custom Startup flags",
                      "99.9% Uptime Guarantee",
                      "Available in UK",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RiVerifiedBadgeFill className="text-blue-400 text-2xl" />
                        <span className="text-md font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="py-4 mx-3">
                    <button
                      onClick={() => handleOrderClick(3)}
                      className="w-full rounded-2xl border-2 border-dashed border-black bg-blue-500 text-white px-6 py-2 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                    >
                      Order now
                    </button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Prices;
