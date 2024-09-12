"use client";

import React, { useState } from "react";

const ServerCart: React.FC = () => {
  const [memory, setMemory] = useState(8);
  const [cores, setCores] = useState(0); // Changed to 0 for no additional threads by default
  const [dedicatedIPs, setDedicatedIPs] = useState(0); // New state for dedicated IP slider
  const [edition, setEdition] = useState("Minecraft Java Edition"); // New state for edition selection

  const memoryPrice = memory * 2;
  const corePrice = cores * 5; // Updated to $5 per additional thread
  const ipPrice = dedicatedIPs * 2; // Let's say each dedicated IP costs $2
  const totalPrice = memoryPrice + corePrice + ipPrice;

  const memoryMarks = [4, 8, 12, 16, 20, 24, 28, 32];
  const coresMarks = [0, 1, 2, 3]; // Changed to 0, 1, 2, 3 for additional threads
  const ipMarks = [0, 1, 2, 3]; // Options for dedicated IPs

  const handleMemoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMemory(parseInt(event.target.value));
  };

  const handleCoresChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCores(parseInt(event.target.value));
  };

  const handleIPsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDedicatedIPs(parseInt(event.target.value));
  };

  const handleEditionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEdition(event.target.value);
  };

  return (
    <div className="">
      <div className="h-auto bg-gradient-to-b from-blue-950 to-blue-900 ring-slate-700 ring-opacity-30 ring-1 text-white p-8 rounded-lg max-w-lg mx-auto shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          {memory}GB Premium {edition} Server | {cores === 0 ? "No Additional Threads" : `${cores} Additional Threads`}
        </h2>
        <hr className="border-gray-600 my-6" />

        {/* Edition Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Minecraft Edition</label>
          <select
            value={edition}
            onChange={handleEditionChange}
            className="w-full p-2 bg-blue-800 rounded-lg text-white"
          >
            <option value="Minecraft Java Edition">Minecraft Java Edition</option>
            <option value="Minecraft Bedrock Edition">Minecraft Bedrock Edition</option>
          </select>
        </div>
        <hr className="border-gray-600 my-6" />

        {/* Memory Slider */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Memory</label>
          <input
            type="range"
            min={4}
            max={32}
            step={4}
            value={memory}
            onChange={handleMemoryChange}
            className="w-full appearance-none h-2 rounded-lg"
            style={{
              background: `linear-gradient(to right, #7851A9 ${
                ((memory - 4) / 28) * 100
              }%, #4b5563 0%)`,
              WebkitAppearance: "none",
            }}
          />
          <datalist id="memory-marks" className="flex justify-between text-xs mt-2">
            {memoryMarks.map((mark) => (
              <option key={mark} value={mark} label={`${mark}GB`} />
            ))}
          </datalist>
          <div className="mt-2 text-purple-500">{memory}GB Premium Server</div>
        </div>
        <hr className="border-gray-600 my-6" />

        {/* Cores (Additional Threads) Slider */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Additional Threads</label>
          <input
            type="range"
            min={0}
            max={3}
            step={1}
            value={cores}
            onChange={handleCoresChange}
            className="w-full appearance-none h-2 rounded-lg"
            style={{
              background: `linear-gradient(to right, #7851A9 ${
                (cores / 3) * 100
              }%, #4b5563 0%)`,
              WebkitAppearance: "none",
            }}
          />
          <datalist id="cores-marks" className="flex justify-between text-xs mt-2">
            {coresMarks.map((mark) => (
              <option key={mark} value={mark} label={`${mark}`} />
            ))}
          </datalist>
          <div className="mt-2 text-purple-500">
            {cores === 0 ? "No Additional Threads" : `${cores} Additional Threads`}
          </div>
        </div>
        <hr className="border-gray-600 my-6" />

        {/* Dedicated IP Slider */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Dedicated IP</label>
          <input
            type="range"
            min={0}
            max={3}
            step={1}
            value={dedicatedIPs}
            onChange={handleIPsChange}
            className="w-full appearance-none h-2 rounded-lg"
            style={{
              background: `linear-gradient(to right, #7851A9 ${
                (dedicatedIPs / 3) * 100
              }%, #4b5563 0%)`,
              WebkitAppearance: "none",
            }}
          />
          <datalist id="ip-marks" className="flex justify-between text-xs mt-2">
            {ipMarks.map((mark) => (
              <option key={mark} value={mark} label={`${mark}`} />
            ))}
          </datalist>
          <div className="mt-2 text-purple-500">
            {dedicatedIPs === 0 ? "No Dedicated IPs" : `${dedicatedIPs} Dedicated IP${dedicatedIPs > 1 ? "s" : ""}`}
          </div>
        </div>
        <hr className="border-gray-600 my-6" />

        {/* Total Price */}
        <div className="flex justify-between items-center mt-8">
          <div className="text-xl font-semibold">${totalPrice.toFixed(2)}/month</div>
          <button className="bg-gray-950 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerCart;
