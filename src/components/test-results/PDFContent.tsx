
import React from 'react';
import { MbtiResult } from '@/data/testQuestions';
import { Card, CardContent } from '@/components/ui/card';

interface PDFContentProps {
  result: MbtiResult;
}

const PDFContent: React.FC<PDFContentProps> = ({ result }) => {
  // Calculate percentages based on MBTI type with more accurate values
  const getTraitPercentages = (mbtiType: string) => {
    // More accurate MBTI percentages based on type
    const traits = {
      extrovert: mbtiType.charAt(0) === 'E' ? 75 : 25,
      introvert: mbtiType.charAt(0) === 'E' ? 25 : 75,
      sensing: mbtiType.charAt(1) === 'S' ? 70 : 30,
      intuition: mbtiType.charAt(1) === 'S' ? 30 : 70,
      thinking: mbtiType.charAt(2) === 'T' ? 72 : 28,
      feeling: mbtiType.charAt(2) === 'T' ? 28 : 72,
      judging: mbtiType.charAt(3) === 'J' ? 68 : 32,
      perceiving: mbtiType.charAt(3) === 'J' ? 32 : 68
    };
    
    return traits;
  };
  
  const traits = getTraitPercentages(result.type);
  
  const commonStyles = {
    position: 'absolute' as const,
    left: '-9999px',
    width: '800px', // Standard A4 width ratio
    backgroundColor: 'white',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };
  
  return (
    <div className="hidden">
      {/* Content optimized for A4 PDF and image - same format for both */}
      <div id="result-content-for-pdf" style={{...commonStyles, height: '1130px'}}>
        <div className="bg-mbti-deep-purple text-white p-6 text-center">
          <p className="text-xs text-white/80 mb-2">Mau cek kepribadianmu? Cek di <strong>quiz.ruangedukasi.com</strong></p>
          <span className="inline-block px-4 py-2 rounded-full bg-white text-mbti-deep-purple font-semibold mb-4">
            Tipe Kepribadianmu
          </span>
          <h1 className="text-4xl font-bold mb-2">{result.type}</h1>
          <h2 className="text-2xl">{result.title}</h2>
        </div>
        
        <div className="p-6 bg-white">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="h-1 bg-mbti-deep-purple rounded flex-grow"></div>
              <h3 className="text-lg font-semibold mx-4">Deskripsi</h3>
              <div className="h-1 bg-mbti-deep-purple rounded flex-grow"></div>
            </div>
            <p className="text-gray-700 text-sm">{result.description}</p>
          </div>
          
          {/* Personality Trait Percentages */}
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="h-1 bg-mbti-deep-purple rounded flex-grow"></div>
              <h3 className="text-lg font-semibold mx-4">Persentase Tipe</h3>
              <div className="h-1 bg-mbti-deep-purple rounded flex-grow"></div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium">E: {traits.extrovert}% Extrovert</span>
                <span className="font-medium">I: {traits.introvert}% Introvert</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-mbti-deep-purple" style={{ width: `${traits.extrovert}%` }}></div>
              </div>
              
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium">S: {traits.sensing}% Sensing</span>
                <span className="font-medium">N: {traits.intuition}% Intuition</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-mbti-deep-purple" style={{ width: `${traits.sensing}%` }}></div>
              </div>
              
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium">T: {traits.thinking}% Thinking</span>
                <span className="font-medium">F: {traits.feeling}% Feeling</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-mbti-deep-purple" style={{ width: `${traits.thinking}%` }}></div>
              </div>
              
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium">J: {traits.judging}% Judging</span>
                <span className="font-medium">P: {traits.perceiving}% Perceiving</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-mbti-deep-purple" style={{ width: `${traits.judging}%` }}></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-base font-semibold mb-1 text-mbti-deep-purple">Kekuatan</h3>
              <ul className="space-y-0.5 text-xs">
                {result.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-mbti-deep-purple mr-1">•</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-semibold mb-1 text-mbti-deep-purple">Tantangan</h3>
              <ul className="space-y-0.5 text-xs">
                {result.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-mbti-deep-purple mr-1">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          
            <div>
              <h3 className="text-base font-semibold mb-1 text-mbti-deep-purple">Karier yang Cocok</h3>
              <ul className="space-y-0.5 text-xs">
                {result.careers.map((career, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-mbti-deep-purple mr-1">•</span>
                    <span>{career}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-semibold mb-1 text-mbti-deep-purple">Kecocokan Tipe</h3>
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-700 text-center text-xs">
                  Tipe kepribadian yang paling cocok denganmu: <strong className="text-mbti-deep-purple">{result.compatibility}</strong>
                </p>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center mt-4 text-xs text-mbti-deep-purple">
            Mau ikutan yuk cek di quiz.ruangedukasi.com
          </div>
        </div>
      </div>
      
      {/* Use the same format for image export - A4 ratio */}
      <div id="result-content-for-image" style={{...commonStyles, height: '1130px'}}>
        {/* The same content as PDF for consistency */}
        <div className="bg-mbti-deep-purple text-white p-6 text-center">
          <p className="text-xs text-white/80 mb-2">Mau cek kepribadianmu? Cek di <strong>quiz.ruangedukasi.com</strong></p>
          <span className="inline-block px-4 py-2 rounded-full bg-white text-mbti-deep-purple font-semibold mb-4">
            Tipe Kepribadianmu
          </span>
          <h1 className="text-4xl font-bold mb-2">{result.type}</h1>
          <h2 className="text-2xl">{result.title}</h2>
        </div>
        
        <div className="p-6 bg-white">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="h-1 bg-mbti-deep-purple rounded flex-grow"></div>
              <h3 className="text-lg font-semibold mx-4">Deskripsi</h3>
              <div className="h-1 bg-mbti-deep-purple rounded flex-grow"></div>
            </div>
            <p className="text-gray-700 text-sm">{result.description}</p>
          </div>
          
          {/* Personality Trait Percentages */}
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="h-1 bg-mbti-deep-purple rounded flex-grow"></div>
              <h3 className="text-lg font-semibold mx-4">Persentase Tipe</h3>
              <div className="h-1 bg-mbti-deep-purple rounded flex-grow"></div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium">E: {traits.extrovert}% Extrovert</span>
                <span className="font-medium">I: {traits.introvert}% Introvert</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-mbti-deep-purple" style={{ width: `${traits.extrovert}%` }}></div>
              </div>
              
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium">S: {traits.sensing}% Sensing</span>
                <span className="font-medium">N: {traits.intuition}% Intuition</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-mbti-deep-purple" style={{ width: `${traits.sensing}%` }}></div>
              </div>
              
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium">T: {traits.thinking}% Thinking</span>
                <span className="font-medium">F: {traits.feeling}% Feeling</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-mbti-deep-purple" style={{ width: `${traits.thinking}%` }}></div>
              </div>
              
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium">J: {traits.judging}% Judging</span>
                <span className="font-medium">P: {traits.perceiving}% Perceiving</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-mbti-deep-purple" style={{ width: `${traits.judging}%` }}></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="text-base font-semibold mb-1 text-mbti-deep-purple">Kekuatan</h3>
              <ul className="space-y-0.5 text-xs">
                {result.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-mbti-deep-purple mr-1">•</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-semibold mb-1 text-mbti-deep-purple">Tantangan</h3>
              <ul className="space-y-0.5 text-xs">
                {result.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-mbti-deep-purple mr-1">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          
            <div>
              <h3 className="text-base font-semibold mb-1 text-mbti-deep-purple">Karier yang Cocok</h3>
              <ul className="space-y-0.5 text-xs">
                {result.careers.map((career, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-mbti-deep-purple mr-1">•</span>
                    <span>{career}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-semibold mb-1 text-mbti-deep-purple">Kecocokan Tipe</h3>
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-700 text-center text-xs">
                  Tipe kepribadian yang paling cocok denganmu: <strong className="text-mbti-deep-purple">{result.compatibility}</strong>
                </p>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center mt-4 text-xs text-mbti-deep-purple">
            Mau ikutan yuk cek di quiz.ruangedukasi.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFContent;
