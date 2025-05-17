
import React from 'react';
import Layout from '../components/Layout';
import { useParams, Link } from 'react-router-dom';
import { mbtiResults } from '../data/testQuestions';
import { Button } from '@/components/ui/button';
import { Download, Share2, BookOpen } from 'lucide-react';
import { toast } from "sonner";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Card, CardContent } from '@/components/ui/card';
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
  
  // Function to handle downloading results as PDF
  const handleDownloadPDF = () => {
    toast.info('Menyiapkan PDF, harap tunggu...');
    
    const resultElement = document.getElementById('result-content');
    if (!resultElement) return;
    
    html2canvas(resultElement, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      
      // PDF dimensions
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Calculate image dimensions to fit properly on PDF
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      
      // Adjust the ratio to ensure the content fits on one page
      // Use 0.8 (80%) of the height to leave space for header and footer
      const ratio = Math.min(pdfWidth / imgWidth, (pdfHeight * 0.8) / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 20; // Start 20mm from top to leave space for header
      
      // Add header
      pdf.setFillColor(155, 135, 245); // mbti-deep-purple
      pdf.rect(0, 0, pdfWidth, 15, 'F');
      pdf.setTextColor(255, 255, 255); // white
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Hasil Tes Kepribadian MBTI', pdfWidth / 2, 10, { align: 'center' });
      
      // Add content image
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      
      // Add footer
      pdf.setFillColor(155, 135, 245); // mbti-deep-purple
      pdf.rect(0, pdfHeight - 15, pdfWidth, 15, 'F');
      pdf.setTextColor(255, 255, 255); // white
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text('© quiz.ruangedukasi.com', pdfWidth / 2, pdfHeight - 5, { align: 'center' });
      
      // Add watermark
      pdf.setTextColor(200, 200, 200); // light gray
      pdf.setFontSize(24);
      pdf.setFont('helvetica', 'italic');
      pdf.save(`Hasil-MBTI-${result.type}.pdf`);
      
      // Add diagonal watermark
      pdf.setGState(pdf.GState({opacity: 0.3}));
      pdf.setTextColor(150, 150, 150);
      pdf.setFontSize(30);
      pdf.setFont('helvetica', 'italic');
      
      // Save the transformation matrix and rotate for diagonal watermark
      pdf.saveGraphicsState();
      pdf.translate(pdfWidth / 2, pdfHeight / 2);
      pdf.rotate(-45);
      pdf.text('quiz.ruangedukasi.com', 0, 0, { align: 'center' });
      pdf.restoreGraphicsState();
      
      pdf.save(`Hasil-MBTI-${result.type}.pdf`);
      toast.success('PDF berhasil diunduh!');
    }).catch(err => {
      console.error('Error generating PDF:', err);
      toast.error('Gagal mengunduh PDF');
    });
  };
  
  // Function to create a URL for the article about this MBTI type
  const getArticleUrl = () => {
    return `/artikel/${result.type.toLowerCase()}`;
  };
  
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-white via-mbti-blue to-mbti-purple bg-opacity-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto" id="result-content">
            <Card className="mb-8 overflow-hidden">
              <div className="bg-mbti-deep-purple text-white p-6 text-center">
                <span className="inline-block px-4 py-2 rounded-full bg-white text-mbti-deep-purple font-semibold mb-4">
                  Tipe Kepribadianmu
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">{result.type}</h1>
                <h2 className="text-2xl sm:text-3xl">{result.title}</h2>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="h-1 bg-mbti-deep-purple rounded flex-grow"></div>
                    <h3 className="text-xl font-semibold mx-4">Deskripsi</h3>
                    <div className="h-1 bg-mbti-deep-purple rounded flex-grow"></div>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">{result.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-mbti-deep-purple">Kekuatan</h3>
                      <ul className="space-y-1 text-sm sm:text-base">
                        {result.strengths.map((strength, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-mbti-deep-purple mr-2">•</span>
                            <span>{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-mbti-deep-purple">Tantangan</h3>
                      <ul className="space-y-1 text-sm sm:text-base">
                        {result.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-mbti-deep-purple mr-2">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-mbti-deep-purple">Karier yang Cocok</h3>
                      <ul className="space-y-1 text-sm sm:text-base">
                        {result.careers.map((career, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-mbti-deep-purple mr-2">•</span>
                            <span>{career}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-mbti-deep-purple">Kecocokan Tipe</h3>
                      <div className="flex items-center justify-center h-full">
                        <p className="text-gray-700 text-center text-sm sm:text-base">
                          Tipe kepribadian yang paling cocok denganmu: <strong className="text-mbti-deep-purple text-lg">{result.compatibility}</strong>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link 
                to="/test" 
                className="px-6 py-3 bg-gradient-to-r from-mbti-deep-purple to-mbti-purple rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
              >
                Ulangi Tes
              </Link>
              <Button 
                onClick={handleShareResults}
                className="px-6 py-3 bg-white border border-mbti-deep-purple text-mbti-deep-purple rounded-lg font-medium hover:bg-mbti-blue transition-colors flex items-center"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Bagikan Hasil
              </Button>
              <Button 
                onClick={handleDownloadPDF}
                className="px-6 py-3 bg-white border border-mbti-deep-purple text-mbti-deep-purple rounded-lg font-medium hover:bg-mbti-blue transition-colors flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Unduh Hasil (PDF)
              </Button>
              <Link 
                to={getArticleUrl()} 
                className="px-6 py-3 bg-white border border-mbti-deep-purple text-mbti-deep-purple rounded-lg font-medium hover:bg-mbti-blue transition-colors flex items-center"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Baca Lanjutan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TestResult;
