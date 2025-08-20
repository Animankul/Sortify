'use client';

import {
  FaEllipsisV,
  FaFileArchive,
  FaFilePdf,
  FaFileWord,
} from 'react-icons/fa';

const files = [
  { name: 'Resume.pdf', date: 'Dec 12, 2025', size: '600 KB', type: 'pdf' },
  { name: 'imp.docx', date: 'Dec 12, 2024', size: '1 MB', type: 'doc' },
  { name: 'game.zip', date: 'Dec 12, 2024', size: '50 MB', type: 'zip' },
  { name: 'imp.docx', date: 'Dec 12, 2024', size: '1 MB', type: 'doc' },
  { name: 'imp.docx', date: 'Dec 12, 2024', size: '1 MB', type: 'doc' },
  { name: 'game.zip', date: 'Dec 12, 2024', size: '50 MB', type: 'zip' },
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

export default function MyFiles() {
  return (
    <div className="p-6 text-black">
      <h2 className="text-xl font-bold mb-4">My files</h2>

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <select className="bg-white border border-gray-300 rounded px-3 py-1 text-sm shadow-sm">
          <option>Type</option>
        </select>
        <select className="bg-white border border-gray-300 rounded px-3 py-1 text-sm shadow-sm">
          <option>Modified</option>
        </select>
      </div>

      {/* File Table */}
      <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b text-gray-500">
              <th className="p-2">Name</th>
              <th className="p-2">Modified</th>
              <th className="p-2">Size</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr
                key={index}
                className="transition hover:shadow-md hover:rounded-xl"
              >
                <td className="p-3 flex items-center gap-2">
                  {getFileIcon(file.type)}
                  <span>{file.name}</span>
                </td>
                <td className="p-3">{file.date}</td>
                <td className="p-3">{file.size}</td>
                <td className="p-3 text-right">
                  <FaEllipsisV className="text-gray-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
