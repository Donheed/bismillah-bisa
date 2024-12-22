import React from 'react';
import { DataTable } from '../Table';
import { BorrowItem } from '../../types';

interface BorrowingTableProps {
  data: BorrowItem[];
}

export const BorrowingTable: React.FC<BorrowingTableProps> = ({ data }) => {
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

  return <DataTable columns={columns} data={data} />;
};