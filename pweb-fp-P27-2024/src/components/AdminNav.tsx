import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Package, Users, FileText } from 'lucide-react';

export const AdminNav = () => {
  const location = useLocation();

  const links = [
    { to: '/admin', icon: <Package className="w-5 h-5" />, label: 'Data Barang' },
    {
      to: '/admin/all-operator',
      icon: <Users className="w-5 h-5" />,
      label: 'Data Petugas',
    },
    {
      to: '/admin/summary',
      icon: <FileText className="w-5 h-5" />,
      label: 'Data Peminjaman',
    },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center px-3 py-4 text-sm font-medium ${
                location.pathname === link.to
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {link.icon}
              <span className="ml-2">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};