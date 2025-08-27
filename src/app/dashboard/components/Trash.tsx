
'use client';

import {
  FaFileArchive,
  FaFilePdf,
  FaFileWord,
  FaTrash,
  FaUndo,
} from 'react-icons/fa';

const trashedFiles = [
  { name: 'old_resume.pdf', dateDeleted: 'Jan 5, 2025', size: '500 KB', type: 'pdf' },
  { name: 'draft.docx', dateDeleted: 'Dec 20, 2024', size: '2 MB', type: 'doc' },
  { name: 'backup.zip', dateDeleted: 'Nov 15, 2024', size: '80 MB', type: 'zip' },
];

const getFileIcon = (type: string) => {
  switch (type) {
    case 'pdf':
      return <FaFilePdf className="text-red-500 text-xl" />;
    case 'doc':
      return <FaFileWord className="text-blue-500 text-xl" />;
    case 'zip':
      return <FaFileArchive className="text-yellow-600 text-xl" />;
    default:
      return <FaFileWord className="text-gray-500 text-xl" />;
  }
};

export default function TrashPage() {
  return (
    <div className="p-6 text-black">
      <h2 className="text-xl font-bold mb-4">Trash</h2>

      {/* Info */}
      <p className="text-sm text-gray-500 mb-4">
        Files in Trash are deleted permanently after 30 days.
      </p>

      {/* File Table */}
      <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b text-gray-500">
              <th className="p-2">Name</th>
              <th className="p-2">Deleted On</th>
              <th className="p-2">Size</th>
              <th className="p-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trashedFiles.map((file, index) => (
              <tr
                key={index}
                className="transition hover:shadow-md hover:rounded-xl"
              >
                <td className="p-3 flex items-center gap-2">
                  {getFileIcon(file.type)}
                  <span>{file.name}</span>
                </td>
                <td className="p-3">{file.dateDeleted}</td>
                <td className="p-3">{file.size}</td>
                <td className="p-3 text-right flex justify-end gap-3">
                  {/* Restore */}
                  <button className="flex items-center gap-1 px-3 py-1 text-xs rounded-lg border border-gray-300 hover:bg-gray-100 transition">
                    <FaUndo className="text-green-600" /> Restore
                  </button>
                  {/* Delete Permanently */}
                  <button className="flex items-center gap-1 px-3 py-1 text-xs rounded-lg border border-red-300 text-red-600 hover:bg-red-50 transition">
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}