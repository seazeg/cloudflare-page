# 效果图展示模块详细计划

## 一、模块概述

效果图展示模块用于展示公司的设计能力和创意水平，通过灯箱形式展示设计稿/原型，帮助潜在客户直观了解服务质量，激发合作意向。

**核心定位**：展示设计能力，而非销售模板

---

## 二、功能需求

### 核心功能

| 功能 | 说明 |
|------|------|
| 效果图列表页 | 展示所有效果图，支持多维度筛选 |
| 灯箱查看 | 点击效果图打开灯箱，支持多图浏览 |
| 分类筛选 | 按服务类型、行业、风格筛选 |
| 数据管理 | 使用 JSON 文件管理效果图数据 |

### 效果图数据结构

```typescript
interface DesignShowcase {
  id: string;                    // 唯一ID
  title: string;                 // 效果图标题
  serviceType: '独立站' | '小程序' | 'APP';  // 服务类型
  industry: string;              // 行业
  style: string;                 // 风格
  cover: string;                 // 封面图（列表展示用）
  images: string[];              // 灯箱展示的多张大图
  tags: string[];                // 显示用标签组合
  featured: boolean;             // 是否精选
  date: string;                  // 添加日期
}
```

---

## 三、技术选型

| 技术 | 用途 | 说明 |
|------|------|------|
| **yet-another-react-lightbox** | 灯箱组件 | 轻量级、TypeScript支持、无依赖 |
| **JSON 文件** | 数据存储 | 简单易维护 |
| **Next.js SSG** | 静态生成 | 构建时生成，访问快 |

### 灯箱插件选择理由

**yet-another-react-lightbox** 优势：
- ✅ 轻量级（~10KB）
- ✅ TypeScript 原生支持
- ✅ 无外部依赖
- ✅ 支持 Next.js
- ✅ 支持手势滑动
- ✅ 支持键盘导航（ESC关闭、左右箭头切换）
- ✅ 支持图片缩放

---

## 四、文件结构

```
surmox.net/
├── data/
│   └── designs/
│       ├── independent-site-01.json    # 独立站效果图
│       ├── independent-site-02.json
│       ├── mini-program-01.json        # 小程序效果图
│       ├── mini-program-02.json
│       ├── app-01.json                 # APP效果图
│       └── app-02.json
│
├── src/
│   ├── lib/
│   │   └── designs.ts                  # 效果图工具函数
│   │
│   ├── app/
│   │   └── designs/
│   │       └── page.tsx                # 效果图列表页
│   │
│   └── components/
│       └── sections/
│           ├── DesignShowcase.tsx      # 效果图展示组件
│           └── DesignLightbox.tsx      # 灯箱组件封装
│
└── public/
    └── images/
        └── designs/                    # 效果图图片
            ├── independent-site-01/
│           │   ├── cover.jpg
│           │   ├── screenshot-1.jpg
│           │   └── screenshot-2.jpg
            └── ...
```

---

## 五、页面设计

### 1. 效果图列表页 (`/designs`)

```
┌─────────────────────────────────────────────────────────┐
│  页面标题                                                │
│  设计效果图                                              │
│  探索我们的设计能力，为你的项目寻找灵感                    │
├─────────────────────────────────────────────────────────┤
│  主分类（服务类型）                                       │
│  [全部] [独立站] [小程序] [APP]                          │
├─────────────────────────────────────────────────────────┤
│  筛选标签                                                │
│  行业: [电商] [餐饮] [教育] [家居] [服装] [美容] [更多▼] │
│  风格: [简约] [商务] [时尚] [科技] [复古] [活泼] [更多▼] │
├─────────────────────────────────────────────────────────┤
│  效果图网格                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │  [封面图]    │  │  [封面图]    │  │  [封面图]    │     │
│  │  标题       │  │  标题       │  │  标题       │     │
│  │  标签       │  │  标签       │  │  标签       │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
│                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │  ...        │  │  ...        │  │  ...        │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
├─────────────────────────────────────────────────────────┤
│  [加载更多]                                              │
├─────────────────────────────────────────────────────────┤
│  免责声明                                                │
│  * 效果图仅供参考，实际项目以定制为准                     │
└─────────────────────────────────────────────────────────┘
```

### 2. 灯箱弹窗

```
┌─────────────────────────────────────────────────────────┐
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│  ▓                                                   ▓  │
│  ▓   ×                                               ▓  │
│  ▓                                                   ▓  │
│  ▓        ┌─────────────────────────────────┐       ▓  │
│  ▓        │                                 │       ▓  │
│  ▓        │                                 │       ▓  │
│  ▓   ◀    │         效果图大图               │    ▶  ▓  │
│  ▓        │      (支持手势滑动/缩放)          │       ▓  │
│  ▓        │                                 │       ▓  │
│  ▓        │                                 │       ▓  │
│  ▓        └─────────────────────────────────┘       ▓  │
│  ▓                                                   ▓  │
│  ▓        标题: 某电商独立站设计                       ▓  │
│  ▓        标签: 独立站 · 电商 · 简约                  ▓  │
│  ▓                                                   ▓  │
│  ▓              ●  ○  ○  (轮播指示器)                 ▓  │
│  ▓                                                   ▓  │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
└─────────────────────────────────────────────────────────┘
```

**灯箱交互**：
- 点击效果图封面 → 打开灯箱
- 左右滑动/箭头键 → 切换图片
- 双击/捏合 → 缩放图片
- 点击关闭按钮/ESC/点击背景 → 关闭灯箱

---

## 六、示例数据

### 效果图 1: 某电商独立站

```json
{
  "id": "ecommerce-independent-site",
  "title": "某跨境电商独立站",
  "serviceType": "独立站",
  "industry": "电商",
  "style": "简约",
  "cover": "/images/designs/ecommerce-independent-site/cover.jpg",
  "images": [
    "/images/designs/ecommerce-independent-site/home.jpg",
    "/images/designs/ecommerce-independent-site/product.jpg",
    "/images/designs/ecommerce-independent-site/checkout.jpg"
  ],
  "tags": ["独立站", "电商", "简约"],
  "featured": true,
  "date": "2024-12-15"
}
```

### 效果图 2: 某餐饮小程序

```json
{
  "id": "restaurant-mini-program",
  "title": "某餐饮品牌小程序",
  "serviceType": "小程序",
  "industry": "餐饮",
  "style": "活泼",
  "cover": "/images/designs/restaurant-mini-program/cover.jpg",
  "images": [
    "/images/designs/restaurant-mini-program/home.jpg",
    "/images/designs/restaurant-mini-program/menu.jpg",
    "/images/designs/restaurant-mini-program/order.jpg"
  ],
  "tags": ["小程序", "餐饮", "活泼"],
  "featured": true,
  "date": "2024-11-20"
}
```

### 效果图 3: 某教育APP

```json
{
  "id": "education-app",
  "title": "某在线教育APP",
  "serviceType": "APP",
  "industry": "教育",
  "style": "科技",
  "cover": "/images/designs/education-app/cover.jpg",
  "images": [
    "/images/designs/education-app/home.jpg",
    "/images/designs/education-app/course.jpg",
    "/images/designs/education-app/profile.jpg"
  ],
  "tags": ["APP", "教育", "科技"],
  "featured": false,
  "date": "2024-10-10"
}
```

---

## 七、分类体系

### 服务类型（主分类）

| 类型 | 说明 |
|------|------|
| 独立站 | 外贸独立站、品牌官网 |
| 小程序 | 微信小程序、商城小程序 |
| APP | iOS APP、Android APP |

### 行业标签

- 电商、餐饮、教育、家居、服装、美容、旅游、金融、医疗、其他

### 风格标签

- 简约、商务、时尚、科技、复古、活泼、高端、清新

---

## 八、实施步骤

### 阶段一：安装依赖（5分钟）

```bash
npm install yet-another-react-lightbox
```

### 阶段二：数据层（20分钟）

| 任务 | 文件 | 说明 |
|------|------|------|
| 1. 创建数据目录 | `data/designs/` | 存放效果图 JSON 文件 |
| 2. 创建工具函数 | `src/lib/designs.ts` | 读取/筛选效果图数据 |
| 3. 创建示例数据 | `data/designs/*.json` | 6 个示例效果图 |

### 阶段三：组件开发（40分钟）

| 任务 | 文件 | 说明 |
|------|------|------|
| 4. 创建灯箱组件 | `src/components/DesignLightbox.tsx` | 封装 yet-another-react-lightbox |
| 5. 创建卡片组件 | `src/components/DesignCard.tsx` | 效果图卡片展示 |
| 6. 创建筛选组件 | `src/components/DesignFilter.tsx` | 分类筛选栏 |

### 阶段四：页面开发（30分钟）

| 任务 | 文件 | 说明 |
|------|------|------|
| 7. 创建列表页 | `src/app/designs/page.tsx` | 效果图列表页 |
| 8. 添加筛选逻辑 | `src/app/designs/page.tsx` | 分类筛选功能 |
| 9. SEO 优化 | `src/app/designs/page.tsx` | Meta 标签优化 |

### 阶段五：样式优化（15分钟）

| 任务 | 文件 | 说明 |
|------|------|------|
| 10. 添加样式 | `src/app/globals.css` | 效果图页面样式 |
| 11. 灯箱样式 | `src/app/globals.css` | 灯箱自定义样式 |
| 12. 响应式适配 | `src/app/globals.css` | 移动端适配 |

### 阶段六：测试构建（10分钟）

| 任务 | 说明 |
|------|------|
| 13. 功能测试 | 筛选、灯箱、图片切换 |
| 14. 构建测试 | `npm run build` |
| 15. 部署验证 | 线上验证 |

---

## 九、路由规划

| 路由 | 页面 | 说明 |
|------|------|------|
| `/designs` | 效果图列表页 | 展示所有效果图 |
| `/designs?type=独立站` | 筛选结果 | 按服务类型筛选 |
| `/designs?industry=电商` | 筛选结果 | 按行业筛选 |
| `/designs?style=简约` | 筛选结果 | 按风格筛选 |

---

## 十、代码示例

### 灯箱组件封装

```tsx
// src/components/DesignLightbox.tsx
'use client';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/plugins/counter.css';

interface DesignLightboxProps {
  open: boolean;
  close: () => void;
  images: string[];
  title: string;
  tags: string[];
  index: number;
}

export function DesignLightbox({
  open,
  close,
  images,
  title,
  tags,
  index,
}: DesignLightboxProps) {
  const slides = images.map(src => ({ src }));

  return (
    <Lightbox
      open={open}
      close={close}
      slides={slides}
      index={index}
      plugins={[Zoom, Counter]}
      counter={{ container: { style: { top: 'unset', bottom: 0 } } }}
      render={{
        slide: ({ slide }) => (
          <div className="design-lightbox-content">
            <img src={slide.src} alt={title} />
            <div className="design-lightbox-info">
              <h3>{title}</h3>
              <p>{tags.join(' · ')}</p>
            </div>
          </div>
        ),
      }}
    />
  );
}
```

### 效果图卡片组件

```tsx
// src/components/DesignCard.tsx
'use client';

import { useState } from 'react';
import { DesignLightbox } from './DesignLightbox';
import type { DesignShowcase } from '@/lib/designs';

interface DesignCardProps {
  design: DesignShowcase;
}

export function DesignCard({ design }: DesignCardProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div 
        className="design-card"
        onClick={() => {
          setIndex(0);
          setOpen(true);
        }}
      >
        <div className="design-card-image">
          <img src={design.cover} alt={design.title} />
          <div className="design-card-overlay">
            <span>点击查看</span>
          </div>
        </div>
        <div className="design-card-info">
          <h4>{design.title}</h4>
          <p>{design.tags.join(' · ')}</p>
        </div>
      </div>

      <DesignLightbox
        open={open}
        close={() => setOpen(false)}
        images={design.images}
        title={design.title}
        tags={design.tags}
        index={index}
      />
    </>
  );
}
```

---

## 十一、样式参考

```css
/* 效果图卡片 */
.design-card {
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.design-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}

.design-card-image {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.design-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.design-card:hover .design-card-image img {
  transform: scale(1.05);
}

.design-card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.design-card:hover .design-card-overlay {
  opacity: 1;
}

.design-card-overlay span {
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: 2px solid #fff;
  border-radius: 30px;
}

.design-card-info {
  padding: 20px;
  background: #fff;
}

.design-card-info h4 {
  font-size: 18px;
  margin-bottom: 8px;
  color: #1a1a1a;
}

.design-card-info p {
  font-size: 14px;
  color: #666;
}

/* 灯箱信息 */
.design-lightbox-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.design-lightbox-content img {
  max-height: 70vh;
  object-fit: contain;
}

.design-lightbox-info {
  margin-top: 20px;
  text-align: center;
  color: #fff;
}

.design-lightbox-info h3 {
  font-size: 20px;
  margin-bottom: 8px;
}

.design-lightbox-info p {
  font-size: 14px;
  opacity: 0.8;
}
```

---

## 十二、与案例模块的区别

| 对比项 | 案例模块 | 效果图展示 |
|--------|----------|------------|
| **内容** | 真实项目 | 设计稿/原型 |
| **可信度** | 高（真实数据） | 中（展示能力） |
| **目的** | 证明实力 | 激发灵感 |
| **更新频率** | 低（项目完成） | 高（随时添加） |
| **客户心理** | "他们做过类似项目" | "他们可以做出这种效果" |
| **数据量** | 少而精 | 多而全 |
| **展示方式** | 详情页 | 灯箱弹窗 |

---

## 十三、实施清单

- [ ] 安装 `yet-another-react-lightbox`
- [ ] 创建 `data/designs/` 目录
- [ ] 创建 `src/lib/designs.ts` 工具函数
- [ ] 创建 6 个示例效果图 JSON 文件
- [ ] 创建灯箱组件 `DesignLightbox.tsx`
- [ ] 创建效果图卡片组件 `DesignCard.tsx`
- [ ] 创建筛选组件 `DesignFilter.tsx`
- [ ] 创建效果图列表页 `src/app/designs/page.tsx`
- [ ] 添加筛选功能
- [ ] 添加效果图页面样式
- [ ] 添加灯箱自定义样式
- [ ] 添加响应式适配
- [ ] 测试构建和部署

---

## 十四、后续扩展

### 可选功能

| 功能 | 优先级 | 说明 |
|------|--------|------|
| 收藏功能 | 低 | 用户收藏喜欢的效果图 |
| 分享功能 | 低 | 分享效果图到社交媒体 |
| 相关推荐 | 中 | 根据当前效果图推荐相似风格 |
| 一键咨询 | 高 | 针对当前效果图直接咨询 |

---

计划完成！需要开始实施吗？ 🚀
