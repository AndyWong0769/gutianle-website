/* 股天乐游大A - 交互脚本 */

// ===== DOM 加载完后，从 config.js 注入动态内容 =====
document.addEventListener('DOMContentLoaded', () => {
    const cfg = window.SITE_CONFIG;
    if (!cfg) return;

    // -- 联系卡片 --
    const contactCards = document.getElementById('contactCards');
    if (contactCards) {
        const qrImg = cfg.wechatQR || 'images/wechat-qr.png';
        contactCards.innerHTML = `
            <div class="contact-card">
                <div class="contact-icon">💬</div>
                <h3>微信</h3>
                <p>扫码添加微信，直接沟通</p>
                <div class="qr-wrapper">
                    <img src="${qrImg}" alt="微信二维码"
                         onerror="this.parentElement.innerHTML='<div class=\\'qr-placeholder\\'>${cfg.wechatQRPlaceholder || '请上传微信二维码'}</div>'"
                         onload="this.style.display='block'"
                         style="display:none;width:140px;height:140px;margin:12px auto;border-radius:8px;object-fit:contain;">
                    <div class="qr-placeholder">${cfg.wechatQRPlaceholder || '请上传微信二维码'}</div>
                </div>
                <p class="contact-note">备注"股天乐"</p>
            </div>
            <div class="contact-card">
                <div class="contact-icon">🐧</div>
                <h3>QQ</h3>
                <p>${cfg.contact.qq}</p>
                <p class="contact-note">备注"股天乐"优先通过</p>
            </div>
            <div class="contact-card">
                <div class="contact-icon">📧</div>
                <h3>GitHub</h3>
                <p>开源项目 & 更新日志</p>
                <a href="${cfg.contact.github}" target="_blank" class="btn btn-outline btn-sm">访问主页 →</a>
            </div>
        `;
    }

    // 价格信息保留在 HTML 中，直接编辑 index.html 修改
});

// ===== 移动端菜单 =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('active'));
});

// ===== FAQ 折叠 =====
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => item.classList.toggle('open'));
});

// ===== 导航栏滚动阴影 =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 50 ? '0 4px 24px rgba(0,0,0,0.4)' : 'none';
});

// ===== 平滑滚动 =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
});

console.log('📈 股天乐游大A - 网站已就绪');
console.log('⚙️ 修改联系方式请编辑 js/config.js');
console.log('🖼 上传二维码请上传到 images/ 文件夹');
