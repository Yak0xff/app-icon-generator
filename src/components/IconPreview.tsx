'use client';

import Image from 'next/image';

interface IconPreviewProps {
  previewUrl: string;
}

export default function IconPreview({ previewUrl }: IconPreviewProps) {
  const previewSizes = [
    { size: 180, label: '180×180', platform: 'iOS' },
    { size: 120, label: '120×120', platform: 'iOS' },
    { size: 192, label: '192×192', platform: 'Android' },
    { size: 96, label: '96×96', platform: 'Android' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {previewSizes.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div 
            className="relative border border-gray-200 rounded-lg overflow-hidden mb-2"
            style={{ width: `${item.size / 2}px`, height: `${item.size / 2}px` }}
          >
            <Image 
              src={previewUrl} 
              alt={`${item.label} Preview`} 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
          <p className="text-sm text-gray-700 font-medium">{item.label}</p>
          <p className="text-xs text-gray-500">{item.platform}</p>
        </div>
      ))}
    </div>
  );
}
