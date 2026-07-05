/* 股天乐游大A - 交互脚本 */

// 移动端菜单
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 点击导航链接关闭菜单
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// FAQ 折叠
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
    });
});

// 导航栏滚动阴影
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// 平滑滚动（兼容旧浏览器）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

console.log('📈 股天乐游大A - 网站已就绪');
console.log('💬 联系作者 QQ: 112702445@qq.com');
console.log('🔗 GitHub: https://github.com/AndyWong0769');
