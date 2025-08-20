// 'use client';
// import QuickAccess from './components/QuickAccess';
// import RecentFiles from './components/RecentFiles';
// import Sidebar from './components/Sidebar';
// import Topbar from './components/Topbar';

// const DashboardPage = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Topbar />
//         <main className="p-6 overflow-y-auto">
//           <QuickAccess />
//           <RecentFiles />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;
// src/app/dashboard/page.tsx
'use client';

import QuickAccess from './components/QuickAccess';
import RecentFiles from './components/RecentFiles';

export default function DashboardPage() {
  return (
    <div>
      <QuickAccess />
      <RecentFiles />
    </div>
  );
}
