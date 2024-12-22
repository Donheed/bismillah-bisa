import { usePDF } from 'react-to-pdf';

export const downloadPDF = async (elementId: string, filename: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    try {
      const { toPDF } = usePDF();
      await toPDF(element, {
        filename,
        page: { margin: 20 }
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  }
};