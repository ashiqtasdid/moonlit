"use client";

import React, { useState } from "react";

const ServerCart: React.FC = () => {
  const [memory, setMemory] = useState(4);
  const [cores, setCores] = useState(2);

  const memoryPrice = memory * 2;
  const corePrice = Math.floor(cores / 2) * 10.29;
  const totalPrice = memoryPrice + corePrice;

  const memoryMarks = [4, 8, 12, 16, 20, 24, 28, 32];
  const coresMarks = [1, 3, 5];

  const handleMemoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMemory(parseInt(event.target.value));
  };

  const handleCoresChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCores(parseInt(event.target.value));
  };

  return (
    <div className="py-20">
      <div className="bg-gradient-to-b from-blue-950 to-blue-900 ring-slate-700 ring-opacity-30 ring-1 text-white p-8 rounded-lg max-w-lg mx-auto shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          {memory}GB Premium Minecraft Server | {cores} Threads
        </h2>

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
              background: `linear-gradient(to right, #3b82f6 ${((memory - 4) / 28) * 100}%, #4b5563 0%)`,
              WebkitAppearance: "none",
            }}
          />
          <datalist
            id="memory-marks"
            className="flex justify-between text-xs mt-2"
          >
            {memoryMarks.map((mark) => (
              <option key={mark} value={mark} label={`${mark}GB`} />
            ))}
          </datalist>
          <div className="mt-2 text-blue-500">
            {memory}GB Premium Minecraft
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Threads</label>
          <input
            type="range"
            min={1}
            max={5}
            step={2}
            value={cores}
            onChange={handleCoresChange}
            className="w-full appearance-none h-2 rounded-lg"
            style={{
              background: `linear-gradient(to right, #3b82f6 ${((cores - 1) / 4) * 100}%, #4b5563 0%)`,
              WebkitAppearance: "none",
            }}
          />
          <datalist
            id="cores-marks"
            className="flex justify-between text-xs mt-2"
          >
            {coresMarks.map((mark) => (
              <option key={mark} value={mark} label={`${mark}`} />
            ))}
          </datalist>
          <div className="mt-2 text-blue-500">{cores} Additional Threads</div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div className="text-xl font-semibold">
            ${totalPrice.toFixed(2)}/month
          </div>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerCart;
