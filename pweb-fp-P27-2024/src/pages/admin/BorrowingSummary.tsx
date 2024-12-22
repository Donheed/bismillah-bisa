import React, { useState, useRef } from 'react';
import { Download } from 'lucide-react';
import { AdminNav } from '../../components/AdminNav';
import { useBorrowingsStore } from '../../store/borrowingsStore';
import { BorrowingFilters } from '../../components/borrowing/BorrowingFilters';
import { BorrowingTable } from '../../components/borrowing/BorrowingTable';
import { usePDF } from 'react-to-pdf';

export const BorrowingSummary = () => {
  const { borrowings } = useBorrowingsStore();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedBorrower, setSelectedBorrower] = useState<string>('');
  const tableRef = useRef<HTMLDivElement>(null);
  const { toPDF } = usePDF();

  const filteredBorrowings = borrowings.filter((borrowing) => {
    const matchesDateRange =
      (!startDate ||
        new Date(borrowing.borrow_date) >= startDate) &&
      (!endDate ||
        new Date(borrowing.borrow_date) <= endDate);
    
    const matchesBorrower =
      !selectedBorrower ||
      borrowing.borrower_name.toLowerCase().includes(selectedBorrower.toLowerCase());

    return matchesDateRange && matchesBorrower;
  });

  const handleDownloadPDF = async () => {
    if (tableRef.current) {
      try {
        await toPDF(tableRef.current, {
          filename: 'borrowing-summary.pdf',
          page: { margin: 20 }
        });
      } catch (error) {
        console.error('Error generating PDF:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Data Peminjaman</h1>
          <button
            onClick={handleDownloadPDF}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </button>
        </div>

        <BorrowingFilters
          startDate={startDate}
          endDate={endDate}
          selectedBorrower={selectedBorrower}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          onBorrowerChange={setSelectedBorrower}
        />

        <div ref={tableRef}>
          <BorrowingTable data={filteredBorrowings} />
        </div>
      </div>
    </div>
  );
};