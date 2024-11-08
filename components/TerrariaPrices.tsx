"use client";

import React, { useState } from "react";
import Modal from "@/components/priceModal";
import { MdClose } from "react-icons/md";

const Prices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const handleOrderClick = (planNumber: number) => {
    setSelectedPlan(planNumber);
    console.log(`Ordering plan ${selectedPlan}`);
  };

  const openModal = (planNumber: number) => {
    setSelectedPlan(planNumber);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  const renderPlanDetails = (planNumber: number) => {
    switch (planNumber) {
      case 1:
        return (
          <div className="h-[265px] text-white w-full">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-2">2GB Plan</h2>
              {/* Close Button */}
              <div onClick={closeModal} className="text-2xl cursor-pointer">
                <MdClose />
              </div>
            </div>
            <p>Perfect for friends, includes:</p>
            <ul className="list-none ml-6">
              <li>2 Threads for Ryzen 7950X3D</li>
              <li>Unlimited NVMe Storage</li>
              <li>24/7 Support</li>
              <li>Free Offsite Backups              </li>
              <li>99.9% Uptime Guarantee</li>
              <li>Available in UK</li>
            </ul>
            <div className="pt-2">
              <button
                onClick={() => handleOrderClick(1)}
                className="bg-purple-600 hover:bg-purple-700 rounded-lg px-4 py-2 text-white font-semibold transition duration-200"
              >
                Order
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="h-[265px] text-white w-full">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-2">8GB Plan</h2>
              {/* Close Button */}
              <div onClick={closeModal} className="text-2xl cursor-pointer">
                <MdClose />
              </div>
            </div>
            <p>Ideal for small communities, includes:</p>
            <ul className="list-none ml-6">
              <li>2 Threads for Ryzen 7950X3D [Shared]</li>
              <li>Unlimited NVMe Storage</li>
              <li>24/7 Support + Unlimited Free Backups</li>
              <li>Shared CPU Threads</li>
              <li>99.9% Uptime Guarantee</li>
              <li>Available in UK</li>
            </ul>
            <div className="pt-2">
              <button
                onClick={() => handleOrderClick(2)}
                className="bg-purple-600 hover:bg-purple-700 rounded-lg px-4 py-2 text-white font-semibold transition duration-200"
              >
                Order
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="text-white">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-2">12GB Plan</h2>
              {/* Close Button */}
              <div onClick={closeModal} className="text-2xl cursor-pointer">
                <MdClose />
              </div>
            </div>
            <p>Ideal for growing communities, includes:</p>
            <ul className="list-none ml-6">
              <li>2 Threads for Ryzen 7950X3D [Shared]</li>
              <li>Unlimited NVMe Storage</li>
              <li>24/7 Support + Unlimited Free Backups</li>
              <li>Shared CPU Threads</li>
              <li>99.9% Uptime Guarantee</li>
              <li>Available in UK</li>
            </ul>
            <div className="pt-2">
              <button
                onClick={() => handleOrderClick(3)}
                className="bg-purple-600 hover:bg-purple-700 rounded-lg px-4 py-2 text-white font-semibold transition duration-200"
              >
                Order
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="text-white">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-2">16GB Plan</h2>
              {/* Close Button */}
              <div onClick={closeModal} className="text-2xl cursor-pointer">
                <MdClose />
              </div>
            </div>
            <p>Ideal for large communities, includes:</p>
            <ul className="list-none ml-6">
              <li>2 Threads for Ryzen 7950X3D [Shared]</li>
              <li>Unlimited NVMe Storage</li>
              <li>24/7 Support + Unlimited Free Backups</li>
              <li>Shared CPU Threads</li>
              <li>99.9% Uptime Guarantee</li>
              <li>Available in UK</li>
            </ul>
            <div className="pt-2">
              <button
                onClick={() => handleOrderClick(4)}
                className="bg-purple-600 hover:bg-purple-700 rounded-lg px-4 py-2 text-white font-semibold transition duration-200"
              >
                Order
              </button>
            </div>
          </div>
        );
      default:
        return <p>Invalid plan selected.</p>;
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="mx-auto max-w-[980px]">
        <div className="text-center py-8 text-2xl sm:text-3xl font-bold text-white">
          Choose or Craft the perfect plan for your community
        </div>
        <div className="flex justify-center">
          <div className="h-[520px] w-full md:w-[495px] bg-gradient-to-b ring-1 rounded-xl ring-slate-700 ring-opacity-30 from-blue-950 to-blue-900 p-6 shadow-lg">
            {/* Plan options */}
            <div
              onClick={() => openModal(1)}
              className="hover:bg-black rounded-xl cursor-pointer hover:bg-opacity-25 pb-1 pt-2"
            >
              <div className="flex justify-between items-center px-6">
                <div className="text-3xl text-white font-bold">2GB</div>
                <div className="text-white text-md flex items-center space-x-4">
                  <span className="text-purple-400 font-semibold">$4/mo</span>
                  <button
                    onClick={() => handleOrderClick(1)}
                    className="bg-purple-600 hover:bg-purple-700 rounded-lg px-4 py-2 text-white font-semibold transition duration-200"
                  >
                    Order
                  </button>
                </div>
              </div>
              <div className="text-gray-300 font-medium mx-6 mb-4">
                Perfect for new friends
              </div>
            </div>
            <hr className="border-gray-600 my-4" />
            <div
              onClick={() => openModal(2)}
              className="hover:bg-black rounded-xl cursor-pointer hover:bg-opacity-25 pb-1 pt-2"
            >
              <div className="flex justify-between items-center px-6">
                <div className="text-3xl text-white font-bold">4GB</div>
                <div className="text-white text-md flex items-center space-x-4">
                  <span className="text-purple-400 font-semibold">$8/mo</span>
                  <button
                    onClick={() => handleOrderClick(2)}
                    className="bg-purple-600 hover:bg-purple-700 rounded-lg px-4 py-2 text-white font-semibold transition duration-200"
                  >
                    Order
                  </button>
                </div>
              </div>
              <div className="text-gray-300 font-medium mx-6 mb-4">
                Ideal for modded servers
              </div>
            </div>
            <hr className="border-gray-600 my-4" />
            <div
              onClick={() => openModal(3)}
              className="hover:bg-black rounded-xl cursor-pointer hover:bg-opacity-25 pb-1 pt-2"
            >
              <div className="flex justify-between items-center px-6">
                <div className="text-3xl text-white font-bold">6GB</div>
                <div className="text-white text-md flex items-center space-x-4">
                  <span className="text-purple-400 font-semibold">$12/mo</span>
                  <button
                    onClick={() => handleOrderClick(3)}
                    className="bg-purple-600 hover:bg-purple-700 rounded-lg px-4 py-2 text-white font-semibold transition duration-200"
                  >
                    Order
                  </button>
                </div>
              </div>
              <div className="text-gray-300 font-medium mx-6 mb-4">
                Great for lots of players
              </div>
            </div>
            <hr className="border-gray-600 my-4" />
            <div
              onClick={() => openModal(4)}
              className="hover:bg-black rounded-xl cursor-pointer hover:bg-opacity-25 pb-1 pt-2"
            >
              <div className="flex justify-between items-center px-6">
                <div className="text-3xl text-white font-bold">8GB</div>
                <div className="text-white text-md flex items-center space-x-4">
                  <span className="text-purple-400 font-semibold">$16/mo</span>
                  <button
                    onClick={() => handleOrderClick(4)}
                    className="bg-purple-600 hover:bg-purple-700 rounded-lg px-4 py-2 text-white font-semibold transition duration-200"
                  >
                    Order
                  </button>
                </div>
              </div>
              <div className="text-gray-300 font-medium mx-6 mb-4">
                For the largest communities
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {selectedPlan !== null && renderPlanDetails(selectedPlan)}
        </Modal>
      )}
    </div>
  );
};

export default Prices;
