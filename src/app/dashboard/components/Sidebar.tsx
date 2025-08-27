'use client';

import { useEffect, useRef, useState } from 'react';
import {
  FaBell,
  FaChartLine,
  FaFileUpload,
  FaFolder,
  FaFolderOpen,
  FaFolderPlus,
  FaHome,
  FaPlus,
  FaTrash
} from 'react-icons/fa';
import SidebarItem from './SidebarItem';
import UploadCard from './UploadCard';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNewMenu, setShowNewMenu] = useState(false);

  // File Upload State
  const [selectedFile, setSelectedFile] = useState<{
    name: string;
    type: string;
    size: string;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const folderInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (folderInputRef.current) {
      // Add folder selection attributes manually
      folderInputRef.current.setAttribute('webkitdirectory', '');
      folderInputRef.current.setAttribute('directory', '');
    }
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile({
        name: file.name,
        type: file.type || 'Unknown',
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
      });
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaFolder />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative`}
      >
        <div className="p-6 flex flex-col justify-between h-full text-black relative">
          <div>
            {/* Logo */}
            <div className="flex items-center mb-8">
              <img src="/logo.png" alt="Sortify Logo" className="h-10 w-10 mr-3" />
              <span className="text-xl font-bold">SORTIFY</span>
            </div>

            {/* + New Button */}
            <div className="relative">
              <button
                className="bg-blue-500 text-white w-full py-2 rounded mb-6 flex items-center justify-center"
                onClick={() => setShowNewMenu(!showNewMenu)}
              >
                <FaPlus className="mr-2" /> New
              </button>

              {/* Dropdown Card */}
              {showNewMenu && (
                <div className="absolute z-50 bg-white shadow-lg rounded-lg w-full mt-[-12px] mb-6">
                  <ul className="flex flex-col p-2 text-sm text-gray-800">
                    <li
                      className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => alert('Create New Folder')}
                    >
                      <FaFolderPlus className="mr-2" /> New Folder
                    </li>
                    <li
                      className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <FaFileUpload className="mr-2" /> Upload File
                    </li>
                    <li
                      className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => folderInputRef.current?.click()}
                    >
                      <FaFolderOpen className="mr-2" /> Upload Folder
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Navigation */}
            <nav className="flex flex-col space-y-3">
              <SidebarItem icon={<FaHome />} label="Home" path="/dashboard" />
              <SidebarItem icon={<FaFolder />} label="My files" path="/dashboard/myfiles" />
              <SidebarItem icon={<FaTrash />} label="Trash" path="/dashboard/trash" />
              <SidebarItem icon={<FaBell />} label="Deadlines" path="/dashboard/Deadlines" />
              <SidebarItem icon={<FaChartLine />} label="AI Analytics" path="/dashboard/AiAnalytics" />
            </nav>
          </div>

          {/* Storage Info */}
          <div className="mt-8">
            <p className="text-sm">8.26 Gb of 15 Gb used</p>
            <div className="bg-gray-200 h-2 w-full rounded-full mt-1 mb-2">
              <div className="bg-blue-500 h-full w-[55%] rounded-full" />
            </div>
            <button className="w-full text-sm border rounded py-2 bg-gray-100 hover:bg-gray-200">
              Get More Storage
            </button>
          </div>
        </div>
      </aside>

      {/* Hidden Inputs for File/Folder Upload */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileUpload}
      />
      <input
        type="file"
        ref={folderInputRef}
        className="hidden"
        multiple
        onChange={handleFileUpload}
      />

      {/* Upload Card Modal */}
      {selectedFile && (
        <UploadCard file={selectedFile} onClose={() => setSelectedFile(null)} />
      )}
    </>
  );
}
