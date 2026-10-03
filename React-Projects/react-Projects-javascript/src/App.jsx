import DocumentExample from "./DocumentExample";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function App() {
  const exportPdf = async () => {
    const input = document.getElementById("pdf-document");

    if (!input) {
      console.error("PDF element not found");
      return;
    }

    try {
      const canvas = await html2canvas(input, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");

  
      const pdf = new jsPDF("p", "mm", "a4");

      const pageWidth = 210;
      const pageHeight = 297;

      const margin = 10;

      const imgWidth = pageWidth - margin * 2;
      const imgHeight =
        (canvas.height * imgWidth) / canvas.width;

      // إذا كان المحتوى أطول من صفحة A4
      let heightLeft = imgHeight;
      let position = margin;

      pdf.addImage(
        imgData,
        "PNG",
        margin,
        position,
        imgWidth,
        imgHeight
      );

      heightLeft -= pageHeight - margin * 2;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;

        pdf.addPage();

        pdf.addImage(
          imgData,
          "PNG",
          margin,
          position,
          imgWidth,
          imgHeight
        );

        heightLeft -= pageHeight - margin * 2;
      }

      pdf.save("document.pdf");
    } catch (error) {
      console.error("PDF Export Error:", error);
    }
  };
const exportPng = async () => {
  const input = document.getElementById("pdf-document");

  const canvas = await html2canvas(input, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
  });

  const image = canvas.toDataURL("image/png");

  const link = document.createElement("a");

  link.href = image;
  link.download = "document.png";

  link.click();
};
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <button
        onClick={exportPdf}
        className="mb-8 rounded-lg bg-black px-5 py-2 text-white"
      >
        Download PDF
      </button>
    <button onClick={exportPng}
    className="mb-8 rounded-lg ml-2 bg-black px-5 py-2 text-white"
    >
  Download PNG
</button>
      <div id="pdf-document">
        <DocumentExample />
      </div>

    </div>
  );
}

export default App;
