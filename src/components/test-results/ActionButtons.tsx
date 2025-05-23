
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Share2, BookOpen } from 'lucide-react';

interface ActionButtonsProps {
  onShareResults: () => void;
  articleUrl: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  onShareResults, 
  articleUrl 
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      <Link 
        to="/test" 
        className="px-6 py-3 bg-gradient-to-r from-mbti-deep-purple to-mbti-purple rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
      >
        Ulangi Tes
      </Link>
      <Button 
        onClick={onShareResults}
        variant="outline"
        className="px-6 py-3 border border-mbti-deep-purple text-mbti-deep-purple rounded-lg font-medium hover:bg-mbti-blue transition-colors flex items-center"
        size="lg"
      >
        <Share2 className="w-4 h-4 mr-2" />
        Bagikan Hasil
      </Button>
      <Link 
        to={articleUrl} 
        className="px-6 py-3 border border-mbti-deep-purple text-mbti-deep-purple rounded-lg font-medium hover:bg-mbti-blue transition-colors flex items-center"
      >
        <BookOpen className="w-4 h-4 mr-2" />
        Baca Lanjutan
      </Link>
    </div>
  );
};

export default ActionButtons;
