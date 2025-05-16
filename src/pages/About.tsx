
import React from 'react';
import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">Tentang Ruang Edukasi</h1>
            
            <div className="mbti-card mb-10">
              <h2 className="text-2xl font-semibold mb-4">Visi Kami</h2>
              <p className="text-gray-700 mb-4">
                Menjadi platform edukasi terdepan di Indonesia yang membantu masyarakat memahami diri sendiri 
                dan orang lain melalui pendekatan psikologi yang akurat dan mudah dipahami.
              </p>
            </div>
            
            <div className="mbti-card">
              <h2 className="text-2xl font-semibold mb-4">Misi Kami</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-mbti-deep-purple mr-2">•</span>
                  <span>Menyediakan tes kepribadian MBTI yang akurat dan mudah diakses oleh siapa saja</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mbti-deep-purple mr-2">•</span>
                  <span>Menghadirkan konten edukasi tentang kepribadian dalam bahasa yang mudah dipahami</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mbti-deep-purple mr-2">•</span>
                  <span>Membantu pengguna menemukan potensi terbaik mereka sesuai dengan tipe kepribadian</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mbti-deep-purple mr-2">•</span>
                  <span>Menciptakan komunitas yang saling memahami dan menghargai perbedaan kepribadian</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
