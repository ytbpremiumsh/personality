
import html2canvas from 'html2canvas';
import { toast } from "sonner";

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
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowHeight: element.scrollHeight,
      windowWidth: element.scrollWidth
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
