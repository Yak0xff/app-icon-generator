'use client';

import { GoogleAdsenseAd, GoogleAdsenseInArticle } from './GoogleAdsense';

export default function AdExample() {
  return (
    <div className="space-y-8 my-8">
      {/* 横幅广告示例 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2">横幅广告示例</h3>
        <GoogleAdsenseAd 
          slot="1234567890" 
          format="horizontal"
          style={{ minHeight: '90px' }}
        />
      </div>
      
      {/* 矩形广告示例 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2">矩形广告示例</h3>
        <GoogleAdsenseAd 
          slot="0987654321" 
          format="rectangle"
          style={{ minHeight: '250px' }}
        />
      </div>
      
      {/* 文章内广告示例 */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2">文章内广告示例</h3>
        <div className="prose max-w-none">
          <p>这是一段示例文本，展示文章内广告的使用方式。文章内广告通常放置在段落之间，提供更自然的广告体验。</p>
          <p>这是第二段文本，在这段文本之后我们将放置一个文章内广告。</p>
          
          <GoogleAdsenseInArticle slot="5678901234" />
          
          <p>这是广告后的第三段文本。文章内广告通常会根据内容自动调整大小和格式，以提供更好的用户体验。</p>
          <p>最后一段文本，用于展示完整的文章结构。</p>
        </div>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg text-sm">
        <p className="font-medium">注意事项：</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>请将 "slot" 属性替换为您的实际广告单元 ID</li>
          <li>广告加载可能需要一些时间，特别是在首次访问时</li>
          <li>确保在 .env.local 文件中设置了 NEXT_PUBLIC_GOOGLE_ADSENSE_ID</li>
          <li>在开发环境中，广告可能不会显示或可能显示测试广告</li>
        </ul>
      </div>
    </div>
  );
} 