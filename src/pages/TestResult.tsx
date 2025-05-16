
import React from 'react';
import Layout from '../components/Layout';
import { useParams, Link } from 'react-router-dom';
import { mbtiResults } from '../data/testQuestions';

const TestResult: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  
  // Default to ISFJ if type is invalid or not found
  const result = type && mbtiResults[type] ? mbtiResults[type] : mbtiResults.ISFJ;
  
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-white via-mbti-blue to-mbti-purple bg-opacity-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-mbti-deep-purple text-white font-semibold mb-4">
                Tipe Kepribadianmu
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold mb-2">{result.type}</h1>
              <h2 className="text-2xl sm:text-3xl text-gray-700">{result.title}</h2>
            </div>
            
            <div className="mbti-card mb-8">
              <h3 className="text-xl font-semibold mb-4">Deskripsi</h3>
              <p className="text-gray-700">{result.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="mbti-card">
                <h3 className="text-xl font-semibold mb-4">Kekuatan</h3>
                <ul className="space-y-2">
                  {result.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-mbti-deep-purple mr-2">•</span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mbti-card">
                <h3 className="text-xl font-semibold mb-4">Tantangan</h3>
                <ul className="space-y-2">
                  {result.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-mbti-deep-purple mr-2">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="mbti-card">
                <h3 className="text-xl font-semibold mb-4">Karier yang Cocok</h3>
                <ul className="space-y-2">
                  {result.careers.map((career, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-mbti-deep-purple mr-2">•</span>
                      <span>{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mbti-card">
                <h3 className="text-xl font-semibold mb-4">Kecocokan Tipe</h3>
                <p className="text-gray-700">
                  Tipe kepribadian yang paling cocok denganmu: <strong>{result.compatibility}</strong>
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Link to="/test" className="mbti-button">
                Ulangi Tes
              </Link>
              <button className="mbti-button-secondary">
                Bagikan Hasil
              </button>
              <button className="mbti-button-secondary">
                Unduh Hasil (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TestResult;
