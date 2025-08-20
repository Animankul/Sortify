// 'use client';

// import { useRouter } from 'next/navigation';
// import { useEffect, useRef, useState } from 'react';
// import { FaCog, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';

// export default function Topbar() {
//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleLogout = () => {
//     // You can add logout logic here (e.g., clearing auth, API calls)
//     router.push('/Landing'); // Adjust this path to your actual Landing route
//   };

//   return (
//     <header className="bg-white px-6 py-4 flex justify-between items-center shadow-sm relative">
//       {/* Search Bar */}
//       <div className="flex items-center w-[50%] bg-gray-100 rounded-full px-4 py-2 shadow-sm border border-gray-300">
//         <svg
//           className="w-4 h-4 text-gray-400 mr-2"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
//         </svg>
//         <input
//           type="text"
//           placeholder="Search files with ai"
//           className="bg-transparent outline-none w-full text-sm text-gray-700"
//         />
//       </div>

//       {/* Profile Section */}
//       <div className="relative flex items-center space-x-3" ref={dropdownRef}>
//         <span className="text-sm font-semibold text-black">Hello, Adam</span>
//         <img
//           src="/avatar.png"
//           alt="User Avatar"
//           className="h-9 w-9 rounded-full object-cover cursor-pointer ring-1 ring-gray-200 hover:ring-blue-400 transition"
//           onClick={() => setOpen(!open)}
//         />

//         {/* Dropdown Menu */}
//         {open && (
//           <div className="absolute right-0 top-12 w-48 bg-white shadow-xl rounded-md border border-gray-200 z-50">
//             <ul className="py-2">
//               <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 gap-2 cursor-pointer">
//                 <FaCog className="text-gray-500" /> Settings
//               </li>
//               <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 gap-2 cursor-pointer">
//                 <FaQuestionCircle className="text-gray-500" /> Help
//               </li>
//               <li
//                 onClick={handleLogout}
//                 className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 gap-2 cursor-pointer"
//               >
//                 <FaSignOutAlt className="text-red-500" /> Logout
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }
// src/app/dashboard/components/Topbar.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FaCog, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    router.push('/Landing');
  };

  return (
    <header className="bg-white px-6 py-4 flex justify-between items-center shadow-sm relative">
      <div className="flex items-center w-[50%] bg-gray-100 rounded-full px-4 py-2 shadow-sm border border-gray-300">
        <svg
          className="w-4 h-4 text-gray-400 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
        </svg>
        <input
          type="text"
          placeholder="Search files with ai"
          className="bg-transparent outline-none w-full text-sm text-gray-700"
        />
      </div>

      <div className="relative flex items-center space-x-3" ref={dropdownRef}>
        <span className="text-sm font-semibold text-black">Hello, Adam</span>
        <img
          src="/avatar.png"
          alt="User Avatar"
          className="h-9 w-9 rounded-full object-cover cursor-pointer ring-1 ring-gray-200 hover:ring-blue-400 transition"
          onClick={() => setOpen(!open)}
        />

        {open && (
          <div className="absolute right-0 top-12 w-48 bg-white shadow-xl rounded-md border border-gray-200 z-50">
            <ul className="py-2">
              <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 gap-2 cursor-pointer">
                <FaCog className="text-gray-500" /> Settings
              </li>
              <li className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 gap-2 cursor-pointer">
                <FaQuestionCircle className="text-gray-500" /> Help
              </li>
              <li
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 gap-2 cursor-pointer"
              >
                <FaSignOutAlt className="text-red-500" /> Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
