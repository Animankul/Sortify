'use client';

import { useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';

interface Deadline {
  id: number;
  title: string;
  source: string;
  sourceType: 'AI' | 'User';
  fileName: string;
  fileLink: string;
  dueDate: string; // format: YYYY-MM-DD
}

const sampleDeadlines: Deadline[] = [
  {
    id: 1,
    title: 'Electricity Bill Payment',
    source: 'Extracted from: Electricity_Bill_July.pdf',
    sourceType: 'AI',
    fileName: 'Electricity_Bill_July.pdf',
    fileLink: '#',
    dueDate: '2024-07-31',
  },
  {
    id: 2,
    title: 'Project Proposal Submission',
    source: 'Linked to: Project_Proposal_Draft.docx',
    sourceType: 'User',
    fileName: 'Project_Proposal_Draft.docx',
    fileLink: '#',
    dueDate: '2024-08-15',
  },
  {
    id: 3,
    title: 'Internet Bill Payment',
    source: 'Extracted from: Internet_Bill_June.pdf',
    sourceType: 'AI',
    fileName: 'Internet_Bill_June.pdf',
    fileLink: '#',
    dueDate: '2024-07-28',
  },
];

const calculateDaysLeft = (dueDate: string): number => {
  const today = new Date();
  const due = new Date(dueDate);
  const timeDiff = due.getTime() - today.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

export default function DeadlinesPage() {
  const [deadlines, setDeadlines] = useState(sampleDeadlines);
  const [file, setFile] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const addDeadline = () => {
    if (!file || !description || !date) return;

    const newDeadline: Deadline = {
      id: deadlines.length + 1,
      title: description,
      source: `Linked to: ${file}`,
      sourceType: 'User',
      fileName: file,
      fileLink: '#',
      dueDate: date,
    };

    setDeadlines([...deadlines, newDeadline]);
    setFile('');
    setDescription('');
    setDate('');
  };

  return (
    <div className="p-6 bg-white min-h-screen text-black">
      {/* Upcoming Deadlines */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span>⏳</span> Upcoming Deadlines
        </h2>

        <div className="space-y-4">
          {deadlines.map((dl) => {
            const daysLeft = calculateDaysLeft(dl.dueDate);
            return (
              <div
                key={dl.id}
                className="p-4 rounded-md bg-blue-50 flex justify-between items-center border"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-blue-700">
                    {dl.sourceType === 'AI' ? <FaLightbulb /> : <IoDocumentTextOutline />}
                  </div>
                  <div className="text-black">
                    <h3 className="font-semibold">{dl.title}</h3>
                    <p className="text-sm">
                      {dl.source.includes(':') ? (
                        <>
                          {dl.source.split(':')[0]}:{' '}
                          <a
                            href={dl.fileLink}
                            className="text-blue-600 underline"
                          >
                            {dl.fileName}
                          </a>
                        </>
                      ) : (
                        dl.source
                      )}
                    </p>
                    <p className="text-xs">Set by {dl.sourceType}</p>
                  </div>
                </div>
                <div className="text-right text-black">
                  <p className="text-red-600 font-semibold">
                    Due: {dl.dueDate}
                  </p>
                  <p className="text-xs text-red-500">{daysLeft} days left</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add New Deadline */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Set New Deadline</h2>
        <div className="space-y-4">
          <select
            className="w-full p-2 border rounded-md text-black"
            value={file}
            onChange={(e) => setFile(e.target.value)}
          >
            <option value="">Select File</option>
            <option value="New_Doc1.pdf">New_Doc1.pdf</option>
            <option value="New_Proposal.docx">New_Proposal.docx</option>
            <option value="Invoice_August.pdf">Invoice_August.pdf</option>
          </select>

          <input
            type="text"
            className="w-full p-2 border rounded-md text-black"
            placeholder="Deadline Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="date"
            className="w-full p-2 border rounded-md text-black"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button
            onClick={addDeadline}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
          >
            ➕ Add Deadline
          </button>
        </div>
      </div>
    </div>
  );
}
