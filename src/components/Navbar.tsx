import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut, Menu } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export const Navbar = () => {
  const { user, logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl">
              Lab KCKS
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/#rules" className="hover:text-indigo-200">
                Aturan & Alur
              </Link>
              {user && (
                <div className="flex items-center space-x-4">
                  <span>Welcome, {user.username}</span>
                  <button
                    onClick={logout}
                    className="flex items-center hover:text-indigo-200"
                  >
                    <LogOut className="w-4 h-4 mr-1" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-indigo-200 hover:bg-indigo-700"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/#rules"
              className="block px-3 py-2 rounded-md hover:bg-indigo-700"
            >
              Aturan & Alur
            </Link>
            {user && (
              <>
                <div className="px-3 py-2">Welcome, {user.username}</div>
                <button
                  onClick={logout}
                  className="flex items-center w-full px-3 py-2 rounded-md hover:bg-indigo-700"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};