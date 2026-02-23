// 文章页面交互功能

document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initArticleAnimations();
    initReadingProgress();
    initSmoothScrolling();
    initShareButtons();
});

// 文章动画效果
function initArticleAnimations() {
    // 段落淡入效果
    const paragraphs = document.querySelectorAll('p, h2, h3, .content-section');
    paragraphs.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300);
    });
    
    // 卡片悬停效果
    const cards = document.querySelectorAll('.trend-item, .scenario-card, .recommend-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = this.classList.contains('trend-item') ? 
                'translateX(15px)' : 'translateY(-15px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = this.classList.contains('trend-item') ? 
                'translateX(0)' : 'translateY(0)';
        });
    });
}

// 阅读进度条
function initReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #9932CC, #8B0000);
        width: 0%;
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// 平滑滚动
function initSmoothScrolling() {
    // 锚点链接平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 回到顶部按钮
    const backToTop = document.querySelector('.back-top a');
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// 分享按钮功能
function initShareButtons() {
    // 文章分享功能
    const shareBtn = document.createElement('div');
    shareBtn.className = 'share-button';
    shareBtn.innerHTML = '📤 分享文章';
    shareBtn.style.cssText = `
        position: fixed;
        right: 20px;
        bottom: 20px;
        background: linear-gradient(135deg, #9932CC, #8B0000);
        color: white;
        padding: 12px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(shareBtn);
    
    shareBtn.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: window.location.href
            }).catch(console.error);
        } else {
            // 复制链接到剪贴板
            navigator.clipboard.writeText(window.location.href).then(() => {
                showNotification('链接已复制到剪贴板！');
            }).catch(() => {
                showNotification('请手动复制链接：' + window.location.href);
            });
        }
    });
    
    shareBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    shareBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// 通知提示
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #9932CC, #8B0000);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 1002;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 添加动画CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    /* 阅读时的视觉效果 */
    .content-section {
        scroll-margin-top: 80px;
    }
    
    /* 链接悬停效果 */
    a:not(.back-link):hover {
        text-decoration: underline;
        color: #9932CC;
    }
`;
document.head.appendChild(style);

// 字体加载优化
if ('fonts' in document) {
    document.fonts.ready.then(() => {
        console.log('🔥 字体加载完成');
    });
}

// 页面可见性API
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '.paused | AgentSH电子杂志';
    } else {
        document.title = document.querySelector('.article-title')?.textContent || 'AgentSH电子杂志';
    }
});

console.log('📝 文章页面已加载完成');