import { Locale } from '@/i18n';

// 定义基础元数据类型
export type SeoMetadata = {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
};

// 为每种语言定义元数据
export const metadata: Record<Locale, SeoMetadata> = {
  'zh-CN': {
    title: 'App Icon Generator - 一键生成 AppStore 和 Google Play 应用图标',
    description: '免费在线工具，一键生成 AppStore 和 Google Play 应用商店所需的所有尺寸图标，支持 PNG、JPG、SVG 格式',
    keywords: ['应用图标生成器', 'App Icon', 'AppStore 图标', 'Google Play 图标', '图标生成工具', '应用开发'],
    ogTitle: 'App Icon Generator - 一键生成应用图标',
    ogDescription: '免费在线工具，一键生成 AppStore 和 Google Play 应用商店所需的所有尺寸图标',
    ogImage: '/og-image-zh-CN.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'App Icon Generator - 一键生成应用图标',
    twitterDescription: '免费在线工具，一键生成 AppStore 和 Google Play 应用商店所需的所有尺寸图标',
    twitterImage: '/twitter-image-zh-CN.png'
  },
  'zh-TW': {
    title: 'App Icon Generator - 一鍵生成 AppStore 和 Google Play 應用圖標',
    description: '免費在線工具，一鍵生成 AppStore 和 Google Play 應用商店所需的所有尺寸圖標，支持 PNG、JPG、SVG 格式',
    keywords: ['應用圖標生成器', 'App Icon', 'AppStore 圖標', 'Google Play 圖標', '圖標生成工具', '應用開發'],
    ogTitle: 'App Icon Generator - 一鍵生成應用圖標',
    ogDescription: '免費在線工具，一鍵生成 AppStore 和 Google Play 應用商店所需的所有尺寸圖標',
    ogImage: '/og-image-zh-TW.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'App Icon Generator - 一鍵生成應用圖標',
    twitterDescription: '免費在線工具，一鍵生成 AppStore 和 Google Play 應用商店所需的所有尺寸圖標',
    twitterImage: '/twitter-image-zh-TW.png'
  },
  'en': {
    title: 'App Icon Generator - Create AppStore and Google Play Icons in One Click',
    description: 'Free online tool to generate all required icon sizes for AppStore and Google Play with a single click. Supports PNG, JPG, SVG formats.',
    keywords: ['app icon generator', 'app icon', 'appstore icons', 'google play icons', 'icon generator', 'app development'],
    ogTitle: 'App Icon Generator - Create App Icons in One Click',
    ogDescription: 'Free online tool to generate all required icon sizes for AppStore and Google Play with a single click',
    ogImage: '/og-image-en.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'App Icon Generator - Create App Icons in One Click',
    twitterDescription: 'Free online tool to generate all required icon sizes for AppStore and Google Play with a single click',
    twitterImage: '/twitter-image-en.png'
  },
  'ja': {
    title: 'App Icon Generator - AppStore と Google Play のアイコンを一クリックで作成',
    description: 'AppStore と Google Play に必要なすべてのサイズのアイコンを一クリックで生成する無料オンラインツール。PNG、JPG、SVG形式をサポート。',
    keywords: ['アプリアイコンジェネレーター', 'アプリアイコン', 'AppStore アイコン', 'Google Play アイコン', 'アイコン生成ツール', 'アプリ開発'],
    ogTitle: 'App Icon Generator - アプリアイコンを一クリックで作成',
    ogDescription: 'AppStore と Google Play に必要なすべてのサイズのアイコンを一クリックで生成する無料オンラインツール',
    ogImage: '/og-image-ja.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'App Icon Generator - アプリアイコンを一クリックで作成',
    twitterDescription: 'AppStore と Google Play に必要なすべてのサイズのアイコンを一クリックで生成する無料オンラインツール',
    twitterImage: '/twitter-image-ja.png'
  },
  'ko': {
    title: 'App Icon Generator - AppStore 및 Google Play 아이콘을 원클릭으로 생성',
    description: 'AppStore 및 Google Play에 필요한 모든 크기의 아이콘을 원클릭으로 생성하는 무료 온라인 도구. PNG, JPG, SVG 형식 지원.',
    keywords: ['앱 아이콘 생성기', '앱 아이콘', 'AppStore 아이콘', 'Google Play 아이콘', '아이콘 생성 도구', '앱 개발'],
    ogTitle: 'App Icon Generator - 앱 아이콘을 원클릭으로 생성',
    ogDescription: 'AppStore 및 Google Play에 필요한 모든 크기의 아이콘을 원클릭으로 생성하는 무료 온라인 도구',
    ogImage: '/og-image-ko.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'App Icon Generator - 앱 아이콘을 원클릭으로 생성',
    twitterDescription: 'AppStore 및 Google Play에 필요한 모든 크기의 아이콘을 원클릭으로 생성하는 무료 온라인 도구',
    twitterImage: '/twitter-image-ko.png'
  },
  'fr': {
    title: 'App Icon Generator - Créez des icônes pour AppStore et Google Play en un clic',
    description: 'Outil en ligne gratuit pour générer toutes les tailles d\'icônes requises pour AppStore et Google Play en un seul clic. Prend en charge les formats PNG, JPG, SVG.',
    keywords: ['générateur d\'icônes d\'application', 'icône d\'application', 'icônes AppStore', 'icônes Google Play', 'générateur d\'icônes', 'développement d\'applications'],
    ogTitle: 'App Icon Generator - Créez des icônes d\'application en un clic',
    ogDescription: 'Outil en ligne gratuit pour générer toutes les tailles d\'icônes requises pour AppStore et Google Play en un seul clic',
    ogImage: '/og-image-fr.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'App Icon Generator - Créez des icônes d\'application en un clic',
    twitterDescription: 'Outil en ligne gratuit pour générer toutes les tailles d\'icônes requises pour AppStore et Google Play en un seul clic',
    twitterImage: '/twitter-image-fr.png'
  },
  'es': {
    title: 'App Icon Generator - Crea iconos para AppStore y Google Play con un clic',
    description: 'Herramienta en línea gratuita para generar todos los tamaños de iconos requeridos para AppStore y Google Play con un solo clic. Compatible con formatos PNG, JPG, SVG.',
    keywords: ['generador de iconos de aplicaciones', 'icono de aplicación', 'iconos de AppStore', 'iconos de Google Play', 'generador de iconos', 'desarrollo de aplicaciones'],
    ogTitle: 'App Icon Generator - Crea iconos de aplicaciones con un clic',
    ogDescription: 'Herramienta en línea gratuita para generar todos los tamaños de iconos requeridos para AppStore y Google Play con un solo clic',
    ogImage: '/og-image-es.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'App Icon Generator - Crea iconos de aplicaciones con un clic',
    twitterDescription: 'Herramienta en línea gratuita para generar todos los tamaños de iconos requeridos para AppStore y Google Play con un solo clic',
    twitterImage: '/twitter-image-es.png'
  }
}; 