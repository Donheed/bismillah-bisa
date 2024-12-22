import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Package, Users } from 'lucide-react';

export const OperatorNav = () => {
  const location = useLocation();

  const links = [
    {
      to: '/operator/book-equipment',
      icon: <BookOpen className="w-5 h-5" />,
      label: 'Form Peminjaman',
    },
    {
      to: '/operator/all-equipment',
      icon: <Package className="w-5 h-5" />,
      label: 'Data Barang',
    },
    {
      to: '/operator/borrowers',
      icon: <Users className="w-5 h-5" />,
      label: 'Data Peminjam',
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