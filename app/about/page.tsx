'use client';

import { MDXLayoutRenderer } from '@/components/MDXComponents';
import AuthorLayout from '@/layouts/MDX/AuthorLayout';
import MainLayout from '@/layouts/MainLayout';
import { allAuthors } from 'contentlayer/generated';
import useDownloader from 'react-use-downloader';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = 'About - Guilherme Vieira';
    return () => {
    };
  }, []); 
  
  const { download } = useDownloader(); 

  const fileUrl = "/static/files/LucasMontano-CV.pdf"; 
  const filename = "LucasMontano-CV.pdf"; 

  const author = allAuthors.find((p) => p.slug === 'about');

  if (!author) {
    return null;
  }

  return (
    <MainLayout>
      <AuthorLayout content={author}>
        <MDXLayoutRenderer content={author} />
      </AuthorLayout>
      <button className="button" onClick={() => download(fileUrl, filename)}>Download</button>
    </MainLayout>
  );
}
