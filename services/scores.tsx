import { PDFDocument, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";

type CreatePDFProps = {
  name: string;
  choir: string | null;
  qty: number;
};

export const createPdf = async ({ name, choir, qty }: CreatePDFProps) => {
  // Load pdf
  const url = "../../scores/jingle-bells.pdf";
  const absolutePath = path.join(__dirname, url);
  const existingPdfBytes = fs.readFileSync(absolutePath, null).buffer;

  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  const choirName = choir ? ` for ${choir}` : "";

  const text = `Owned by ${name} ${choirName}
Allowed up to ${qty} copies to be printed
Purchase additional copies at mortonmusic.com`;

  // Loop through pages
  const pages = pdfDoc.getPages();
  pages.forEach((page) => {
    // Add copyright information
    page.drawText(text, {
      x: 20,
      y: 60,
      size: 7,
      lineHeight: 10,
      color: rgb(0.8, 0.8, 0.8),
    });
  });

  // Save and return
  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
};
