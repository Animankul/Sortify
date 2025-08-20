// src/app/dashboard/components/SidebarItem.tsx
'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  path: string;
  active?: boolean;
}

export default function SidebarItem({ icon, label, path, active = false }: SidebarItemProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(path)}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
        active ? 'bg-blue-100 text-blue-700 font-semibold' : 'hover:bg-gray-100 text-black'
      }`}
    >
      <div className="w-5 h-5">{icon}</div>
      <span className="text-sm">{label}</span>
    </div>
  );
}
