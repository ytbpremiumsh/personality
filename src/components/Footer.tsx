
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img
              className="h-10 mb-4"
              src="https://www.ruangedukasi.web.id/wp-content/uploads/2020/02/logo-header.png"
              alt="Ruang Edukasi Logo"
            />
            <p className="text-gray-600 mb-4">
              Platform edukasi untuk membantu kamu memahami kepribadian melalui tes MBTI yang akurat dan mudah dipahami.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/ruangeduka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-mbti-deep-purple transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://youtube.com/ruangedukasi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-mbti-deep-purple transition-colors"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="mailto:info@ruangedukasi.com"
                className="text-gray-500 hover:text-mbti-deep-purple transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Tautan</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://quiz.ruangedukasi.com/" className="text-gray-600 hover:text-mbti-deep-purple transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="https://quiz.ruangedukasi.com/artikel" className="text-gray-600 hover:text-mbti-deep-purple transition-colors">
                  Artikel Kepribadian
                </a>
              </li>
              <li>
                <Link to="/test" className="text-gray-600 hover:text-mbti-deep-purple transition-colors">
                  Mulai Tes
                </Link>
              </li>
              <li>
                <a href="https://quiz.ruangedukasi.com/tentang" className="text-gray-600 hover:text-mbti-deep-purple transition-colors">
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Informasi</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://quiz.ruangedukasi.com/tentang" className="text-gray-600 hover:text-mbti-deep-purple transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-mbti-deep-purple transition-colors">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-mbti-deep-purple transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()} Ruang Edukasi. Semua Hak Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
