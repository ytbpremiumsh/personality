
import React from 'react';
import { MbtiResult } from '@/data/testQuestions';
import { Card, CardContent } from '@/components/ui/card';

interface PDFContentProps {
  result: MbtiResult;
}

const PDFContent: React.FC<PDFContentProps> = ({ result }) => {
  return (
    <div className="hidden">
      <div id="result-content-for-pdf">
        <Card className="mb-8 overflow-hidden">
          <div className="bg-mbti-deep-purple text-white p-6 text-center">
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
    </div>
  );
};

export default PDFContent;
