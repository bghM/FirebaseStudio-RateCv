'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Header } from '@/components/layout/header';

type Cv = {
  url: string;
  name: string;
  preview: string;
};

export default function CVListPage() {
  const [cvs, setCvs] = useState<Cv[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        // setMounted(true);
    // Frontend mock data
    const mockData: Cv[] = [
      {
        url: 'charles-cv',
        name: 'Charles Bloomberg',
        preview: '/cv1.png',
      },
      {
        url: 'sarah-cv',
        name: 'Sarah Ali',
        preview: '/cv2.png',
      },
      {
        url: 'mohammed-cv',
        name: 'Mohammed Nasser',
        preview: '/cv3.png',
      },
    ];

    setTimeout(() => {
      setCvs(mockData);
      setLoading(false);
    }, 300);
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className={`min-h-screen bg-background text-foreground`}>

    <Header ctaTitle="CVs Templates" ctaLink="/" />


    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Seirah CVs Templates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cvs.map((cv) => (
          <Link href={`/cvs/${cv.url}`} key={cv.url}>
            <div className="border rounded-xl overflow-hidden shadow hover:shadow-md transition cursor-pointer">
              <img
                src={cv.preview}
                alt={cv.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{cv.name}</h2>
                <p className="text-sm text-gray-500">Click to view CV</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
</div>
  );
}