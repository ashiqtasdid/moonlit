"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

interface StepModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StepModal: React.FC<StepModalProps> = ({ isOpen, onClose }) => {
  const [selectedPackageId, setSelectedPackageId] = useState<number | null>(
    null,
  );
  const router = useRouter();

  const handleCardClick = (id: number) => {
    setSelectedPackageId(id);
  };

  const handleNextStep = () => {
    if (selectedPackageId === null) return;

    if (selectedPackageId === 4) {
      router.push("/create-minecraft-server");
    } else {
      console.log(`Selected Package ID: ${selectedPackageId}`);
    }

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black mx-2 bg-opacity-50">
          <div className="bg-blue-950 rounded-lg shadow-lg relative w-full max-w-4xl p-4 sm:p-6 h-[540px] md:h-[510px] overflow-y-auto">
            {/* Step Content */}
            <div className="text-white">
              <h2 className="text-lg font-bold mb-4">Choose a Package</h2>
              <div className="h-full overflow-y-auto sm:overflow-hidden">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Card 1 */}
                  <div
                    className={`bg-gradient-to-b mx-2 my-2 from-blue-950 to-transparent p-4 rounded-lg shadow-md text-left font-semibold cursor-pointer ring-1 ${
                      selectedPackageId === 1
                        ? "border-2 border-blue-400"
                        : "ring-gray-600"
                    }`}
                    onClick={() => handleCardClick(1)}
                  >
                    <h3 className="text-base font-semibold mb-2">2GB</h3>
                    <p className="text-xs">
                      2 Threads for Ryzen 7950X3D [Shared]
                    </p>
                    <p className="text-xs">30GB of NVMe Storage</p>
                    <p className="text-xs">24/7 Support + 2 Free Backups</p>
                    <p className="text-blue-400 font-bold text-base">
                      $5/mo
                    </p>
                  </div>
                  {/* Card 2 */}
                  <div
                    className={`bg-gradient-to-b  mx-2 my-2  from-blue-950 to-transparent p-4 rounded-lg shadow-md text-left font-semibold cursor-pointer ring-1 ${
                      selectedPackageId === 2
                        ? "border-2 border-blue-400"
                        : "ring-gray-600"
                    }`}
                    onClick={() => handleCardClick(2)}
                  >
                    <h3 className="text-base font-semibold mb-2">4GB</h3>
                    <p className="text-xs">
                      4 Threads for Ryzen 7950X3D [Dedicated]
                    </p>
                    <p className="text-xs">45GB of NVMe Storage</p>
                    <p className="text-xs">24/7 Support + 5 Free Backups</p>
                    <p className="text-xs">480Gbps DDoS Protection</p>
                    <p className="text-blue-400 font-bold text-base">
                      $9/mo
                    </p>
                  </div>
                  {/* Card 3 */}
                  <div
                    className={`bg-gradient-to-b  mx-2 my-2  from-blue-950 to-transparent p-4 rounded-lg shadow-md text-left font-semibold cursor-pointer ring-1 ${
                      selectedPackageId === 3
                        ? "border-2 border-blue-400"
                        : "ring-gray-600"
                    }`}
                    onClick={() => handleCardClick(3)}
                  >
                    <h3 className="text-base font-semibold mb-2">8GB</h3>
                    <p className="text-xs">
                      6 Threads for Ryzen 7950X3D [Dedicated]
                    </p>
                    <p className="text-xs">100GB of NVMe Storage</p>
                    <p className="text-xs">24/7 Support + 10 Free Backups</p>
                    <p className="text-xs">480Gbps DDoS Protection</p>
                    <p className="text-blue-400 font-bold text-base">
                      $15/mo
                    </p>
                  </div>
                  {/* Card 4 - Custom */}
                  <div
                    className={`bg-gradient-to-b mx-2 my-2 from-blue-950 to-transparent p-4 rounded-lg shadow-md text-left font-semibold cursor-pointer ring-1 ${
                      selectedPackageId === 4
                        ? "border-2 border-blue-400"
                        : "ring-gray-600"
                    }`}
                    onClick={() => handleCardClick(4)}
                  >
                    <h3 className="text-base font-semibold mb-2">Custom</h3>
                    <p className="text-xs">
                      Create a server with custom specifications.
                    </p>
                    <p className="text-xs">Click to configure your server.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4 sm:mt-6">
              <button
                onClick={onClose}
                className="text-gray-300 hover:text-white text-xs sm:text-sm"
              >
                Close
              </button>
              <button
                onClick={handleNextStep}
                disabled={selectedPackageId === null}
                className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-md text-xs sm:text-sm ${
                  selectedPackageId === null
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default StepModal;
