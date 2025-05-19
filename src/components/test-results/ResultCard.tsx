
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
        <div className="bg-mbti-deep-purple text-white p-6 text-center px-[24px] py-[18px]">
          <p className="text-xs text-white/80 mb-2">Mau cek kepribadianmu? Cek di <strong>quiz.ruangedukasi.com</strong></p>
          <span className="inline-block px-4 py-2 rounded-full bg-white text-mbti-deep-purple font-semibold mb-4">
            Tipe Kepribadianmu
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">{result.type}</h1>
          <h2 className="text-2xl sm:text-3xl">{result.title}</h2>
        </div>
        
        <CardContent className="p-6 px-[24px] py-[4px]">
          <div className="mb-6 max-w-4xl mx-auto">
            <div className="flex items-center mb-4 justify-center">
              <Separator className="flex-grow bg-mbti-deep-purple h-[1px]" />
              <h3 className="text-xl font-semibold mx-4">Deskripsi</h3>
              <Separator className="flex-grow bg-mbti-deep-purple h-[1px]" />
            </div>
            <p className="text-gray-700 text-sm sm:text-base text-justify">{result.description}</p>
          </div>
          
          {/* Personality Chart */}
          <div className="mb-4 max-w-4xl mx-auto">
            <div className="flex items-center mb-4 justify-center">
            </div>
            <PersonalityChart type={result.type} />
          </div>
          
          {/* Karakteristik Section */}
          <div className="mb-6 max-w-4xl mx-auto">
            <div className="flex items-center mb-4 justify-center">
            </div>
            
            {/* Cards grid for characteristics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Kekuatan Card */}
              <Card className="border rounded-lg shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-2xl font-semibold mb-4 text-mbti-deep-purple">Kekuatan</h4>
                  <ul className="space-y-2">
                    {result.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-mbti-deep-purple mr-2">•</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Tantangan Card */}
              <Card className="border rounded-lg shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-2xl font-semibold mb-4 text-mbti-deep-purple">Tantangan</h4>
                  <ul className="space-y-2">
                    {result.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-mbti-deep-purple mr-2">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Karier Card */}
              <Card className="border rounded-lg shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-2xl font-semibold mb-4 text-mbti-deep-purple">Karier yang Cocok</h4>
                  <ul className="space-y-2">
                    {result.careers.map((career, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-mbti-deep-purple mr-2">•</span>
                        <span>{career}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Kecocokan Tipe Card */}
              <Card className="border rounded-lg shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-2xl font-semibold mb-4 text-mbti-deep-purple">Kecocokan Tipe</h4>
                  <div className="flex flex-col justify-center h-full">
                    <p className="text-center">
                      Tipe kepribadian yang paling cocok denganmu:
                    </p>
                    <p className="text-center text-2xl font-bold text-mbti-deep-purple mt-2">
                      {result.compatibility}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 overflow-hidden">
        <div className="bg-mbti-deep-purple text-white p-6 text-center px-[24px] py-[24px]">
          <p className="text-xs text-white/80 mb-2">Mau cek kepribadianmu? Cek di <strong>quiz.ruangedukasi.com</strong></p>
          <span className="inline-block px-4 py-2 rounded-full bg-white text-mbti-deep-purple font-semibold mb-4">
            Karakteristik {result.type}
          </span>
          <p className="text-xs text-white/80 mb-2"><strong>{result.title}</strong></p>
        </div>
        
        <CardContent className="p-6 px-[24px] py-[17px]">
         {/* Karakteristik Section */}
          <div className="mb-6 max-w-4xl mx-auto">
            <div className="flex items-center mb-4 justify-center">
            </div>
            
            {/* Cards grid for characteristics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Kekuatan Card */}
              <Card className="border rounded-lg shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-2xl font-semibold mb-4 text-mbti-deep-purple">Kekuatan</h4>
                  <ul className="space-y-2">
                    {result.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-mbti-deep-purple mr-2">•</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Tantangan Card */}
              <Card className="border rounded-lg shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-2xl font-semibold mb-4 text-mbti-deep-purple">Tantangan</h4>
                  <ul className="space-y-2">
                    {result.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-mbti-deep-purple mr-2">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Karier Card */}
              <Card className="border rounded-lg shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-2xl font-semibold mb-4 text-mbti-deep-purple">Karier yang Cocok</h4>
                  <ul className="space-y-2">
                    {result.careers.map((career, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-mbti-deep-purple mr-2">•</span>
                        <span>{career}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Kecocokan Tipe Card */}
              <Card className="border rounded-lg shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-2xl font-semibold mb-4 text-mbti-deep-purple">Kecocokan Tipe</h4>
                  <div className="flex flex-col justify-center h-full">
                    <p className="text-center">
                      Tipe kepribadian yang paling cocok denganmu:
                    </p>
                    <p className="text-center text-2xl font-bold text-mbti-deep-purple mt-2">
                      {result.compatibility}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ResultCard;
