import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface BorrowingFiltersProps {
  startDate: Date | null;
  endDate: Date | null;
  selectedBorrower: string;
  onStartDateChange: (date: Date | null) => void;
  onEndDateChange: (date: Date | null) => void;
  onBorrowerChange: (borrower: string) => void;
}

export const BorrowingFilters: React.FC<BorrowingFiltersProps> = ({
  startDate,
  endDate,
  selectedBorrower,
  onStartDateChange,
  onEndDateChange,
  onBorrowerChange,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Start Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={onStartDateChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholderText="Select start date"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            End Date
          </label>
          <DatePicker
            selected={endDate}
            onChange={onEndDateChange}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholderText="Select end date"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search Borrower
          </label>
          <input
            type="text"
            value={selectedBorrower}
            onChange={(e) => onBorrowerChange(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter borrower name"
          />
        </div>
      </div>
    </div>
  );
};