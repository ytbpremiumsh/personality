
import React from 'react';
import { MbtiResult } from '@/data/testQuestions';
import { Card, CardContent } from '@/components/ui/card';

interface PDFContentProps {
  result: MbtiResult;
}

const PDFContent: React.FC<PDFContentProps> = ({ result }) => {
  // Calculate percentages based on MBTI type with more accurate values
  const getTraitPercentages = (mbtiType: string) => {
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
  
  return (
    <div className="hidden">
      <div id="result-content-for-pdf" style={{ position: 'absolute', left: '-9999px', width: '800px' }}>
        <Card className="mb-8 overflow-hidden">
          <div className="bg-mbti-deep-purple text-white p-6 text-center">
            <p className="text-xs text-white/80 mb-2">Mau cek kepribadianmu? Cek di <strong>quiz.ruangedukasi.com</strong></p>
            <span className="inline-block px-4 py-2 rounded-full bg-white text-mbti-deep-purple font-semibold mb-4">
              Tipe Kepribadianmu
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">{result.type}</h1>
            <h2 className="text-2xl sm:text-3xl">{result.title}</h2>
          </div>
          
          <CardContent className="p-6">
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
                  <span className="font-medium">{traits.extrovert}% Extrovert</span>
                  <span className="font-medium">{traits.introvert}% Introvert</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-mbti-deep-purple" style={{ width: `${traits.extrovert}%` }}></div>
                </div>
                
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium">{traits.sensing}% Sensing</span>
                  <span className="font-medium">{traits.intuition}% Intuition</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-mbti-deep-purple" style={{ width: `${traits.sensing}%` }}></div>
                </div>
                
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium">{traits.thinking}% Thinking</span>
                  <span className="font-medium">{traits.feeling}% Feeling</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-mbti-deep-purple" style={{ width: `${traits.thinking}%` }}></div>
                </div>
                
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium">{traits.judging}% Judging</span>
                  <span className="font-medium">{traits.perceiving}% Perceiving</span>
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
          </CardContent>
        </Card>
      </div>
      
      {/* Image Export Content - Using 4:5 Aspect Ratio */}
      <div id="result-content-for-image" style={{ 
        position: 'absolute', 
        left: '-9999px', 
        width: '800px', 
        maxWidth: '800px',
        aspectRatio: '4/5',
        overflow: 'hidden',
        backgroundColor: 'white' 
      }}>
        <Card className="h-full rounded-none border-0 flex flex-col">
          <div className="bg-mbti-deep-purple text-white p-6 text-center">
            <p className="text-xs text-white/80 mb-1">Mau cek kepribadianmu? Cek di quiz.ruangedukasi.com</p>
            <span className="inline-block px-4 py-2 rounded-full bg-white text-mbti-deep-purple font-semibold mb-2">
              Tipe Kepribadianmu
            </span>
            <h1 className="text-4xl font-bold mb-1">{result.type}</h1>
            <h2 className="text-xl">{result.title}</h2>
          </div>
          
          <CardContent className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="mb-3 text-center">
                <p className="text-gray-700 text-sm">{result.description.substring(0, 200)}...</p>
              </div>
              
              {/* Personality Trait Percentages */}
              <div className="space-y-3 mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-mbti-deep-purple">{traits.extrovert}% Extrovert</span>
                  <span className="font-medium text-mbti-purple">{traits.introvert}% Introvert</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-mbti-deep-purple to-mbti-purple" style={{ width: `${traits.extrovert}%` }}></div>
                </div>
                
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-mbti-deep-purple">{traits.sensing}% Sensing</span>
                  <span className="font-medium text-mbti-purple">{traits.intuition}% Intuition</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-mbti-deep-purple to-mbti-purple" style={{ width: `${traits.sensing}%` }}></div>
                </div>
                
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-mbti-deep-purple">{traits.thinking}% Thinking</span>
                  <span className="font-medium text-mbti-purple">{traits.feeling}% Feeling</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-mbti-deep-purple to-mbti-purple" style={{ width: `${traits.thinking}%` }}></div>
                </div>
                
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-mbti-deep-purple">{traits.judging}% Judging</span>
                  <span className="font-medium text-mbti-purple">{traits.perceiving}% Perceiving</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-mbti-deep-purple to-mbti-purple" style={{ width: `${traits.judging}%` }}></div>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-2 pb-1 bg-mbti-deep-purple text-white text-xs rounded-t-md mt-auto">
              Mau ikutan yuk cek di quiz.ruangedukasi.com
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PDFContent;
