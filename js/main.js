// 九紫离火运主题交互效果

document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initFireEffects();
    initScrollAnimations();
    initCardHoverEffects();
    initParticleSystem();
});

// 九紫离火运粒子系统
function initFireEffects() {
    const banner = document.querySelector('.fire-banner');
    if (!banner) return;
    
    // 创建动态火焰粒子
    for (let i = 0; i < 15; i++) {
        createFireParticle(banner);
    }
}

function createFireParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'dynamic-particle';
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 6 + 2}px;
        height: ${Math.random() * 6 + 2}px;
        background: ${Math.random() > 0.5 ? '#FFD700' : '#FF8C00'};
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.7 + 0.3};
        animation: float ${Math.random() * 4 + 3}s infinite ease-in-out;
        animation-delay: ${Math.random() * 2}s;
        z-index: 1;
    `;
    
    container.appendChild(particle);
    
    // 添加随机移动效果
    setInterval(() => {
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
    }, Math.random() * 3000 + 2000);
}

// 滚动动画效果
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    document.querySelectorAll('.magazine-card, .center-content, .section-title').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// 卡片悬停效果增强
function initCardHoverEffects() {
    const cards = document.querySelectorAll('.magazine-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 25px 50px rgba(153, 50, 204, 0.6)';
            
            // 添加光晕效果
            const glow = document.createElement('div');
            glow.className = 'card-glow';
            glow.style.cssText = `
                position: absolute;
                top: -5px;
                left: -5px;
                right: -5px;
                bottom: -5px;
                background: radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%);
                border-radius: 15px;
                z-index: -1;
                animation: pulse 2s infinite;
            `;
            this.style.position = 'relative';
            this.appendChild(glow);
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
            const glow = this.querySelector('.card-glow');
            if (glow) glow.remove();
        });
    });
}

// 粒子系统
function initParticleSystem() {
    const body = document.body;
    
    // 创建背景粒子
    for (let i = 0; i < 30; i++) {
        createBackgroundParticle(body);
    }
}

function createBackgroundParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'bg-particle';
    particle.style.cssText = `
        position: fixed;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        background: rgba(153, 50, 204, ${Math.random() * 0.5 + 0.2});
        border-radius: 50%;
        top: ${Math.random() * 100}vh;
        left: ${Math.random() * 100}vw;
        z-index: -1;
        pointer-events: none;
        animation: float ${Math.random() * 20 + 10}s infinite linear;
    `;
    
    container.appendChild(particle);
    
    // 随机移动
    setInterval(() => {
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
    }, Math.random() * 5000 + 3000);
}

// 平滑滚动
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

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        25% { transform: translateY(-20px) translateX(10px); }
        50% { transform: translateY(-10px) translateX(-10px); }
        75% { transform: translateY(-30px) translateX(5px); }
    }
    
    @keyframes pulse {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.7; transform: scale(1.2); }
    }
    
    .card-glow {
        animation: pulse 2s infinite !important;
    }
`;
document.head.appendChild(style);

// 响应式导航菜单（移动端）
function initMobileMenu() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.cssText = `
        display: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: white;
    `;
    
    const headerContainer = document.querySelector('.header-container');
    if (headerContainer) {
        headerContainer.appendChild(menuToggle);
        
        // 移动端菜单切换
        menuToggle.addEventListener('click', function() {
            const nav = document.querySelector('.main-nav');
            nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
        });
    }
}

// 初始化移动端菜单
if (window.innerWidth <= 768) {
    initMobileMenu();
}

// 窗口大小改变时的处理
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        initMobileMenu();
    }
});

console.log('🔥 九紫离火运主题网站已加载完成！');