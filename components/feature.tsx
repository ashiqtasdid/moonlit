"use client";

import { Progress } from "@/components/ui/progress";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const MotionProgress = motion(Progress);

const Feature = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="text-white flex justify-center px-4 sm:px-6 lg:px-8">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[970px] mx-auto"
        ref={ref}
      >
        <div className="col-span-1 md:col-span-2 ring-1 rounded-xl ring-slate-700 ring-opacity-30 bg-gradient-to-b from-blue-950 to-blue-900 p-6">
          <h1 className="font-semibold text-lg md:text-xl lg:text-2xl pb-6">
            Better bang for your buck
          </h1>
          <ul className="space-y-4">
            <li className="flex flex-col md:flex-row justify-between items-start md:items-center py-2">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full mr-4">
                  <Image
                    src="/assets/logo.png"
                    height={100}
                    width={100}
                    alt="moonlit"
                  />
                </div>
                <div>
                  <p>Moonlit Hosting</p>
                  <p className="text-sm text-gray-400">$2/GB</p>
                </div>
              </div>
              <div className="space-y-1 w-full md:w-auto">
                <p className="text-purple-400">AMD Ryzen 7950X</p>
                <MotionProgress
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1 }}
                  value={0}
                  className="h-2 bg-purple-500"
                />
              </div>
            </li>
            <hr />
            <li className="flex flex-col md:flex-row justify-between items-start md:items-center py-2">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full mr-4">
                  <Image
                    src="/assets/apexhosting.webp"
                    height={100}
                    width={100}
                    alt="moonlit"
                  />
                </div>
                <div>
                  <p>Apex Hosting</p>
                  <p className="text-sm text-gray-400">$5/GB</p>
                </div>
              </div>
              <div className="space-y-1 w-full md:w-auto">
                <p className="text-yellow-400">AMD Ryzen 5800X</p>
                <MotionProgress
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "70%" } : { width: 0 }}
                  transition={{ duration: 1 }}
                  value={0}
                  className="h-2 bg-yellow-500"
                />
              </div>
            </li>
            <hr />
            <li className="flex flex-col md:flex-row justify-between items-start md:items-center py-2">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full mr-4">
                  <Image
                    src="/assets/bisecthosting.webp"
                    height={100}
                    width={100}
                    alt="moonlit"
                  />
                </div>
                <div>
                  <p>Bisect Hosting</p>
                  <p className="text-sm text-gray-400">$5/GB</p>
                </div>
              </div>
              <div className="space-y-1 w-full md:w-auto">
                <p className="text-yellow-400">Intel Xeon E5-2643</p>
                <MotionProgress
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "60%" } : { width: 0 }}
                  transition={{ duration: 1 }}
                  value={0}
                  className="h-2 bg-yellow-400"
                />
              </div>
            </li>
            <hr />
            <li className="flex flex-col md:flex-row justify-between items-start md:items-center py-2">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full mr-4">
                  <Image
                    src="/assets/shockbyte.webp"
                    height={100}
                    width={100}
                    alt="moonlit"
                  />
                </div>
                <div>
                  <p>Shockbyte</p>
                  <p className="text-sm text-gray-400">$2.5/GB</p>
                </div>
              </div>
              <div className="space-y-1 w-full md:w-auto">
                <p className="text-red-400">Intel Xeon E-22360</p>
                <MotionProgress
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "45%" } : { width: 0 }}
                  transition={{ duration: 1 }}
                  value={0}
                  className="h-2 bg-red-500"
                />
              </div>
            </li>
          </ul>
          <div className="pt-16 font-bold text-gray-300">
            We are the best and affordable hosting solution for you. Get started
            today! Have fun while paying less and getting more.
          </div>
        </div>
        <div className="space-y-6">
          <div className="ring-1 rounded-xl ring-slate-700 ring-opacity-30 bg-gradient-to-b from-blue-950 to-blue-900 p-6">
            <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
              99.99% Uptime SLA
            </h2>
            <p className="text-sm md:text-base text-gray-400">
              Our services are designed to be reliable and always available,
              ensuring that your operations run smoothly without interruption.
            </p>
          </div>
          <div className="ring-1 rounded-xl ring-slate-700 ring-opacity-30 bg-gradient-to-b from-blue-950 to-blue-900 p-6">
            <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
              24/7 Support
            </h2>
            <p className="text-sm md:text-base text-gray-400">
              We are always here to assist you with any queries or issues. Our
              support team is available around the clock to ensure you have the
              best experience possible.
            </p>
          </div>
          <div className="ring-1 rounded-xl ring-slate-700 ring-opacity-30 bg-gradient-to-b from-blue-950 to-blue-900 p-6">
            <h2 className="font-semibold text-lg md:text-xl lg:text-2xl">
              Upgrade at any time
            </h2>
            <p className="text-sm md:text-base text-gray-400">
              Scale your resources effortlessly whenever your needs grow. Our
              platform allows you to upgrade without any downtime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
