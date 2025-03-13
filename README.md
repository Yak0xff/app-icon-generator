# App Icon Generator

一个现代化的Web应用，用于自动生成AppStore和Google Play应用商店所需的各种尺寸App图标。

## 功能特点

- 简单易用的拖放上传界面
- 实时预览不同尺寸的应用图标
- 一键生成AppStore所需的所有iOS和macOS图标尺寸
- 一键生成Google Play所需的所有Android图标尺寸
- 以ZIP格式打包下载，包含所有尺寸的图标

## 技术栈

- Next.js - React框架
- TypeScript - 类型安全的JavaScript
- Tailwind CSS - 实用优先的CSS框架
- React Dropzone - 文件上传组件
- JSZip - 生成ZIP文件
- File Saver - 客户端文件保存

## 开始使用

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm run start
```

## 使用方法

1. 上传一张高质量的图片（建议尺寸1024×1024像素）
2. 查看不同尺寸的图标预览
3. 点击"生成所有尺寸图标"按钮
4. 下载AppStore或Google Play图标包

## 支持的图标尺寸

### AppStore图标尺寸
- 1024×1024 (App Store)
- 180×180 (iPhone)
- 167×167 (iPad Pro)
- 152×152 (iPad)
- 120×120 (iPhone)
- 以及更多...

### Google Play图标尺寸
- 512×512 (Play Store)
- 192×192 (Android)
- 144×144 (Android)
- 96×96 (Android)
- 以及更多...
