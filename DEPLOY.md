# SurmoX 部署指南

## Cloudflare Pages 部署步骤

### 方法一：通过 Git 自动部署（推荐）

#### 1. 创建 Cloudflare 账号
- 访问 https://dash.cloudflare.com/sign-up
- 使用邮箱注册并验证

#### 2. 获取 API Token
1. 登录 Cloudflare Dashboard
2. 点击右上角头像 → "My Profile"
3. 选择 "API Tokens" 标签
4. 点击 "Create Token"
5. 选择 "Custom token"
6. 配置权限：
   - Zone:Read (可选，用于自定义域名)
   - Cloudflare Pages:Edit
7. 保存 Token（只显示一次，务必保存）

#### 3. 获取 Account ID
1. 在 Cloudflare Dashboard 右侧边栏查看
2. 或者访问任意域名概览页面，URL 中包含 Account ID

#### 4. 配置 GitHub Secrets
1. 打开 GitHub 仓库 → Settings → Secrets and variables → Actions
2. 添加以下 Secrets：
   - `CLOUDFLARE_API_TOKEN`: 你的 API Token
   - `CLOUDFLARE_ACCOUNT_ID`: 你的 Account ID

#### 5. 推送代码触发部署
```bash
git add .
git commit -m "配置 Cloudflare Pages 部署"
git push origin main
```

GitHub Actions 会自动构建并部署到 Cloudflare Pages。

---

### 方法二：手动部署（Wrangler CLI）

#### 1. 安装 Wrangler
```bash
npm install -g wrangler
```

#### 2. 登录 Cloudflare
```bash
wrangler login
```
浏览器会打开授权页面，点击允许即可。

#### 3. 构建项目
```bash
cd /Users/geng/Project/work/tools/surmox.net
npm run build
```

#### 4. 创建 Pages 项目（首次）
```bash
wrangler pages project create surmos
```

#### 5. 部署
```bash
wrangler pages deploy dist --project-name=surmos
```

---

### 方法三：通过 Cloudflare Dashboard 部署

#### 1. 登录 Dashboard
访问 https://dash.cloudflare.com

#### 2. 创建 Pages 项目
1. 左侧菜单点击 "Pages"
2. 点击 "Create a project"
3. 选择 "Connect to Git"
4. 授权 GitHub 并选择 surmos 仓库
5. 配置构建设置：
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. 点击 "Save and Deploy"

---

## 自定义域名配置

### 1. 添加自定义域名
1. 在 Cloudflare Pages 项目页面，点击 "Custom domains"
2. 点击 "Set up a custom domain"
3. 输入你的域名，如 `www.surmos.net`
4. 点击 "Continue"

### 2. 配置 DNS 记录
#### 如果你的域名在 Cloudflare 管理：
- 自动添加，无需手动配置

#### 如果你的域名在其他服务商：
添加 CNAME 记录：
- **Type**: CNAME
- **Name**: www
- **Value**: `surmos.pages.dev`（你的 Pages 域名）

### 3. 配置根域名（可选）
如果想用 `surmos.net` 而不是 `www.surmos.net`：
1. 在 Cloudflare 添加 `surmos.net` 域名
2. 添加 CNAME 记录：
   - **Type**: CNAME
   - **Name**: @
   - **Value**: `surmos.pages.dev`
3. 或者使用 Cloudflare 的 CNAME Flattening 功能

---

## 环境变量配置（可选）

如果需要环境变量（如分析工具 ID）：

### 本地开发
创建 `.env.local` 文件：
```
NEXT_PUBLIC_GA_ID=你的Google Analytics ID
```

### Cloudflare Pages
1. 进入项目设置
2. 点击 "Environment variables"
3. 添加变量：
   - **Production**: 生产环境变量
   - **Preview**: 预览环境变量

---

## 常见问题

### Q: 部署失败怎么办？
A: 检查以下几点：
1. `next.config.ts` 中设置了 `output: 'export'`
2. 构建命令正确：`npm run build`
3. 输出目录正确：`dist`
4. 查看 GitHub Actions 日志或 Wrangler 错误信息

### Q: 如何更新网站？
A: 推送代码到 main 分支即可自动部署：
```bash
git add .
git commit -m "更新内容"
git push origin main
```

### Q: 如何查看部署日志？
A: 
- GitHub Actions: 仓库 → Actions 标签
- Wrangler: 命令行直接显示
- Dashboard: Pages 项目 → Deployments

### Q: 国内访问慢怎么办？
A: Cloudflare Pages 在国内访问速度一般，可以：
1. 开启 Cloudflare 的 "Always Online" 功能
2. 考虑使用 Vercel 作为备用（海外用户）
3. 或者使用国内 CDN 如腾讯云/阿里云（需要备案）

---

## 部署状态检查

部署完成后，访问以下地址查看：
- **默认域名**: `https://surmos.pages.dev`
- **自定义域名**: `https://www.surmos.net`（配置后）

---

**完成！** 🎉
你的 SurmoX 网站现在部署在 Cloudflare Pages 上了！
