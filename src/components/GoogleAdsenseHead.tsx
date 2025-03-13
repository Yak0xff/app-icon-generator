import Script from 'next/script';

// 用于在head标签中加载Google Adsense代码的服务器组件
export default function GoogleAdsenseHead() {
  const adsenseId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID;
  
  if (!adsenseId) {
    return null;
  }
  
  return (
    <Script
      id="google-adsense"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
} 