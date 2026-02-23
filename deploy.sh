#!/bin/bash

# GitHub Pages 部署脚本
# 用于将静态网站部署到 GitHub Pages

echo "🚀 开始部署到 GitHub Pages..."

# 检查是否有未提交的更改
if [[ -n $(git status -s) ]]; then
    echo "📝 检测到未提交的更改，正在提交..."
    git add .
    git commit -m "Update website content"
else
    echo "✅ 工作目录干净，无需提交"
fi

# 推送到主分支
echo "📤 正在推送到 GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ 代码已成功推送到 GitHub"
    echo "🌐 请在 GitHub 仓库设置中启用 GitHub Pages:"
    echo "   1. 访问仓库 Settings 页面"
    echo "   2. 找到 Pages 选项"
    echo "   3. 选择 Source 为 'Deploy from a branch'"
    echo "   4. 选择 Branch 为 'main'，目录为 '/ (root)'"
    echo "   5. 保存设置"
    echo ""
    echo "🔗 部署完成后，您的网站将可以通过以下地址访问:"
    echo "   https://YOUR_USERNAME.github.io/agentsh_magazine/"
else
    echo "❌ 推送失败，请检查网络连接和权限设置"
fi