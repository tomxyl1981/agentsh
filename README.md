# AgentSH 智能体调度平台官网

这是一个现代化的企业官网项目，展示了AgentSH智能体调度平台的技术实力和行业应用。

## 🌟 项目特色

- **响应式设计**：移动端优先，适配各种设备屏幕
- **现代化UI**：简洁美观的界面设计
- **完整功能**：涵盖企业介绍、行业应用、新闻资讯等模块
- **静态部署**：纯HTML/CSS/JavaScript实现，易于部署

## 📁 项目结构

```
agentsh_magazine/
├── index.html          # 主页
├── organization.html   # 组织架构页面
├── articles/           # 新闻资讯文章
├── industry/           # 行业应用专题页面
├── css/               # 样式文件
├── js/                # JavaScript文件
└── images/            # 图片资源
```

## 🚀 部署到 GitHub Pages

### 方法一：使用部署脚本（推荐）

1. **设置GitHub远程仓库**：
   ```bash
   # 替换 YOUR_USERNAME 为您的GitHub用户名
   git remote add origin https://github.com/YOUR_USERNAME/agentsh_magazine.git
   ```

2. **运行部署脚本**：
   ```bash
   ./deploy.sh
   ```

### 方法二：手动部署

1. **创建GitHub仓库**：
   - 登录GitHub，在个人账户下创建名为 `agentsh_magazine` 的新仓库
   - 不要初始化README、.gitignore或license

2. **推送代码**：
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/agentsh_magazine.git
   git branch -M main
   git push -u origin main
   ```

3. **启用GitHub Pages**：
   - 访问仓库的 Settings 页面
   - 找到 Pages 选项
   - 选择 Source 为 "Deploy from a branch"
   - 选择 Branch 为 "main"，目录为 "/ (root)"
   - 保存设置

4. **访问网站**：
   部署完成后，网站将可通过以下地址访问：
   ```
   https://YOUR_USERNAME.github.io/agentsh_magazine/
   ```

## 🎨 设计规范

- **移动端优先**：响应式设计，适配手机、平板、桌面设备
- **高对比度**：确保文字在各种背景下都有良好可读性
- **简洁现代**：符合企业级产品的专业形象

## 📱 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进项目。

## 📄 许可证

MIT License