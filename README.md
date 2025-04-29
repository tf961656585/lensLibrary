# lensLibrary

## 项目概述
lensLibrary 是一个"各种卡口镜头的终极库"，旨在通过 Web 技术让用户查询某个镜头卡口（mount）下各品牌镜头型号，并提供方便的购买指导及镜头信息查询。

## 功能
- 按卡口类型查询支持的镜头列表
- 按品牌筛选镜头型号
- 查看镜头详细信息与规格参数
- 提供外部购买链接与价格参考

## 项目结构
镜头字典项目目录结构如下：

```
lensLibrary
├── README.md            # 项目说明
├── src/                 # 前端源代码
│   ├── components/      # 组件目录
│   ├── pages/           # 页面目录
│   └── styles/          # 样式文件
├── public/              # 静态资源目录
│   └── index.html
├── data/                # 镜头数据（JSON/YAML）
├── .cursor/             # Cursor 规则文件
└── package.json         # 依赖与脚本
```

## 核心 MVP 功能
- 首页：展示卡口（mount）列表，点击进入对应镜头列表
- 镜头列表页：按品牌/焦段筛选，显示镜头名称、缩略图和主要参数（焦距、光圈范围）
- 镜头详情页：展示完整规格参数及购买链接
- 全局搜索（可选）：按名称或品牌模糊查询

## 技术栈（MVP）
- 前端：Next.js + React + TypeScript
- 样式：Tailwind CSS（或 CSS Modules）
- 数据存储：本地 JSON（data/ 目录）
- 部署：Vercel（静态站点 + API Routes）

## 安装与运行（MVP）
1. 克隆并进入项目目录
   ```bash
   git clone https://github.com/yourname/lensLibrary.git
   cd lensLibrary
   ```
2. 安装依赖
   ```bash
   npm install
   ```
3. 启动开发环境
   ```bash
   npm run dev
   ```
4. 访问应用
   ```text
   http://localhost:3000
   ```

## 使用说明
- 在首页选择镜头卡口类型，即可查看对应品牌镜头列表
- 点击镜头名称进入镜头详情页，查看规格与购买链接
- 使用筛选功能快速定位目标镜头

## 数据管理
- 镜头数据存放于 `data/` 目录，支持 JSON 与 YAML 格式
- 若需新增或更新数据，编辑对应文件并按照既有格式添加

## 贡献指南
欢迎提交 issue 或 PR：
1. Fork 本仓库
2. 创建分支 `feature/xxx`
3. 提交并发起 PR

## 许可证
本项目采用 MIT 许可证，详情见 [LICENSE](LICENSE)。
