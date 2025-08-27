
'use client';

import { useState } from 'react';

interface FolderCardProps {
  onClose: () => void;
}

export default function FolderCard({ onClose }: FolderCardProps) {
  const [folderName, setFolderName] = useState('');

  const handleSave = () => {
    if (!folderName.trim()) {
      alert('Please enter a folder name');
      return;
    }
    alert(Folder Created: ${folderName});
    setFolderName('');
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/20 backdrop-blur-[1px]">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
        <h2 className="text-xl font-semibold text-black mb-4">Create Folder</h2>

        <input
          type="text"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          placeholder="Enter folder name"
          className="w-full border rounded-lg px-3 py-2 mb-4 text-sm text-black"
        />

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm text-black"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-black hover:bg-gray-800 text-white text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}