
import React from 'react';

type DimensionProps = {
  title: string;
  leftSide: string;
  rightSide: string;
  description: string;
};

const MbtiDimension: React.FC<DimensionProps> = ({ title, leftSide, rightSide, description }) => {
  return (
    <div className="mbti-card mb-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{leftSide}</span>
        <span className="font-medium">{rightSide}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div className="bg-gradient-to-r from-mbti-deep-purple to-mbti-light-purple h-2.5 rounded-full w-1/2"></div>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const MbtiExplanation: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Apa itu MBTI?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Myers-Briggs Type Indicator (MBTI) adalah tes kepribadian yang mengkategorikan seseorang ke dalam 16 tipe kepribadian berbeda, 
            berdasarkan 4 dimensi utama. Tes ini membantu kamu memahami bagaimana kamu berinteraksi dengan dunia, mengambil informasi, 
            membuat keputusan, dan menjalani hidup sehari-hari.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <MbtiDimension
            title="Cara Mendapatkan Energi"
            leftSide="E (Ekstrovert)"
            rightSide="I (Introvert)"
            description="Ekstrovert mendapatkan energi dari interaksi dengan orang lain, sementara Introvert mengisi ulang energi mereka dengan waktu sendiri."
          />

          <MbtiDimension
            title="Cara Memproses Informasi"
            leftSide="S (Sensing)"
            rightSide="N (Intuition)"
            description="Sensing fokus pada fakta dan detail konkret, sementara Intuition lebih memperhatikan pola dan kemungkinan di masa depan."
          />

          <MbtiDimension
            title="Cara Membuat Keputusan"
            leftSide="T (Thinking)"
            rightSide="F (Feeling)"
            description="Thinking membuat keputusan berdasarkan logika dan analisis obyektif, sementara Feeling mempertimbangkan nilai-nilai pribadi dan dampak pada orang lain."
          />

          <MbtiDimension
            title="Cara Menghadapi Dunia Luar"
            leftSide="J (Judging)"
            rightSide="P (Perceiving)"
            description="Judging lebih suka terstruktur dan terencana, sementara Perceiving lebih fleksibel dan spontan."
          />

          <div className="text-center mt-8">
            <p className="text-lg mb-6">
              Kombinasi dari 4 dimensi ini menghasilkan 16 tipe kepribadian yang unik, masing-masing dengan karakteristik, kekuatan, dan tantangannya sendiri.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MbtiExplanation;
