'use client';

import { useTranslations } from 'next-intl';

interface GenerateButtonProps {
  onGenerate: () => void;
  isGenerating: boolean;
  isGenerated: boolean;
  disabled: boolean;
}

export default function GenerateButton({ 
  onGenerate, 
  isGenerating, 
  isGenerated,
  disabled 
}: GenerateButtonProps) {
  const t = useTranslations('generate');
  
  return (
    <div>
      <button
        onClick={onGenerate}
        disabled={disabled || isGenerating}
        className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-colors duration-200 ${
          disabled
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : isGenerating
            ? 'bg-primary-600 text-white cursor-wait'
            : isGenerated
            ? 'bg-green-600 hover:bg-green-700 text-white'
            : 'bg-primary-600 hover:bg-primary-700 text-white'
        }`}
      >
        {isGenerating ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {t('generating')}
          </div>
        ) : isGenerated ? (
          t('regenerate')
        ) : (
          t('button')
        )}
      </button>
      
      {!isGenerating && !isGenerated && (
        <p className="text-sm text-gray-500 text-center mt-2">
          {t('description')}
        </p>
      )}
    </div>
  );
}
