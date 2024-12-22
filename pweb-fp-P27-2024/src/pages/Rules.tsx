import React from 'react';
import { ClipboardList, Clock, UserCheck, AlertCircle } from 'lucide-react';

export const Rules = () => {
  const rules = [
    {
      icon: <ClipboardList className="w-12 h-12 text-indigo-600" />,
      title: "Pengajuan Peminjaman",
      description: "Mahasiswa harus mengajukan peminjaman melalui petugas laboratorium dengan membawa kartu identitas yang valid."
    },
    {
      icon: <Clock className="w-12 h-12 text-indigo-600" />,
      title: "Durasi Peminjaman",
      description: "Peminjaman maksimal 7 hari kerja. Perpanjangan harus diajukan sebelum batas waktu pengembalian."
    },
    {
      icon: <UserCheck className="w-12 h-12 text-indigo-600" />,
      title: "Verifikasi Petugas",
      description: "Setiap peminjaman harus diverifikasi dan dicatat oleh petugas laboratorium yang bertugas."
    },
    {
      icon: <AlertCircle className="w-12 h-12 text-indigo-600" />,
      title: "Tanggung Jawab",
      description: "Peminjam bertanggung jawab penuh atas kondisi barang dan harus mengganti jika terjadi kerusakan."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Pengajuan",
      description: "Mahasiswa mengajukan peminjaman kepada petugas dengan KTM"
    },
    {
      number: 2,
      title: "Verifikasi",
      description: "Petugas memverifikasi ketersediaan barang dan identitas peminjam"
    },
    {
      number: 3,
      title: "Pencatatan",
      description: "Petugas mencatat detail peminjaman dalam sistem"
    },
    {
      number: 4,
      title: "Pengembalian",
      description: "Peminjam mengembalikan barang sesuai batas waktu yang ditentukan"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Aturan & Alur Peminjaman
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Panduan lengkap untuk meminjam peralatan di Lab KCKS
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Aturan Peminjaman</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  {rule.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {rule.title}
                </h4>
                <p className="text-gray-600">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Alur Peminjaman</h3>
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white px-4 flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <div className="mt-4 text-center">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600 max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};