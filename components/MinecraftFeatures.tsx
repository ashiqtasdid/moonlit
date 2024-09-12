import React from 'react';

const MinecraftFeatures = () => {
  return (
    <div className='grid grid-cols-3 gap-8 mt-10 max-w-[980px] mx-auto'>
      <div className='ring-1 rounded-lg ring-slate-700 ring-opacity-30 bg-gradient-to-b from-blue-950 to-blue-900 p-6'>
        <h2 className='text-white font-bold text-xl mb-2'>Modpack installer</h2>
        <p className='text-slate-400'>
          Install and update packs from CurseForge, Modrinth, FTB, and Technic with ease and in a matter of seconds, or upload your own mods through our control panel.
        </p>
      </div>
      <div className='ring-1 rounded-lg ring-slate-700 ring-opacity-30 bg-gradient-to-b from-blue-950 to-blue-900 p-6'>
        <h2 className='text-white font-bold text-xl mb-2'>Off-site backups</h2>
        <p className='text-slate-400'>
          Create full server backups in just a few clicks, and restore or download to your computer at any time — stored securely off-site to ensure redundancy.
        </p>
      </div>
      <div className='ring-1 rounded-lg ring-slate-700 ring-opacity-30 bg-gradient-to-b from-blue-950 to-blue-900 p-6'>
        <h2 className='text-white font-bold text-xl mb-2'>One-click features</h2>
        <p className='text-slate-400'>
          Free features available with all plans include MySQL databases, additional ports, and no slot limit, making our servers perfect for large-scale communities.
        </p>
      </div>
    </div>
  );
};

export default MinecraftFeatures;
