// components/PDFPreview.tsx
'use client';

import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';


import workerSrc from 'pdfjs-dist/build/pdf.worker.entry';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

interface PDFPreviewProps {
  slug: string;
  templateId: string;
}

export default function PDFPreview({ slug, templateId }: PDFPreviewProps) {
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [error, setError] = useState(false);
  const { language, direction } = useLanguage();

  useEffect(() => {
    if (!slug) return;

    let url: string;

    const loadPdf = async () => {
      try {
        const res = await fetch(`/cvs/${slug}.pdf`);
        if (!res.ok) throw new Error('PDF not found');
        const blob = await res.blob();
        url = URL.createObjectURL(blob);
        setPdfPreviewUrl(url);
      } catch (err) {
        console.error('Failed to load PDF:', err);
        setError(true);
      }
    };

    loadPdf();

    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [slug]);


  return (
    <div> 
    <div className="rounded overflow-hidden shadow mb-6">
    {pdfPreviewUrl && !error ? (
        <Document
        file={pdfPreviewUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        onLoadError={(e) => {
          console.error('PDF render error:', e);
          setError(true);
        }}
        className="border rounded"
      >
        {Array.from({ length: numPages }, (_, i) => (
          <Page
            key={`page_${i + 1}`}
            pageNumber={i + 1}
            width={900}
            renderAnnotationLayer={false}
          />
        ))}
      </Document>
      )  : error ? (
          <div className="text-red-600 text-center py-8">
            {language === 'ar'
              ? 'فشل تحميل ملف PDF. يمكنك تحميله مباشرة.'
              : 'Failed to load PDF. You can download it below.'}
          </div>
        ) : (
          <div className="text-gray-500 text-center py-8">
            {language === 'ar' ? 'جارٍ تحميل المعاينة...' : 'Loading preview...'}
          </div>
        )}

        <Image
          src={`/cvs/${slug}.png`}
          alt={`Resume preview for ${`title_${language}`}`}
          width={900}
          height={1200}
          loading="lazy"
          className="w-full h-auto object-contain mt-6"
        />
      </div>


    <div className="flex flex-wrap gap-4">
      <a
        href={`/cvs/${slug}.pdf`}
        download
        className="bg-primary text-white px-4 py-2 rounded"
      >
        {language === 'ar' ? 'تحميل PDF' : 'Download PDF'}
      </a>
      <Link
        href={templateId}
        className="bg-secondary text-white px-4 py-2 rounded"
      >
        {language === 'ar' ? 'خصص هذا النموذج' : 'Customize This CV'}
      </Link>
    </div>
    </div>
  );
}
