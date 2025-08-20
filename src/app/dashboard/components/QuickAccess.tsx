'use client';

import { FaFolder } from 'react-icons/fa';

export default function QuickAccess() {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-2 text-black">Quick access</h2>
      <div className="flex gap-4">
        <QuickFolder />
        <QuickFolder />
      </div>
    </section>
  );
}

function QuickFolder() {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center gap-3 text-sm w-52 text-black">
      <FaFolder className="text-yellow-500 text-2xl" />
      <span>My documents</span>
    </div>
  );
}
