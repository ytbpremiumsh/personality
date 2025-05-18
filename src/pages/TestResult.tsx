
import React from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import { mbtiResults } from '../data/testQuestions';
import { toast } from "sonner";
import { generateImage, generatePDF } from '@/utils/image-generator';
import ResultCard from '@/components/test-results/ResultCard';
import PDFContent from '@/components/test-results/PDFContent';
import ActionButtons from '@/components/test-results/ActionButtons';
import { useIsMobile } from '@/hooks/use-mobile';

const TestResult: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const isMobile = useIsMobile();
  
  // Default to ISFJ if type is invalid or not found
  const result = type && mbtiResults[type] ? mbtiResults[type] : mbtiResults.ISFJ;
  
  // Function to handle sharing results
  const handleShareResults = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Hasil Tes MBTI - ${result.type}`,
          text: `Saya baru saja melakukan tes kepribadian MBTI dan hasilnya saya adalah ${result.type}: ${result.title}! Coba juga di quiz.ruangedukasi.com`,
          url: window.location.href,
        });
        toast.success('Berhasil membagikan hasil tes!');
      } catch (error) {
        toast.error('Gagal membagikan hasil tes');
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link hasil tes telah disalin ke clipboard!');
    }
  };
  
  // Function to handle downloading results as image
  const handleDownloadImage = () => {
    console.log("Generating image...");
    generateImage('result-content-for-image', `Hasil-MBTI-${result.type}.jpg`, 'jpg');
  };
  
  // Function to handle downloading results as PDF
  const handleDownloadPDF = () => {
    console.log("Generating PDF...");
    generatePDF('result-content-for-pdf', `Hasil-MBTI-${result.type}.pdf`);
  };
  
  // Create a standardized article URL for consistent navigation
  const getArticleUrl = () => {
    return `/artikel/mbti-${result.type.toLowerCase()}`;
  };
  
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-white via-mbti-blue to-mbti-purple bg-opacity-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main content - this will be shown on the page */}
          <div className="max-w-4xl mx-auto">
            <ResultCard result={result} />
            
            <ActionButtons 
              onShareResults={handleShareResults}
              onDownloadImage={handleDownloadImage}
              onDownloadPDF={handleDownloadPDF}
              articleUrl={getArticleUrl()}
            />
          </div>
          
          {/* Hidden content for PDF and image export */}
          <PDFContent result={result} />
        </div>
      </section>
    </Layout>
  );
};

export default TestResult;
