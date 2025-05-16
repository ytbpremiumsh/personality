
import React from 'react';
import Layout from '../components/Layout';
import { useParams, Link } from 'react-router-dom';
import { mbtiResults } from '../data/testQuestions';
import { Button } from '@/components/ui/button';
import { Download, Share2 } from 'lucide-react';
import { toast } from "sonner";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const TestResult: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  
  // Default to ISFJ if type is invalid or not found
  const result = type && mbtiResults[type] ? mbtiResults[type] : mbtiResults.ISFJ;
  
  // Function to handle sharing results
  const handleShareResults = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Hasil Tes MBTI - ${result.type}`,
          text: `Saya baru saja melakukan tes kepribadian MBTI dan hasilnya saya adalah ${result.type}: ${result.title}! Coba juga di personality.ruangedukasi.com`,
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
  
  // Function to handle downloading results as PDF
  const handleDownloadPDF = () => {
    toast.info('Menyiapkan PDF, harap tunggu...');
    
    const resultElement = document.getElementById('result-content');
    if (!resultElement) return;
    
    html2canvas(resultElement, {
      scale: 2,
      useCORS: true,
      logging: false,
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      
      // Add some metadata
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      
      pdf.addImage(imgData, 'PNG', imgX, 10, imgWidth * ratio, imgHeight * ratio);
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);
      pdf.text('© personality.ruangedukasi.com', pdfWidth / 2, pdfHeight - 10, { align: 'center' });
      
      pdf.save(`Hasil-MBTI-${result.type}.pdf`);
      toast.success('PDF berhasil diunduh!');
    }).catch(err => {
      console.error('Error generating PDF:', err);
      toast.error('Gagal mengunduh PDF');
    });
  };
  
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-white via-mbti-blue to-mbti-purple bg-opacity-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto" id="result-content">
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
              <Button 
                onClick={handleShareResults}
                className="mbti-button-secondary flex items-center"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Bagikan Hasil
              </Button>
              <Button 
                onClick={handleDownloadPDF}
                className="mbti-button-secondary flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Unduh Hasil (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TestResult;
