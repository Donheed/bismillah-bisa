import React from 'react';
import { OperatorNav } from '../../components/OperatorNav';
import { DataTable } from '../../components/Table';
import { useBorrowingsStore } from '../../store/borrowingsStore';

export const BorrowersList = () => {
  const { borrowings } = useBorrowingsStore();

  const columns = [
    {
      accessorKey: 'item_name',
      header: 'Nama Barang',
    },
    {
      accessorKey: 'amount',
      header: 'Jumlah Pinjam',
    },
    {
      accessorKey: 'borrow_date',
      header: 'Tgl. Pinjam',
      cell: ({ row }) => new Date(row.original.borrow_date).toLocaleDateString(),
    },
    {
      accessorKey: 'return_date',
      header: 'Tgl. Kembali',
      cell: ({ row }) => new Date(row.original.return_date).toLocaleDateString(),
    },
    {
      accessorKey: 'borrower_name',
      header: 'Peminjam',
    },
    {
      accessorKey: 'officer_name',
      header: 'Petugas',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            row.original.status === 'BORROWED'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-green-100 text-green-800'
          }`}
        >
          {row.original.status}
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <OperatorNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Data Peminjam</h1>
        <DataTable columns={columns} data={borrowings} />
      </div>
    </div>
  );
};