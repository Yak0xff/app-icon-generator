# Google AdSense 设置指南

本文档将指导您如何在 App Icon Generator 项目中设置和使用 Google AdSense 广告。

## 前提条件

1. 您需要拥有一个 Google AdSense 账户。如果没有，请前往 [Google AdSense](https://www.google.com/adsense) 注册。
2. 您的网站必须已经部署，并且可以通过公共 URL 访问。
3. 您的网站必须符合 [Google AdSense 政策](https://support.google.com/adsense/answer/48182)。

## 设置步骤

### 1. 获取 Google AdSense ID

1. 登录您的 Google AdSense 账户。
2. 在 AdSense 控制面板中，找到您的发布商 ID（通常格式为 `ca-pub-xxxxxxxxxxxxxxxx`）。
3. 复制此 ID，稍后将用于配置环境变量。

### 2. 配置环境变量

1. 在项目根目录中，创建或编辑 `.env.local` 文件。
2. 添加以下环境变量：

```
NEXT_PUBLIC_GOOGLE_ADSENSE_ID=ca-pub-xxxxxxxxxxxxxxxx
```

将 `ca-pub-xxxxxxxxxxxxxxxx` 替换为您的实际 AdSense 发布商 ID。

### 3. 创建广告单元

1. 在 AdSense 控制面板中，导航到"广告">"按广告单元"。
2. 点击"创建新广告单元"。
3. 选择适合您网站的广告单元类型（例如，展示广告、信息流广告等）。
4. 为广告单元命名，并配置其设置。
5. 创建广告单元后，复制广告单元 ID（通常是一串数字）。

## 使用方法

本项目提供了三种类型的 AdSense 组件：

### 1. 自动广告

自动广告由 Google 的算法自动放置在您网站的最佳位置。这是最简单的实现方式。

```jsx
import GoogleAdsenseAuto from '@/components/GoogleAdsense';

// 在您的组件或布局中
<GoogleAdsenseAuto />
```

自动广告已经集成到项目的主布局中，无需额外操作。

### 2. 手动放置广告

如果您想在特定位置放置广告，可以使用 `GoogleAdsenseAd` 组件：

```jsx
import { GoogleAdsenseAd } from '@/components/GoogleAdsense';

// 在您的组件中
<GoogleAdsenseAd 
  slot="1234567890"  // 替换为您的广告单元 ID
  format="auto"      // 可选：'auto', 'rectangle', 'horizontal', 'vertical'
  responsive={true}  // 可选：是否响应式
  style={{ minHeight: '100px' }} // 可选：自定义样式
/>
```

### 3. 文章内广告

文章内广告专为文章内容设计，可以自然地融入文本段落之间：

```jsx
import { GoogleAdsenseInArticle } from '@/components/GoogleAdsense';

// 在您的文章组件中
<p>第一段文本...</p>
<GoogleAdsenseInArticle slot="5678901234" /> // 替换为您的广告单元 ID
<p>第二段文本...</p>
```

## 示例组件

项目中包含了一个 `AdExample` 组件，展示了不同类型广告的使用方法。您可以在任何页面中导入并使用此组件：

```jsx
import AdExample from '@/components/AdExample';

// 在您的页面组件中
<AdExample />
```

请确保将示例中的广告单元 ID 替换为您自己的 ID。

## 注意事项

1. **开发环境**：在开发环境中，广告可能不会显示或可能显示测试广告。这是正常的，因为 Google AdSense 通常只在生产环境中加载真实广告。

2. **广告加载时间**：广告加载可能需要一些时间，特别是在首次访问时。

3. **广告屏蔽器**：用户使用广告屏蔽器可能会阻止广告显示。

4. **广告政策**：确保您的网站内容符合 Google AdSense 政策，否则可能会被拒绝或账户被暂停。

5. **广告位置**：避免在同一页面上放置过多广告，这可能会影响用户体验并违反 AdSense 政策。

6. **响应式设计**：确保广告在不同设备上都能正常显示。

## 故障排除

如果广告未正确显示，请检查以下几点：

1. 确认环境变量 `NEXT_PUBLIC_GOOGLE_ADSENSE_ID` 已正确设置。
2. 检查浏览器控制台是否有任何错误消息。
3. 确认您的 AdSense 账户已获批准，并且网站已通过验证。
4. 确保广告单元 ID 正确。
5. 如果使用自动广告，确保没有其他代码干扰 AdSense 的自动放置。

## 相关资源

- [Google AdSense 帮助中心](https://support.google.com/adsense)
- [AdSense 政策中心](https://support.google.com/adsense/answer/48182)
- [Next.js 文档](https://nextjs.org/docs) 