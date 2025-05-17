
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from "sonner";

export const generatePDF = async (elementId: string, fileName: string): Promise<void> => {
  toast.info('Menyiapkan PDF, harap tunggu...');
  
  const resultElement = document.getElementById(elementId);
  if (!resultElement) {
    toast.error('Elemen tidak ditemukan');
    return;
  }
  
  try {
    const canvas = await html2canvas(resultElement, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });
    
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
    
    // Add watermark at the top center
    pdf.setTextColor(150, 150, 150);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'italic');
    pdf.setGState(pdf.GState({opacity: 0.3}));
    pdf.text('quiz.ruangedukasi.com', pdfWidth / 2, 18, { 
      align: 'center' 
    });
    
    pdf.save(fileName);
    toast.success('PDF berhasil diunduh!');
  } catch (err) {
    console.error('Error generating PDF:', err);
    toast.error('Gagal mengunduh PDF');
  }
};
