'use client';

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const TranslateCVUploadPage: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    if (acceptedFiles && acceptedFiles.length > 0) {
      setUploadedFile(acceptedFiles[0]);
      // TODO: Implement file upload logic here
      console.log('File accepted:', acceptedFiles[0].name);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    multiple: false,
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload CV for Translation</h1>
      <p className="mb-4">Upload your CV in PDF format to get a translated version.</p>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here ...</p>
        ) : (
          <p>Drag 'n' drop a PDF file here, or click to select a file</p>
        )}
        {uploadedFile && (
          <p className="mt-2">Selected file: {uploadedFile.name}</p>
        )}
      </div>

      {/* TODO: Add progress/loading indicator and download button here */}
    </div>
  );
};

export default TranslateCVUploadPage;