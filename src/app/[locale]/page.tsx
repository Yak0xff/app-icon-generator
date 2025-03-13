'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import IconUploader from '@/components/IconUploader';
import IconPreview from '@/components/IconPreview';
import GenerateButton from '@/components/GenerateButton';
import { generateAppStoreIcons, generateGooglePlayIcons } from '@/services/iconGenerator';

export default function Home() {
  const t = useTranslations();
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [isDownloading, setIsDownloading] = useState<{ appStore: boolean; googlePlay: boolean }>({ 
    appStore: false, 
    googlePlay: false 
  });

  const handleImageUpload = (file: File) => {
    setUploadedImage(file);
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    setIsGenerated(false);
  };

  const handleGenerate = async () => {
    if (!uploadedImage) return;
    
    setIsGenerating(true);
    
    // Simulate processing time for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsGenerating(false);
    setIsGenerated(true);
  };

  const handleDownloadAppStoreIcons = async () => {
    if (!uploadedImage) return;
    
    try {
      setIsDownloading(prev => ({ ...prev, appStore: true }));
      await generateAppStoreIcons(uploadedImage);
    } catch (error) {
      console.error('Error downloading AppStore icons:', error);
      alert(t('download.appStore.error'));
    } finally {
      setIsDownloading(prev => ({ ...prev, appStore: false }));
    }
  };

  const handleDownloadGooglePlayIcons = async () => {
    if (!uploadedImage) return;
    
    try {
      setIsDownloading(prev => ({ ...prev, googlePlay: true }));
      await generateGooglePlayIcons(uploadedImage);
    } catch (error) {
      console.error('Error downloading Google Play icons:', error);
      alert(t('download.googlePlay.error'));
    } finally {
      setIsDownloading(prev => ({ ...prev, googlePlay: false }));
    }
  };

  return (
    <div className="space-y-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{t('app.title')}</h1>
        <p className="text-xl text-gray-600">
          {t('app.description')}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-2xl font-semibold mb-6">{t('upload.title')}</h2>
          <IconUploader onImageUpload={handleImageUpload} />
          
          {previewUrl && (
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3">{t('upload.preview')}</h3>
              <div className="flex justify-center">
                <div className="relative w-48 h-48 border border-gray-200 rounded-xl overflow-hidden">
                  <Image 
                    src={previewUrl} 
                    alt="Icon Preview" 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold mb-6">{t('generate.title')}</h2>
          {!previewUrl ? (
            <div className="text-center py-12 text-gray-500">
              <p>{t('generate.uploadFirst')}</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">{t('generate.preview')}</h3>
                <IconPreview previewUrl={previewUrl} />
              </div>
              
              <GenerateButton 
                onGenerate={handleGenerate} 
                isGenerating={isGenerating} 
                isGenerated={isGenerated}
                disabled={!uploadedImage}
              />
            </>
          )}
        </div>
      </div>

      {isGenerated && (
        <div className="card mt-8">
          <h2 className="text-2xl font-semibold mb-6">{t('download.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-medium mb-3">{t('download.appStore.title')}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {t('download.appStore.description')}
              </p>
              <button 
                className="btn-primary w-full flex items-center justify-center"
                onClick={handleDownloadAppStoreIcons}
                disabled={isDownloading.appStore}
              >
                {isDownloading.appStore ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('download.appStore.downloading')}
                  </>
                ) : (
                  t('download.appStore.button')
                )}
              </button>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-medium mb-3">{t('download.googlePlay.title')}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {t('download.googlePlay.description')}
              </p>
              <button 
                className="btn-primary w-full flex items-center justify-center"
                onClick={handleDownloadGooglePlayIcons}
                disabled={isDownloading.googlePlay}
              >
                {isDownloading.googlePlay ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('download.googlePlay.downloading')}
                  </>
                ) : (
                  t('download.googlePlay.button')
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
