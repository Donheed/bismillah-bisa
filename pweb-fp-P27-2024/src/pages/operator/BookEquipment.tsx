import React, { useState } from 'react';
import { OperatorNav } from '../../components/OperatorNav';
import { useItemsStore } from '../../store/itemsStore';
import { useBorrowingsStore } from '../../store/borrowingsStore';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export const BookEquipment = () => {
  const { items } = useItemsStore();
  const { addBorrowing } = useBorrowingsStore();
  const [formData, setFormData] = useState({
    item_name: '',
    amount: 1,
    return_date: new Date(),
    borrower_name: '',
    officer_name: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addBorrowing({
      ...formData,
      borrow_date: new Date(),
      status: 'BORROWED',
    });

    // Reset form
    setFormData({
      item_name: '',
      amount: 1,
      return_date: new Date(),
      borrower_name: '',
      officer_name: '',
    });

    alert('Peminjaman berhasil dicatat!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <OperatorNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Form Peminjaman</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama Barang
              </label>
              <select
                value={formData.item_name}
                onChange={(e) => setFormData({ ...formData, item_name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              >
                <option value="">Pilih Barang</option>
                {items.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name} (Tersedia: {item.amount})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Jumlah Pinjam
              </label>
              <input
                type="number"
                min="1"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tanggal Pengembalian
              </label>
              <DatePicker
                selected={formData.return_date}
                onChange={(date) => setFormData({ ...formData, return_date: date || new Date() })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                minDate={new Date()}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama Peminjam
              </label>
              <input
                type="text"
                value={formData.borrower_name}
                onChange={(e) => setFormData({ ...formData, borrower_name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama Petugas
              </label>
              <input
                type="text"
                value={formData.officer_name}
                onChange={(e) => setFormData({ ...formData, officer_name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Peminjaman
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};