import React from 'react';
import { MbtiResult } from '@/data/testQuestions';
import { Card, CardContent } from '@/components/ui/card';
interface PersonalityChartProps {
  type: string;
}
interface TraitPair {
  trait1: string;
  percentage1: number;
  trait2: string;
  percentage2: number;
}
const PersonalityChart: React.FC<PersonalityChartProps> = ({
  type
}) => {
  // Calculate percentages based on MBTI type
  const getTraitPercentages = (mbtiType: string): TraitPair[] => {
    // Default values if custom values aren't set
    const defaultPairs: TraitPair[] = [{
      trait1: "Extrovert",
      percentage1: 25,
      trait2: "Introvert",
      percentage2: 75
    }, {
      trait1: "Sensing",
      percentage1: 65,
      trait2: "Intuition",
      percentage2: 35
    }, {
      trait1: "Thinking",
      percentage1: 35,
      trait2: "Feeling",
      percentage2: 65
    }, {
      trait1: "Judging",
      percentage1: 60,
      trait2: "Perceiving",
      percentage2: 40
    }];

    // Determine percentages based on MBTI type
    // E/I - First letter
    if (mbtiType.charAt(0) === 'E') {
      defaultPairs[0].percentage1 = 60;
      defaultPairs[0].percentage2 = 40;
    }

    // S/N - Second letter
    if (mbtiType.charAt(1) === 'N') {
      defaultPairs[1].percentage1 = 40;
      defaultPairs[1].percentage2 = 60;
    }

    // T/F - Third letter
    if (mbtiType.charAt(2) === 'T') {
      defaultPairs[2].percentage1 = 60;
      defaultPairs[2].percentage2 = 40;
    }

    // J/P - Fourth letter
    if (mbtiType.charAt(3) === 'P') {
      defaultPairs[3].percentage1 = 45;
      defaultPairs[3].percentage2 = 55;
    }
    return defaultPairs;
  };
  const traitPairs = getTraitPercentages(type);
  return <Card className="mb-6">
      <CardContent className="p-4 py-[12px]">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-mbti-deep-purple text-center">
          Persentase Tipe Kepribadian
        </h3>
        <div className="space-y-5">
          {traitPairs.map((pair, index) => <div key={index} className="space-y-1">
              <div className="flex justify-between text-sm">
                <div className="flex items-center font-medium">
                  <span className="text-mbti-deep-purple text-lg sm:text-xl">
                    {pair.percentage1.toFixed(2)}%
                  </span>
                  <span className="ml-2 text-gray-800">{pair.trait1}</span>
                </div>
                <div className="flex items-center font-medium">
                  <span className="text-mbti-purple text-lg sm:text-xl">
                    {pair.percentage2.toFixed(2)}%
                  </span>
                  <span className="ml-2 text-gray-800">{pair.trait2}</span>
                </div>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-mbti-deep-purple to-mbti-purple" style={{
              width: `${pair.percentage1}%`
            }}></div>
              </div>
            </div>)}
        </div>
      </CardContent>
    </Card>;
};
export default PersonalityChart;