
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-8 w-auto sm:h-10"
                src="https://www.ruangedukasi.web.id/wp-content/uploads/2020/02/logo-header.png"
                alt="Ruang Edukasi Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link text-gray-800 font-medium">
              Beranda
            </Link>
            <Link to="/artikel" className="nav-link text-gray-800 font-medium">
              Artikel Kepribadian
            </Link>
            <Link to="/test" className="nav-link text-gray-800 font-medium">
              Mulai Tes
            </Link>
            <Link to="/about" className="nav-link text-gray-800 font-medium">
              Tentang Kami
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-mbti-deep-purple hover:bg-mbti-purple hover:bg-opacity-20"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-mbti-purple hover:bg-opacity-20"
              onClick={toggleMenu}
            >
              Beranda
            </Link>
            <Link
              to="/artikel"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-mbti-purple hover:bg-opacity-20"
              onClick={toggleMenu}
            >
              Artikel Kepribadian
            </Link>
            <Link
              to="/test"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-mbti-purple hover:bg-opacity-20"
              onClick={toggleMenu}
            >
              Mulai Tes
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-mbti-purple hover:bg-opacity-20"
              onClick={toggleMenu}
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
