'use client';

import { useState } from 'react';

interface UploadCardProps {
  file: {
    name: string;
    type: string;
    size: string;
  } | null;
  onClose: () => void;
}

export default function UploadCard({ file, onClose }: UploadCardProps) {
  const [deadlineType, setDeadlineType] = useState<'manual' | 'ai' | null>(null);
  const [manualDateTime, setManualDateTime] = useState('');
  const [showDateModal, setShowDateModal] = useState(false);

  const handleSave = () => {
    if (!file) return;

    if (deadlineType === 'manual' && !manualDateTime) {
      alert('Please set a deadline');
      return;
    }

    alert(
      `File: ${file.name}\nDeadline Type: ${deadlineType}\n${
        deadlineType === 'manual'
          ? 'Date & Time: ' + manualDateTime
          : 'AI will assign deadline'
      }`
    );

    setDeadlineType(null);
    setManualDateTime('');
    onClose();
  };

  if (!file) return null;

  return (
    <>
      {/* Main Overlay */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/20 backdrop-blur-[1px]">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
          <h2 className="text-xl font-semibold text-black mb-4">
            File Details
          </h2>

          <div className="mb-4 text-sm text-black">
            <p>
              <span className="font-medium">Name:</span> {file.name}
            </p>
            <p>
              <span className="font-medium">Type:</span> {file.type}
            </p>
            <p>
              <span className="font-medium">Size:</span> {file.size}
            </p>
          </div>

          {/* Deadline Options */}
          <div className="mb-4">
            <p className="text-sm font-medium text-black mb-2">Set Deadline</p>
            <div className="flex space-x-2">
              <button
                className={`flex-1 text-sm py-2 rounded-lg transition ${
                  deadlineType === 'manual'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-black'
                }`}
                onClick={() => {
                  setDeadlineType('manual');
                  setShowDateModal(true);
                }}
              >
                Manual
              </button>
              <button
                className={`flex-1 text-sm py-2 rounded-lg transition ${
                  deadlineType === 'ai'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-black'
                }`}
                onClick={() => setDeadlineType('ai')}
              >
                AI Based
              </button>
            </div>

            {/* Show chosen manual date */}
            {deadlineType === 'manual' && manualDateTime && (
              <p className="mt-2 text-xs text-black">
                Selected: <span className="font-medium">{manualDateTime}</span>
              </p>
            )}
          </div>

          {/* Buttons */}
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

      {/* Manual Date & Time Modal */}
      {showDateModal && (
        <div className="fixed inset-0 flex items-center justify-center z-[60] bg-black/30 backdrop-blur-[1px]">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
            <h3 className="text-lg font-semibold text-black mb-4">
              Select Deadline
            </h3>
            <input
              type="datetime-local"
              value={manualDateTime}
              onChange={(e) => setManualDateTime(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 mb-4 text-sm text-black"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowDateModal(false)}
                className="px-4 py-2 rounded-lg bg-red-400 hover:bg-gray-300 text-sm text-black"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowDateModal(false)}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-gray-800 text-white text-sm"
              >
                Set
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
