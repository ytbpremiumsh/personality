
import React from 'react';
import { MbtiResult } from '@/data/testQuestions';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import PersonalityChart from './PersonalityChart';

interface ResultCardProps {
  result: MbtiResult;
}

const ResultCard: React.FC<ResultCardProps> = ({
  result
}) => {
  return (
    <>
      <Card className="mb-8 overflow-hidden">
        <div className="bg-mbti-deep-purple text-white p-6 text-center px-[24px] py-[24px]">
          <p className="text-xs text-white/80 mb-2">Mau cek kepribadianmu? Cek di <strong>quiz.ruangedukasi.com</strong></p>
          <span className="inline-block px-4 py-2 rounded-full bg-white text-mbti-deep-purple font-semibold mb-4">
            Tipe Kepribadianmu
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">{result.type}</h1>
          <h2 className="text-2xl sm:text-3xl">{result.title}</h2>
        </div>
        
        <CardContent className="p-6 px-[24px] py-[17px]">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <Separator className="flex-grow bg-mbti-deep-purple h-[1px]" />
              <h3 className="text-xl font-semibold mx-4">Deskripsi</h3>
              <Separator className="flex-grow bg-mbti-deep-purple h-[1px]" />
            </div>
            <p className="text-gray-700 text-sm sm:text-base">{result.description}</p>
          </div>
          
          {/* Personality Chart */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <Separator className="flex-grow bg-mbti-deep-purple h-[1px]" />
              <h3 className="text-xl font-semibold mx-4">Persentase Tipe</h3>
              <Separator className="flex-grow bg-mbti-deep-purple h-[1px]" />
            </div>
            <PersonalityChart type={result.type} />
          </div>
          
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Karakteristik</h3>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center mb-3">
                      <Separator className="flex-grow bg-mbti-deep-purple h-[1px]" />
                      <h4 className="text-lg font-semibold mx-4 text-mbti-deep-purple">Kekuatan</h4>
                      <Separator className="flex-grow bg-mbti-deep-purple h-[1px]" />
                    </div>
                    <ul className="space-y-1 text-sm sm:text-base">
                      {result.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-mbti-deep-purple mr-2">•</span>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <Separator className="flex-grow bg-mbti-deep-purple h-[1px]" />
                      <h4 className="text-lg font-semibold mx-4 text-mbti-deep-purple">Tantangan</h4>
                      <Separator className="flex-grow bg-mbti-deep-purple h-[1px]" />
                    </div>
                    <ul className="space-y-1 text-sm sm:text-base">
                      {result.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-mbti-deep-purple mr-2">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center mb-3">
                      <Separator className="flex-grow bg-mbti-deep-purple h-[1px]" />
                      <h4 className="text-lg font-semibold mx-4 text-mbti-deep-purple">Karier yang Cocok</h4>
                      <Separator className="flex-grow bg-mbti-deep-purple h-[1px]" />
                    </div>
                    <ul className="space-y-1 text-sm sm:text-base">
                      {result.careers.map((career, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-mbti-deep-purple mr-2">•</span>
                          <span>{career}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <Separator className="flex-grow bg-mbti-deep-purple h-[1px]" />
                      <h4 className="text-lg font-semibold mx-4 text-mbti-deep-purple">Kecocokan Tipe</h4>
                      <Separator className="flex-grow bg-mbti-deep-purple h-[1px]" />
                    </div>
                    <div className="flex items-center h-full">
                      <p className="text-gray-700 text-sm sm:text-base">
                        Tipe kepribadian yang paling cocok denganmu: <strong className="text-mbti-deep-purple text-lg">{result.compatibility}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </>
  );
};

export default ResultCard;
