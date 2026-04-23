# 🌍 SurmoX 全站国际化实施计划

> 更新日期: 2026-04-22
> 目标语言: 中文 (zh) + 英文 (en)

---

## 📋 实施进度

| 阶段 | 状态 | 完成日期 |
|------|------|----------|
| 阶段一：基础架构 | ✅ 已完成 | 2026-04-22 |
| 阶段二：布局国际化 | ✅ 已完成 | 2026-04-22 |
| 阶段三：页面迁移 | ✅ 已完成 | 2026-04-22 |
| 阶段四：动态内容国际化 | ⏳ 待开始 | - |
| 阶段五：SEO & 优化 | ⏳ 待开始 | - |
| 阶段六：测试 & 部署 | ⏳ 待开始 | - |

---

## 🔧 问题修复记录 (2026-04-22)

### 问题 1: `useTranslations` 上下文错误
**错误信息**: `Failed to call useTranslations because the context from NextIntlClientProvider was not found`

**原因**: 根页面 `src/app/page.tsx` 不在 `[locale]` 路由组内，无法访问国际化上下文

**解决方案**: 
- 更新 `src/app/page.tsx` 为重定向到默认语言
- 创建 `src/app/[locale]/page.tsx` 作为实际首页

### 问题 2: Next.js 16 异步 params API
**错误信息**: `params is a Promise and must be unwrapped with await or React.use()`

**原因**: Next.js 16 中 `params` 变为异步 API，需要使用 `await` 解包

**解决方案**: 更新 `src/app/[locale]/layout.tsx`:
```typescript
// 修改前
interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

// 修改后
interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

// 使用 await 解包
const { locale } = await params;
```

### 问题 3: 旧页面文件冲突
**错误信息**: 构建时 `/about` 路由冲突

**原因**: 旧的 `src/app/about/page.tsx` 与新的 `[locale]/about/page.tsx` 冲突

**解决方案**: 删除所有旧页面目录:
```bash
rm -rf src/app/about src/app/blog src/app/chatbot src/app/contact \
       src/app/designs src/app/faq src/app/features src/app/integrations \
       src/app/pricing src/app/services src/app/team
```

### 问题 4: next-intl 配置文件缺失
**错误信息**: `Couldn't find next-intl config file`

**原因**: next-intl v4 需要配置文件来指定翻译文件位置

**解决方案**:
1. 创建 `src/i18n.ts` 配置文件:
```typescript
import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, type Locale } from './lib/i18n/config';

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locales.includes(locale as Locale) ? locale : defaultLocale;
  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default,
  };
});
```

2. 更新 `next.config.ts` 添加 next-intl 插件:
```typescript
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');
export default withNextIntl(nextConfig);
```

### 构建状态
✅ **构建成功** - 所有页面正确生成静态文件

### 问题 5: Hydration 错误 - 嵌套 HTML 标签
**错误信息**: `<body> cannot contain a nested <html>`

**原因**: 根 layout.tsx 和 [locale]/layout.tsx 都包含 `<html>` 和 `<body>` 标签，导致嵌套

**解决方案**: 修改根 layout.tsx 只返回 children，不包含 html/body 结构:
```typescript
// src/app/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;  // 直接返回 children，不包裹 html/body
}
```

### 问题 6: DOM 操作错误和样式闪烁
**错误信息**: 
1. `NotFoundError: Failed to execute 'removeChild' on 'Node'`
2. 切换语言时样式失效/闪烁

**原因**: 
1. `<link>` 标签直接放在 head 中，Next.js 和客户端 hydration 管理冲突
2. `styled-jsx` 在语言切换时可能导致样式问题
3. 软路由 (`router.push`) 导致样式重新加载

**解决方案**:
1. 在 `layout.tsx` 的 `<head>` 中使用 `<link>` 标签加载 CSS（服务端渲染）
2. 修改 LanguageSwitcher 使用硬跳转:
```typescript
const handleLanguageChange = (newLocale: Locale) => {
  const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
  window.location.href = newPath;  // 使用硬跳转避免样式闪烁
};
```

3. 移除 `styled-jsx`，改用内联样式

**注意**: Next.js 不支持在 CSS 文件中使用 `@import` 导入 public 目录的文件，必须使用 `<link>` 标签

### 运行状态
✅ **开发服务器正常运行** - `/zh` 和 `/en` 路由可正常访问，无 hydration 错误，语言切换正常，样式加载正常

---

## ✅ 阶段一完成总结 (2026-04-22)

### 已完成任务

| 任务 | 文件路径 | 说明 |
|------|----------|------|
| 安装 next-intl | `package.json` | ✅ 依赖已安装 |
| i18n 配置 | `src/lib/i18n/config.ts` | ✅ 语言配置 |
| i18n 工具函数 | `src/lib/i18n/utils.ts` | ✅ 辅助函数 |
| 路由中间件 | `middleware.ts` | ✅ 自动语言检测 |
| 中文翻译 | `messages/zh.json` | ✅ 完整翻译 |
| 英文翻译 | `messages/en.json` | ✅ 完整翻译 |
| 语言切换组件 | `src/components/layout/LanguageSwitcher.tsx` | ✅ Header 组件 |

### 阶段一产出文件清单

```
surmox.net/
├── middleware.ts                      # 路由中间件
├── messages/
│   ├── zh.json                        # 中文翻译 (完整)
│   └── en.json                        # 英文翻译 (完整)
└── src/
    └── lib/
        └── i18n/
            ├── config.ts              # i18n 配置
            └── utils.ts               # 工具函数
    └── components/
        └── layout/
            └── LanguageSwitcher.tsx   # 语言切换组件
```

---

## ✅ 阶段二完成总结 (2026-04-22)

### 已完成任务

| 任务 | 文件路径 | 说明 |
|------|----------|------|
| 创建路由组目录 | `src/app/[locale]/` | ✅ 所有页面子目录 |
| 国际化根布局 | `src/app/[locale]/layout.tsx` | ✅ NextIntlClientProvider |
| Header 国际化 | `src/components/layout/Header.tsx` | ✅ 导航 + 语言切换器 |
| Footer 国际化 | `src/components/layout/Footer.tsx` | ✅ 多语言链接和内容 |
| MobileMenu 国际化 | `src/components/layout/MobileMenu.tsx` | ✅ 移动端菜单 |

### 阶段二更新文件清单

```
surmox.net/
├── src/
│   ├── app/
│   │   └── [locale]/                  # 新增: 语言路由组
│   │       ├── layout.tsx             # 国际化根布局
│   │       ├── page.tsx               # 待迁移
│   │       ├── about/
│   │       ├── blog/[slug]/
│   │       ├── chatbot/
│   │       ├── contact/
│   │       ├── designs/
│   │       ├── faq/
│   │       ├── features/
│   │       ├── integrations/
│   │       ├── pricing/
│   │       ├── services/[slug]/
│   │       └── team/[slug]/
│   └── components/
│       └── layout/
│           ├── Header.tsx             # 更新: 国际化 + 语言切换器
│           ├── Footer.tsx             # 更新: 国际化
│           ├── MobileMenu.tsx         # 更新: 国际化
│           └── LanguageSwitcher.tsx   # 新增: 语言切换组件
```

### 主要变更

1. **Header 组件**
   - 使用 `useTranslations('navigation')` 获取导航翻译
   - 使用 `useLocale()` 获取当前语言
   - 所有链接添加 `/${locale}` 前缀
   - 集成 `LanguageSwitcher` 组件

2. **Footer 组件**
   - 服务链接、快速链接使用翻译
   - 联系信息根据语言切换
   - 版权信息使用翻译

3. **MobileMenu 组件**
   - 移动端导航菜单国际化
   - Logo 链接添加语言前缀

---

## ✅ 阶段三完成总结 (2026-04-22)

### 已完成任务

| 任务 | 文件路径 | 说明 |
|------|----------|------|
| 根页面重定向 | `src/app/page.tsx` | ✅ 重定向到默认语言 |
| 首页迁移 | `src/app/[locale]/page.tsx` | ✅ 首页组件 |
| 关于页面 | `src/app/[locale]/about/page.tsx` | ✅ AboutClient |
| 联系页面 | `src/app/[locale]/contact/page.tsx` | ✅ Contact 组件 |
| 定价页面 | `src/app/[locale]/pricing/page.tsx` | ✅ Pricing 页面 |
| 服务页面 | `src/app/[locale]/services/page.tsx` | ✅ Services 页面 |
| 服务详情 | `src/app/[locale]/services/[slug]/` | ✅ ServiceDetailClient |
| 博客列表 | `src/app/[locale]/blog/page.tsx` | ✅ Blog 列表 |
| 博客详情 | `src/app/[locale]/blog/[slug]/page.tsx` | ✅ Blog 详情 |
| 效果图 | `src/app/[locale]/designs/page.tsx` | ✅ Designs 页面 |
| 常见问题 | `src/app/[locale]/faq/page.tsx` | ✅ FAQ 页面 |
| 功能特性 | `src/app/[locale]/features/page.tsx` | ✅ Features 页面 |
| 集成页面 | `src/app/[locale]/integrations/page.tsx` | ✅ Integrations 页面 |
| 聊天机器人 | `src/app/[locale]/chatbot/page.tsx` | ✅ Chatbot 页面 |
| 团队详情 | `src/app/[locale]/team/[slug]/` | ✅ TeamDetailClient |

### 阶段三产出文件清单

```
surmox.net/src/app/
├── page.tsx                           # 更新: 重定向到默认语言
├── [locale]/                          # 新增: 语言路由组
│   ├── layout.tsx                     # 国际化根布局
│   ├── page.tsx                       # 首页
│   ├── about/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── chatbot/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── designs/
│   │   └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   ├── features/
│   │   └── page.tsx
│   ├── integrations/
│   │   └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       ├── page.tsx
│   │       └── ServiceDetailClient.tsx
│   └── team/
│       └── [slug]/
│           ├── page.tsx
│           └── TeamDetailClient.tsx
```

### 主要变更

1. **根页面重定向**
   - `src/app/page.tsx` 现在重定向到 `/${defaultLocale}`
   - 确保所有访问都经过语言路由

2. **页面迁移**
   - 所有页面从 `src/app/` 迁移到 `src/app/[locale]/`
   - 保持原有功能和结构不变
   - 动态路由页面（blog/[slug], services/[slug], team/[slug]）一并迁移

### 下一步：阶段四
开始动态内容国际化，包括：
1. 页面内容翻译（Pricing, Services 等硬编码内容）
2. 博客文章翻译
3. 组件内容国际化

---

---

## 一、需求确认

基于讨论确认的以下关键决策：

| 决策项 | 确认方案 |
|--------|----------|
| 语言自动切换 | 根据用户浏览器语言自动切换，默认中文 |
| 博客文章 | 选项B：翻译所有文章 |
| 设计案例 | 基础信息翻译（标题、描述） |
| 语言切换器位置 | Header 右上角 |
| URL 格式 | `/zh/about` + `/en/about` 子目录模式 |

---

## 二、技术方案

### 2.1 核心库: `next-intl`

选择理由：
- ✅ 专为 Next.js App Router 设计
- ✅ 完美支持服务端组件
- ✅ 内置路由处理
- ✅ TypeScript 完整支持
- ✅ 体积小巧

### 2.2 安装命令

```bash
npm install next-intl
```

### 2.3 浏览器语言检测逻辑

```typescript
// 语言检测优先级：
// 1. URL 中的 locale 参数 (最高优先级)
// 2. Cookie 中保存的用户选择
// 3. 浏览器 Accept-Language 头部
// 4. 默认语言: zh (中文)

const supportedLocales = ['zh', 'en'];
const defaultLocale = 'zh';

// 浏览器语言映射
const browserLangMap: Record<string, string> = {
  'zh': 'zh',
  'zh-CN': 'zh',
  'zh-TW': 'zh',
  'zh-HK': 'zh',
  'en': 'en',
  'en-US': 'en',
  'en-GB': 'en',
  // ... 其他英语变体
};
```

---

## 三、URL 路由设计

### 3.1 路由结构

```
/zh/              # 中文首页
/zh/about         # 中文关于我们
/zh/services      # 中文服务
/zh/blog          # 中文博客
/zh/blog/[slug]   # 中文博客详情

/en/              # 英文首页
/en/about         # 英文关于我们
/en/services      # 英文服务
/en/blog          # 英文博客
/en/blog/[slug]   # 英文博客详情
```

### 3.2 重定向规则

| 访问路径 | 行为 |
|----------|------|
| `/` | 302 重定向到 `/zh/` 或 `/en/` (根据浏览器语言) |
| `/about` | 302 重定向到 `/{locale}/about` |
| `/zh` | 301 重定向到 `/zh/` (补全尾部斜杠) |
| `/en` | 301 重定向到 `/en/` (补全尾部斜杠) |

---

## 四、目录结构变更

### 4.1 新的项目结构

```
surmox.net/
├── src/
│   ├── app/
│   │   ├── [locale]/                    # 新增: 语言路由组
│   │   │   ├── layout.tsx               # 带国际化的根布局
│   │   │   ├── page.tsx                 # 首页
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── services/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── designs/
│   │   │   ├── pricing/
│   │   │   ├── features/
│   │   │   ├── integrations/
│   │   │   ├── faq/
│   │   │   ├── team/
│   │   │   ├── contact/
│   │   │   └── chatbot/
│   │   └── api/                         # API 路由 (无国际化)
│   │       └── ...
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx               # 更新: 添加语言切换器
│   │   │   ├── Footer.tsx               # 更新: 多语言内容
│   │   │   └── LanguageSwitcher.tsx     # 新增: 语言切换组件
│   │   └── ...
│   ├── lib/
│   │   ├── i18n/
│   │   │   ├── config.ts                # 新增: i18n 配置
│   │   │   └── utils.ts                 # 新增: i18n 工具函数
│   │   └── ...
│   └── middleware.ts                    # 新增: 路由中间件
├── messages/                            # 新增: 翻译文件目录
│   ├── zh.json                          # 中文翻译
│   └── en.json                          # 英文翻译
├── content/
│   ├── blog/
│   │   ├── zh/                          # 新增: 中文博客
│   │   │   ├── 2025-ecommerce-trends.md
│   │   │   ├── how-to-choose-platform.md
│   │   │   ├── seo-optimization-tips.md
│   │   │   ├── wechat-mini-program-guide.md
│   │   │   └── shopify-vs-independent.md
│   │   └── en/                          # 新增: 英文博客
│   │       ├── 2025-ecommerce-trends.md
│   │       ├── how-to-choose-platform.md
│   │       ├── seo-optimization-tips.md
│   │       ├── wechat-mini-program-guide.md
│   │       └── shopify-vs-independent.md
│   └── surmos-content.md                # 品牌内容 (需翻译)
├── data/
│   └── designs/
│       ├── zh/                          # 新增: 中文案例
│       └── en/                          # 新增: 英文案例
└── next.config.ts
```

---

## 五、翻译文件结构

### 5.1 messages/zh.json (中文)

```json
{
  "metadata": {
    "home": {
      "title": "SurmoX - AI驱动的独立站搭建专家",
      "description": "专业独立站搭建服务，利用AI技术快速构建高性能电商网站，Shopify最佳替代方案，5天快速上线"
    },
    "about": {
      "title": "关于我们",
      "description": "了解SurmoX团队，专注外贸独立站与微信小程序开发"
    }
  },
  "navigation": {
    "home": "首页",
    "services": "服务",
    "designs": "案例",
    "pricing": "定价",
    "blog": "博客",
    "about": "关于",
    "contact": "联系",
    "faq": "常见问题"
  },
  "language": {
    "switch": "切换语言",
    "zh": "中文",
    "en": "English"
  },
  "home": {
    "banner": {
      "title": "让出海更简单",
      "subtitle": "3天上线，开启全球生意",
      "ctaPrimary": "立即咨询",
      "ctaSecondary": "查看案例"
    },
    "features": {
      "title": "核心优势",
      "subtitle": "为什么选择SurmoX",
      "items": [
        {
          "title": "极速交付",
          "description": "3-5天完成网站搭建，快速上线运营"
        },
        {
          "title": "AI驱动",
          "description": "智能设计、智能文案，提升转化率"
        },
        {
          "title": "超高性价比",
          "description": "价格透明，无隐藏费用，无月租"
        }
      ]
    },
    "services": {
      "title": "我们的服务",
      "items": {
        "independent": {
          "title": "外贸独立站",
          "description": "Shopify最佳替代方案"
        },
        "miniprogram": {
          "title": "微信小程序",
          "description": "私域流量运营利器"
        }
      }
    },
    "pricing": {
      "title": "透明定价",
      "subtitle": "选择适合您的方案",
      "startingAt": "起"
    },
    "cta": {
      "title": "准备好开启您的出海之旅了吗？",
      "subtitle": "立即联系我们，获取专属方案",
      "button": "免费咨询"
    }
  },
  "footer": {
    "company": {
      "title": "公司",
      "about": "关于我们",
      "team": "团队",
      "careers": "加入我们"
    },
    "services": {
      "title": "服务",
      "independent": "外贸独立站",
      "miniprogram": "微信小程序"
    },
    "support": {
      "title": "支持",
      "faq": "常见问题",
      "contact": "联系我们",
      "blog": "博客"
    },
    "contact": {
      "title": "联系我们",
      "email": "邮箱",
      "phone": "电话",
      "address": "地址"
    },
    "copyright": "© 2026 SurmoX. 保留所有权利。"
  },
  "common": {
    "learnMore": "了解更多",
    "contactUs": "联系我们",
    "getStarted": "立即开始",
    "submit": "提交",
    "cancel": "取消",
    "loading": "加载中...",
    "readMore": "阅读更多",
    "viewAll": "查看全部",
    "previous": "上一页",
    "next": "下一页"
  }
}
```

### 5.2 messages/en.json (英文)

```json
{
  "metadata": {
    "home": {
      "title": "SurmoX - AI-Powered Independent Site Builder",
      "description": "Professional independent site building service, using AI technology to quickly build high-performance e-commerce websites, the best Shopify alternative, launch in 5 days"
    },
    "about": {
      "title": "About Us",
      "description": "Learn about SurmoX team, focused on foreign trade independent sites and WeChat mini program development"
    }
  },
  "navigation": {
    "home": "Home",
    "services": "Services",
    "designs": "Showcases",
    "pricing": "Pricing",
    "blog": "Blog",
    "about": "About",
    "contact": "Contact",
    "faq": "FAQ"
  },
  "language": {
    "switch": "Switch Language",
    "zh": "中文",
    "en": "English"
  },
  "home": {
    "banner": {
      "title": "Make Going Global Easier",
      "subtitle": "Launch in 3 days, start your global business",
      "ctaPrimary": "Get Started",
      "ctaSecondary": "View Showcases"
    },
    "features": {
      "title": "Key Advantages",
      "subtitle": "Why Choose SurmoX",
      "items": [
        {
          "title": "Rapid Delivery",
          "description": "Complete website setup in 3-5 days, quick launch"
        },
        {
          "title": "AI-Powered",
          "description": "Smart design and copywriting to boost conversion"
        },
        {
          "title": "Great Value",
          "description": "Transparent pricing, no hidden fees, no monthly rent"
        }
      ]
    },
    "services": {
      "title": "Our Services",
      "items": {
        "independent": {
          "title": "Foreign Trade Site",
          "description": "Best Shopify Alternative"
        },
        "miniprogram": {
          "title": "WeChat Mini Program",
          "description": "Private Traffic Operation Tool"
        }
      }
    },
    "pricing": {
      "title": "Transparent Pricing",
      "subtitle": "Choose the plan that fits you",
      "startingAt": "Starting at"
    },
    "cta": {
      "title": "Ready to Start Your Global Journey?",
      "subtitle": "Contact us now for a customized solution",
      "button": "Free Consultation"
    }
  },
  "footer": {
    "company": {
      "title": "Company",
      "about": "About Us",
      "team": "Team",
      "careers": "Careers"
    },
    "services": {
      "title": "Services",
      "independent": "Foreign Trade Site",
      "miniprogram": "WeChat Mini Program"
    },
    "support": {
      "title": "Support",
      "faq": "FAQ",
      "contact": "Contact Us",
      "blog": "Blog"
    },
    "contact": {
      "title": "Contact",
      "email": "Email",
      "phone": "Phone",
      "address": "Address"
    },
    "copyright": "© 2026 SurmoX. All rights reserved."
  },
  "common": {
    "learnMore": "Learn More",
    "contactUs": "Contact Us",
    "getStarted": "Get Started",
    "submit": "Submit",
    "cancel": "Cancel",
    "loading": "Loading...",
    "readMore": "Read More",
    "viewAll": "View All",
    "previous": "Previous",
    "next": "Next"
  }
}
```

---

## 六、核心文件实现

### 6.1 middleware.ts

```typescript
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, localePrefix } from './src/lib/i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
  // 自动检测浏览器语言
  localeDetection: true,
});

export const config = {
  matcher: [
    // 匹配所有路径，除了 API、静态文件等
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
```

### 6.2 src/lib/i18n/config.ts

```typescript
export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh';

export const localePrefix = 'always'; // 始终显示语言前缀

// 语言显示名称
export const localeNames: Record<Locale, string> = {
  zh: '中文',
  en: 'English',
};

// 语言图标或国旗
export const localeFlags: Record<Locale, string> = {
  zh: '🇨🇳',
  en: '🇺🇸',
};
```

### 6.3 src/lib/i18n/utils.ts

```typescript
import { locales, defaultLocale, type Locale } from './config';

/**
 * 验证语言代码是否有效
 */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

/**
 * 从浏览器 Accept-Language 头部解析首选语言
 */
export function getLocaleFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;

  // 解析语言偏好
  const languages = header
    .split(',')
    .map(lang => {
      const [code, q = '1'] = lang.trim().split(';q=');
      return { code: code.trim(), quality: parseFloat(q) };
    })
    .sort((a, b) => b.quality - a.quality);

  // 查找第一个匹配的支持语言
  for (const { code } of languages) {
    // 直接匹配
    if (isValidLocale(code)) return code;
    
    // 匹配语言前缀 (如 en-US -> en)
    const prefix = code.split('-')[0];
    if (isValidLocale(prefix)) return prefix as Locale;
  }

  return defaultLocale;
}

/**
 * 获取备用语言
 */
export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'zh' ? 'en' : 'zh';
}
```

### 6.4 src/app/[locale]/layout.tsx

```typescript
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n/config';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  // 验证语言代码
  if (!locales.includes(locale)) {
    notFound();
  }

  // 获取翻译消息
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

### 6.5 src/components/layout/LanguageSwitcher.tsx

```typescript
'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, type Locale } from '@/lib/i18n/config';

export function LanguageSwitcher() {
  const t = useTranslations('language');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: Locale) => {
    // 替换路径中的语言代码
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="language-switcher">
      <select
        value={locale}
        onChange={(e) => handleChange(e.target.value as Locale)}
        aria-label={t('switch')}
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {localeNames[loc]}
          </option>
        ))}
      </select>
    </div>
  );
}
```

---

## 七、实施阶段计划

### 阶段一：基础架构 (2-3天)

| 任务 | 说明 | 文件 |
|------|------|------|
| 1.1 安装依赖 | `npm install next-intl` | - |
| 1.2 创建 i18n 配置 | 语言配置、工具函数 | `src/lib/i18n/config.ts`, `src/lib/i18n/utils.ts` |
| 1.3 创建中间件 | 路由处理、语言检测 | `middleware.ts` |
| 1.4 创建翻译文件 | 基础翻译内容 | `messages/zh.json`, `messages/en.json` |
| 1.5 创建语言切换组件 | Header 右上角切换器 | `src/components/layout/LanguageSwitcher.tsx` |

### 阶段二：布局国际化 (2-3天)

| 任务 | 说明 | 文件 |
|------|------|------|
| 2.1 更新根布局 | 添加 NextIntlClientProvider | `src/app/[locale]/layout.tsx` |
| 2.2 更新 Header | 导航菜单国际化 + 语言切换器 | `src/components/layout/Header.tsx` |
| 2.3 更新 Footer | 页脚内容国际化 | `src/components/layout/Footer.tsx` |
| 2.4 更新 MobileMenu | 移动端菜单国际化 | `src/components/layout/MobileMenu.tsx` |

### 阶段三：页面迁移 (3-4天)

| 任务 | 说明 | 文件 |
|------|------|------|
 3.1 迁移首页 | Banner、Features、Pricing等 | `src/app/[locale]/page.tsx` |
| 3.2 迁移服务页 | 服务列表和详情 | `src/app/[locale]/services/` |
| 3.3 迁移案例页 | 设计案例展示 | `src/app/[locale]/designs/` |
| 3.4 迁移定价页 | 价格表 | `src/app/[locale]/pricing/` |
| 3.5 迁移关于页 | 公司介绍 | `src/app/[locale]/about/` |
| 3.6 迁移联系页 | 联系表单 | `src/app/[locale]/contact/` |
| 3.7 迁移其他页面 | FAQ、Features等 | 其他页面 |

### 阶段四：动态内容国际化 (2-3天)

| 任务 | 说明 | 文件 |
|------|------|------|
| 4.1 博客内容迁移 | 创建 zh/en 目录结构 | `content/blog/zh/`, `content/blog/en/` |
| 4.2 博客文章翻译 | 5篇文章英文版 | 5个 markdown 文件 |
| 4.3 案例数据迁移 | 创建 zh/en 目录结构 | `data/designs/zh/`, `data/designs/en/` |
| 4.4 案例数据翻译 | 基础信息翻译 | JSON 文件 |
| 4.5 更新数据读取逻辑 | 根据 locale 读取对应内容 | `src/lib/blog.ts`, `src/lib/designs.ts` |

### 阶段五：SEO & 优化 (1-2天)

| 任务 | 说明 | 文件 |
|------|------|------|
| 5.1 Metadata 国际化 | 每个页面的 title/description | 各 page.tsx |
| 5.2 hreflang 标签 | 多语言 SEO 标签 | `src/app/[locale]/layout.tsx` |
| 5.3 Sitemap 更新 | 包含多语言 URL | `src/app/sitemap.ts` |
| 5.4 Robots.txt | 搜索引擎配置 | `src/app/robots.ts` |

### 阶段六：测试 & 部署 (1-2天)

| 任务 | 说明 |
|------|------|
| 6.1 功能测试 | 语言切换、路由跳转、SSR |
| 6.2 内容检查 | 翻译完整性、格式正确性 |
| 6.3 SEO 验证 | hreflang、sitemap、metadata |
| 6.4 构建测试 | `npm run build` 无错误 |
| 6.5 部署上线 | Cloudflare Workers |

---

## 八、时间估算

| 阶段 | 预计时间 | 关键产出 |
|------|----------|----------|
| 阶段一：基础架构 | 2-3 天 | i18n 配置、中间件、翻译文件 |
| 阶段二：布局国际化 | 2-3 天 | Header、Footer、语言切换器 |
| 阶段三：页面迁移 | 3-4 天 | 所有页面国际化 |
| 阶段四：动态内容 | 2-3 天 | 博客、案例多语言 |
| 阶段五：SEO & 优化 | 1-2 天 | Metadata、hreflang、sitemap |
| 阶段六：测试 & 部署 | 1-2 天 | 上线 |
| **总计** | **11-17 天** | |

---

## 九、博客文章翻译清单

### 9.1 需要翻译的 5 篇文章

| 文件名 | 中文标题 | 英文标题 |
|--------|----------|----------|
| 2025-ecommerce-trends.md | 2025年跨境电商趋势 | 2025 E-commerce Trends |
| how-to-choose-platform.md | 如何选择电商平台 | How to Choose an E-commerce Platform |
| seo-optimization-tips.md | SEO优化技巧 | SEO Optimization Tips |
| wechat-mini-program-guide.md | 微信小程序开发指南 | WeChat Mini Program Development Guide |
| shopify-vs-independent.md | Shopify vs 独立站 | Shopify vs Independent Site |

### 9.2 文章 Frontmatter 结构

```yaml
---
title: "文章标题"
date: "2026-01-15"
cover: "/images/blog/cover.jpg"
excerpt: "文章摘要"
author: "SurmoX Team"
category: "技术"
tags: ["tag1", "tag2"]
featured: true
---
```

---

## 十、设计案例翻译清单

### 10.1 需要翻译的字段

```typescript
interface DesignShowcase {
  id: string;                    // 不翻译
  title: string;                 // ✅ 翻译
  serviceType: ServiceType;      // ✅ 翻译 (独立站/小程序/APP)
  industry: string;              // ✅ 翻译
  style: string;                 // ✅ 翻译
  cover: string;                 // 不翻译
  images: string[];              // 不翻译
  tags: string[];                // ✅ 翻译
  featured: boolean;             // 不翻译
  date: string;                  // 不翻译
}
```

---

## 十一、注意事项

### 11.1 图片资源
- 图片路径保持不变
- 如需不同语言的图片，使用命名约定：`image-zh.jpg`, `image-en.jpg`

### 11.2 日期格式
- 中文：2026年4月22日
- 英文：April 22, 2026

### 11.3 货币格式
- 中文：¥2,999
- 英文：$2,999 USD

### 11.4 链接处理
- 内部链接保持相对路径
- 外部链接根据语言可能需要调整

### 11.5 表单验证
- 错误提示信息需要翻译
- 邮箱、电话等格式验证规则可能需要调整

---

## 十二、后续优化建议

1. **语言持久化**：用户切换语言后，使用 Cookie 记住选择
2. **自动翻译**：集成 AI 翻译 API，辅助内容翻译
3. **更多语言**：后续可扩展日语、韩语、西班牙语等
4. **区域化内容**：根据地区显示不同的案例和定价
5. **A/B 测试**：测试不同语言版本的转化率

---

## 十三、参考资源

- [next-intl 官方文档](https://next-intl-docs.vercel.app/)
- [Next.js 国际化最佳实践](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [Google 多语言网站 SEO 指南](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)

---

**计划制定**: 2026-04-22  
**最后更新**: 2026-04-22  
**版本**: v1.0
