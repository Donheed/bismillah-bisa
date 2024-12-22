import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Lab KCKS</h3>
            <p className="text-gray-400">
              Sistem Manajemen Peminjaman Barang untuk memudahkan tracking peminjaman
              peralatan laboratorium.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <p className="text-gray-400">
              Email: lab.kcks@its.ac.id<br />
              Telepon: (021) 123-4567<br />
              Alamat: Tower 2 Lt. 9
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Jam Operasional</h3>
            <p className="text-gray-400">
              Senin - Jumat: 08:00 - 16:00<br />
              Sabtu: 09:00 - 13:00<br />
              Minggu: Tutup
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lab KCKS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};