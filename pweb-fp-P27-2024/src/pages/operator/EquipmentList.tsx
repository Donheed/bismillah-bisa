import React from 'react';
import { OperatorNav } from '../../components/OperatorNav';
import { DataTable } from '../../components/Table';
import { useItemsStore } from '../../store/itemsStore';

export const EquipmentList = () => {
  const { items } = useItemsStore();

  const columns = [
    {
      accessorKey: 'name',
      header: 'Nama Barang',
    },
    {
      accessorKey: 'amount',
      header: 'Jumlah',
    },
    {
      accessorKey: 'condition',
      header: 'Kondisi',
    },
    {
      accessorKey: 'created_at',
      header: 'Tanggal Registrasi',
      cell: ({ row }) => new Date(row.original.created_at).toLocaleDateString(),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <OperatorNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Data Barang</h1>
        <DataTable columns={columns} data={items} />
      </div>
    </div>
  );
};