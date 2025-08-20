// src/app/dashboard/layout.tsx
'use client';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-4 overflow-auto bg-gray-100 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
