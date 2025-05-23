
import html2canvas from 'html2canvas';
import { toast } from "sonner";
import jsPDF from 'jspdf';

export const generateImage = async (
  elementId: string, 
  fileName: string, 
  format: 'png' | 'jpg' = 'png'
): Promise<void> => {
  toast.info('Menyiapkan gambar, harap tunggu...');
  
  const element = document.getElementById(elementId);
  if (!element) {
    toast.error('Elemen tidak ditemukan');
    return;
  }
  
  try {
    // Set display to block temporarily to ensure the hidden element renders properly
    const originalDisplay = element.style.display;
    element.style.display = 'block';
    
    // Wait for layout to update
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      allowTaint: true,
      foreignObjectRendering: false
    });
    
    // Restore original display style
    element.style.display = originalDisplay;
    
    // Convert to image
    const mimeType = format === 'jpg' ? 'image/jpeg' : 'image/png';
    const imgData = canvas.toDataURL(mimeType, 0.95);
    
    // Create download link
    const link = document.createElement('a');
    link.href = imgData;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('Gambar berhasil diunduh!');
  } catch (err) {
    console.error('Error generating image:', err);
    toast.error('Gagal mengunduh gambar, coba lagi dalam beberapa saat');
  }
};

export const generatePDF = async (
  elementId: string,
  fileName: string
): Promise<void> => {
  toast.info('Menyiapkan PDF, harap tunggu...');
  
  const element = document.getElementById(elementId);
  if (!element) {
    toast.error('Elemen tidak ditemukan');
    return;
  }
  
  try {
    // Set display to block temporarily to ensure the hidden element renders properly
    const originalDisplay = element.style.display;
    element.style.display = 'block';
    
    // Wait for layout to update - increase timeout to ensure rendering is complete
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      allowTaint: true,
      foreignObjectRendering: false
    });
    
    // Restore original display style
    element.style.display = originalDisplay;
    
    // Create PDF with A4 dimensions
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    
    // Get dimensions
    const imgWidth = 210; // A4 width in mm
    
    // Calculate height based on image ratio and A4 width
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Add image to PDF (top-left corner)
    pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
    
    // Save PDF
    pdf.save(fileName);
    
    toast.success('PDF berhasil diunduh!');
  } catch (err) {
    console.error('Error generating PDF:', err);
    toast.error('Gagal mengunduh PDF, coba lagi dalam beberapa saat');
  }
};
