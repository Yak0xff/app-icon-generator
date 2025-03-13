'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface AdProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  style?: React.CSSProperties;
  responsive?: boolean;
}

// 自动广告组件
export function GoogleAdsenseAuto() {
  const adsenseId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID;
  
  if (!adsenseId) {
    return null;
  }
  
  return (
    <>
      <Script
        id="google-adsense"
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
    </>
  );
}

// 手动放置广告组件
export function GoogleAdsenseAd({ slot, format = 'auto', style, responsive = true }: AdProps) {
  const adsenseId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID;
  
  useEffect(() => {
    // 当组件挂载后尝试加载广告
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);
  
  if (!adsenseId || !slot) {
    return null;
  }
  
  return (
    <div style={{ textAlign: 'center', overflow: 'hidden', ...style }}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          ...(responsive ? {} : { width: '100%', height: '100%' }),
        }}
        data-ad-client={adsenseId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}

// 内容广告组件 - 适合放在文章中间
export function GoogleAdsenseInArticle({ slot, style }: Omit<AdProps, 'format' | 'responsive'>) {
  const adsenseId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID;
  
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);
  
  if (!adsenseId || !slot) {
    return null;
  }
  
  return (
    <div style={{ textAlign: 'center', overflow: 'hidden', margin: '20px 0', ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client={adsenseId}
        data-ad-slot={slot}
      />
    </div>
  );
}

// 默认导出自动广告组件
export default GoogleAdsenseAuto; 