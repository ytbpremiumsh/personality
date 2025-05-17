
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-mbti-blue via-white to-mbti-purple py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Temukan Kepribadianmu Lewat Tes MBTI
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-700">
              Ikuti tes kepribadian MBTI yang simpel, akurat, dan penuh warna. Cari tahu siapa kamu sebenarnya!
            </p>
            <Link 
              to="/test" 
              className="mbti-button inline-block"
            >
              Mulai Tes Sekarang
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://storage.googleapis.com/a1aa/image/f8274d10-452c-4a18-9a86-89edc75f002d.jpg" 
              alt="MBTI Test Illustration" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
