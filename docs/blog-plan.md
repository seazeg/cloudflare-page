# Markdown 博客系统详细计划

## 一、技术选型

| 技术 | 用途 | 说明 |
|------|------|------|
| **gray-matter** | 解析 Markdown frontmatter | 提取标题、日期、封面等元数据 |
| **remark** | Markdown 转 HTML | 插件化架构，支持扩展 |
| **remark-html** | HTML 转换 | 配合 remark 使用 |
| **reading-time** | 阅读时间估算 | 提升用户体验 |
| **next-mdx-remote** | MDX 支持（可选） | 支持组件嵌入 |

---

## 二、文件结构

```
surmox.net/
├── content/
│   └── blog/
│       ├── 2025-01-15-shopify-vs-independent.md
│       ├── 2025-01-20-wechat-mini-program-guide.md
│       └── 2025-02-01-cross-border-ecommerce-tips.md
│
├── src/
│   ├── lib/
│   │   └── blog.ts              # 博客工具函数
│   │
│   ├── app/
│   │   └── blog/
│   │       ├── page.tsx         # 博客列表页
│   │       └── [slug]/
│   │           └── page.tsx     # 博客详情页
│   │
│   └── components/
│       └── sections/
│           └── Blog.tsx         # 首页博客组件
│
└── public/
    └── images/
        └── blog/                # 博客图片
```

---

## 三、Markdown 文件格式

```markdown
---
title: "Shopify vs 独立站：哪个更适合跨境电商？"
date: "2025-01-15"
cover: "/images/blog/shopify-vs-independent.jpg"
excerpt: "深度对比 Shopify 和自建独立站的优缺点，帮你做出最佳选择。"
author: "跃迁团队"
category: "独立站"
tags: ["Shopify", "独立站", "跨境电商"]
featured: true
---

## 为什么选择独立站？

跨境电商卖家常常面临一个选择：使用 Shopify 还是自建独立站？

### Shopify 的优势

1. 开箱即用，无需技术背景
2. 丰富的主题和插件生态
3. 完善的支付和物流集成

### 独立站的优势

1. **成本更低**：一次付费，无月租无抽成
2. **完全掌控**：数据、设计、功能全部自主
3. **灵活定制**：不受平台限制

## 结论

对于中小卖家，独立站是更经济实惠的选择...
```

---

## 四、实现步骤

### 阶段一：基础设施（30分钟）

| 任务 | 文件 | 说明 |
|------|------|------|
| 1. 安装依赖 | `package.json` | gray-matter, remark, remark-html |
| 2. 创建工具函数 | `src/lib/blog.ts` | 读取/解析 Markdown |
| 3. 创建内容目录 | `content/blog/` | 存放 Markdown 文件 |

### 阶段二：博客列表页（20分钟）

| 任务 | 文件 | 说明 |
|------|------|------|
| 4. 更新列表页 | `src/app/blog/page.tsx` | 展示所有博客 |
| 5. 创建卡片组件 | `src/components/BlogCard.tsx` | 博客卡片样式 |

### 阶段三：博客详情页（20分钟）

| 任务 | 文件 | 说明 |
|------|------|------|
| 6. 更新详情页 | `src/app/blog/[slug]/page.tsx` | 动态路由渲染 |
| 7. 创建样式 | `src/styles/blog.css` | 博客内容样式 |

### 阶段四：首页集成（10分钟）

| 任务 | 文件 | 说明 |
|------|------|------|
| 8. 更新首页组件 | `src/components/sections/Blog.tsx` | 读取真实数据 |

### 阶段五：SEO 优化（10分钟）

| 任务 | 文件 | 说明 |
|------|------|------|
| 9. 添加 metadata | `src/app/blog/[slug]/page.tsx` | 动态 SEO 元数据 |
| 10. 生成 sitemap | `src/app/sitemap.ts` | 博客链接收录 |

---

## 五、核心代码预览

### 1. 博客工具函数 (`src/lib/blog.ts`)

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogDirectory = path.join(process.cwd(), 'content/blog');

// 获取所有博客列表
export function getAllPosts() {
  const files = fs.readdirSync(blogDirectory);
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = file.replace(/\.md$/, '');
      const content = fs.readFileSync(path.join(blogDirectory, file), 'utf8');
      const { data } = matter(content);
      return { slug, ...data };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}

// 获取单篇博客
export async function getPostBySlug(slug: string) {
  const filePath = path.join(blogDirectory, `${slug}.md`);
  const content = fs.readFileSync(filePath, 'utf8');
  const { data, content: markdown } = matter(content);
  const processedContent = await remark().use(html).process(markdown);
  return { slug, ...data, content: processedContent.toString() };
}
```

### 2. 博客列表页 (`src/app/blog/page.tsx`)

```typescript
import { getAllPosts } from '@/lib/blog';
import { BlogCard } from '@/components/BlogCard';

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main>
      <h1>博客文章</h1>
      <div className="blog-grid">
        {posts.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
```

### 3. 博客详情页 (`src/app/blog/[slug]/page.tsx`)

```typescript
import { getPostBySlug, getAllPosts } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }) {
  const post = await getPostBySlug(params.slug);
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
```

---

## 六、功能特性

| 功能 | 状态 | 说明 |
|------|------|------|
| ✅ Markdown 解析 | 支持 | 标题、段落、列表、代码块 |
| ✅ Frontmatter 元数据 | 支持 | 标题、日期、封面、分类 |
| ✅ 静态生成 (SSG) | 支持 | 构建时生成，访问快 |
| ✅ SEO 友好 | 支持 | 动态 meta 标签 |
| ✅ 代码高亮 | 可选 | 使用 prism 或 shiki |
| ✅ 图片优化 | 可选 | Next.js Image 组件 |
| ✅ 阅读时间 | 可选 | reading-time 库 |
| ✅ 目录导航 | 可选 | 自动生成 TOC |

---

## 七、示例博客文章

1. **Shopify vs 独立站：哪个更适合跨境电商？**
2. **微信小程序开发指南：从零到上线**
3. **跨境电商独立站 SEO 优化技巧**
4. **如何选择合适的建站方案？**
5. **2025 年跨境电商趋势分析**

---

## 八、实施清单

- [ ] 安装依赖包 (gray-matter, remark, remark-html)
- [ ] 创建 `content/blog/` 目录
- [ ] 创建 `src/lib/blog.ts` 工具函数
- [ ] 创建示例博客文章 (3-5篇)
- [ ] 更新博客列表页 `src/app/blog/page.tsx`
- [ ] 更新博客详情页 `src/app/blog/[slug]/page.tsx`
- [ ] 更新首页博客组件 `src/components/sections/Blog.tsx`
- [ ] 添加博客内容样式
- [ ] 配置 SEO 元数据
- [ ] 测试构建和部署
