# BalanX Pre-Order 功能设置指南

## ✅ 已完成的功能

1. **Pre-order页面布局优化** - 整页统一背景色，响应式设计
2. **Journey Type部分已删除** - 简化表单
3. **导航栏集成** - Pre-order页面包含完整导航
4. **API路由创建** - `/api/pre-order` 端点已就绪
5. **PostgreSQL数据库集成** - Neon数据库连接和存储
6. **管理面板创建** - 查看和管理预订数据

## 🔧 需要配置的服务

### 1. Resend 邮件服务设置

#### 步骤 1: 创建 Resend 账户
1. 访问 [resend.com](https://resend.com)
2. 注册账户并验证邮箱
3. 进入 Dashboard

#### 步骤 2: 添加发送域名
1. 在 Resend Dashboard 中点击 "Domains"
2. 添加你的域名 `balanxbio.com`
3. 按照指示设置 DNS 记录：
   - 添加 MX 记录
   - 添加 TXT 记录用于验证
   - 添加 DKIM 记录

#### 步骤 3: 获取 API 密钥
1. 在 Dashboard 中点击 "API Keys"
2. 创建新的 API Key
3. 复制生成的密钥

#### 步骤 4: 设置环境变量
在你的 `.env.local` 文件中添加：
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
```

### 2. Neon PostgreSQL 数据库设置

#### 步骤 1: 创建 .env.local 文件
在项目根目录创建 `.env.local` 文件，添加提供的 Neon 数据库连接信息：

```bash
# Recommended for most uses
DATABASE_URL=postgres://neondb_owner:npg_w59FCIeutflP@ep-super-frost-adpmr0hb-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require

# For uses requiring a connection without pgbouncer
DATABASE_URL_UNPOOLED=postgresql://neondb_owner:npg_w59FCIeutflP@ep-super-frost-adpmr0hb.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require

# Parameters for constructing your own connection string
PGHOST=ep-super-frost-adpmr0hb-pooler.c-2.us-east-1.aws.neon.tech
PGHOST_UNPOOLED=ep-super-frost-adpmr0hb.c-2.us-east-1.aws.neon.tech
PGUSER=neondb_owner
PGDATABASE=neondb
PGPASSWORD=npg_w59FCIeutflP

# Parameters for Vercel Postgres Templates
POSTGRES_URL=postgres://neondb_owner:npg_w59FCIeutflP@ep-super-frost-adpmr0hb-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require
POSTGRES_URL_NON_POOLING=postgres://neondb_owner:npg_w59FCIeutflP@ep-super-frost-adpmr0hb.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require
POSTGRES_USER=neondb_owner
POSTGRES_HOST=ep-super-frost-adpmr0hb-pooler.c-2.us-east-1.aws.neon.tech
POSTGRES_PASSWORD=npg_w59FCIeutflP
POSTGRES_DATABASE=neondb
POSTGRES_URL_NO_SSL=postgres://neondb_owner:npg_w59FCIeutflP@ep-super-frost-adpmr0hb-pooler.c-2.us-east-1.aws.neon.tech/neondb
POSTGRES_PRISMA_URL=postgres://neondb_owner:npg_w59FCIeutflP@ep-super-frost-adpmr0hb-pooler.c-2.us-east-1.aws.neon.tech/neondb?connect_timeout=15&sslmode=require

# Neon Auth environment variables for Next.js
NEXT_PUBLIC_STACK_PROJECT_ID=4bcf3dfe-7659-4975-9c39-5d3b662a08cb
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=pck_a2rrr6pekgeyh03ktd8nfw6e7jfcwanvmkg52y20ws0zg
STACK_SECRET_SERVER_KEY=ssk_mdm17km8p0y4eay2kwqyf5c7xxgqstgm5chszm5h9w2wg
```

#### 步骤 2: 数据库自动初始化
数据库表将在第一次提交预订时自动创建。系统会自动创建：
- `pre_orders` 表：存储用户预订信息
- 邮箱唯一索引：防止重复预订
- 时间戳索引：方便按时间排序

#### 步骤 3: 部署到 Vercel
1. 将项目推送到 GitHub
2. 在 Vercel Dashboard 中连接 GitHub 仓库
3. 在项目设置中添加环境变量（复制 .env.local 的内容）
4. 重新部署项目

### 3. 环境变量完整配置

你的 `.env.local` 文件应该包含：
```bash
# Resend API Key (可选 - 用于发送确认邮件)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx

# PostgreSQL Database (必需)
DATABASE_URL=postgres://neondb_owner:npg_w59FCIeutflP@ep-super-frost-adpmr0hb-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require

# 其他数据库配置变量（如上面提供的完整列表）
# ... 其他 Neon 和 Stack Auth 变量
```

## 📧 邮件配置详情

### 发件人设置
- **发件人**: `Welcome@balanxbio.com`
- **邮件主题**: "You're in! Your BalanX-Bio pre-order is confirmed 🎉"
- **邮件内容**: 已包含完整的欢迎邮件模板

### 邮件模板包含：
- 个性化问候（使用用户名字）
- 确认信息
- 品牌信息
- 联系方式
- 专业的HTML格式

## 💾 数据库结构

### 数据表结构：
```sql
CREATE TABLE pre_orders (
  id VARCHAR(255) PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 存储的数据格式：
```javascript
{
  id: "preorder_1704067200000_abc123def",
  first_name: "用户名字",
  last_name: "用户姓氏", 
  email: "用户邮箱",
  created_at: "2024-01-01T00:00:00.000Z"
}
```

### 数据库特性：
- **唯一邮箱约束**: 防止同一邮箱重复预订
- **自动时间戳**: 记录创建时间
- **索引优化**: 邮箱和时间戳字段已创建索引

## 🚀 测试功能

### 本地测试：
1. 启动开发服务器：`npm run dev`
2. 访问 `http://localhost:3000/pre-order`
3. 填写表单并提交
4. 检查控制台和邮箱

### 生产环境测试：
1. 部署到 Vercel
2. 确保所有环境变量已设置
3. 测试完整流程

## 🔍 故障排除

### 常见问题：

1. **邮件发送失败**
   - 检查 Resend API 密钥是否正确
   - 确认域名验证状态
   - 查看 Resend Dashboard 的日志

2. **数据存储失败**
   - 验证 DATABASE_URL 环境变量
   - 检查 Neon 数据库连接状态
   - 查看 Vercel Function 日志
   - 确认数据库表已正确创建

3. **表单提交没有响应**
   - 检查网络请求
   - 查看浏览器控制台错误
   - 验证 API 路由是否正常

## 📊 数据管理

### 查看预订数据：
1. **管理面板**: 访问 `/admin/preorders` 查看所有预订数据
2. **功能包括**:
   - 实时数据刷新
   - 按时间排序显示
   - 导出 CSV 格式数据
   - 响应式表格显示

### 管理面板访问：
- **本地开发**: `http://localhost:3000/admin/preorders`
- **生产环境**: `https://yourdomain.com/admin/preorders`

### 数据导出：
点击管理面板中的 "Export CSV" 按钮可以导出所有预订数据进行分析。

## 🔐 安全考虑

1. **API 密钥安全**: 永远不要在前端代码中暴露 API 密钥
2. **表单验证**: 已实现基本的前端和后端验证
3. **环境变量**: 确保 `.env.local` 不被提交到版本控制

---

## 📞 需要帮助？

如果遇到任何问题，请检查：
1. 环境变量是否正确设置
2. DATABASE_URL 是否可以正常连接
3. Resend 域名是否验证通过（如果使用邮件功能）
4. 网络连接是否正常
5. 数据库表是否正确创建

设置完成后，Pre-order 功能将完全正常工作！🎉 