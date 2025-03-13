'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface IconUploaderProps {
  onImageUpload: (file: File) => void;
}

export default function IconUploader({ onImageUpload }: IconUploaderProps) {
  const t = useTranslations('upload');
  
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      onImageUpload(file);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.svg'],
    },
    maxFiles: 1,
    multiple: false,
  });

  return (
    <div 
      {...getRootProps()} 
      className={`dropzone ${isDragActive ? 'border-primary-500 bg-primary-50' : ''}`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Image 
            src="/upload-icon.svg" 
            alt="Upload" 
            width={64} 
            height={64}
            className="opacity-60"
          />
        </div>
        {isDragActive ? (
          <p className="text-primary-600 font-medium">{t('dragActive')}</p>
        ) : (
          <>
            <p className="text-gray-700 font-medium mb-2">{t('dragInactive')}</p>
            <p className="text-sm text-gray-500">
              {t('supportedFormats')}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
