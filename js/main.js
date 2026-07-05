/* 股天乐游大A - 交互脚本 */

// ===== 从 config.js 填充联系方式（安全：HTML 已存在，只更新文本） =====
(function() {
    var cfg = window.SITE_CONFIG;
    if (!cfg) return;

    // QQ号
    var qqEl = document.getElementById('contactQQ');
    if (qqEl && cfg.contact && cfg.contact.qq) {
        qqEl.textContent = cfg.contact.qq;
    }

    // 微信二维码 - 如果用户上传了，替换 src
    if (cfg.wechatQR) {
        var qrImg = document.getElementById('wechatQRImg');
        if (qrImg && cfg.wechatQR !== 'images/wechat-qr.png') {
            qrImg.src = cfg.wechatQR;
        }
    }
})();

// ===== 移动端菜单 =====
var hamburger = document.getElementById('hamburger');
var navMenu = document.getElementById('navMenu');
if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}
var navLinks = document.querySelectorAll('.nav-link');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
}

// ===== FAQ 折叠 =====
var faqItems = document.querySelectorAll('.faq-item');
for (var i = 0; i < faqItems.length; i++) {
    faqItems[i].addEventListener('click', function() {
        this.classList.toggle('open');
    });
}

// ===== 导航栏滚动阴影 =====
var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
    if (navbar) {
        navbar.style.boxShadow = window.scrollY > 50 ? '0 4px 24px rgba(0,0,0,0.4)' : 'none';
    }
});

// ===== 平滑滚动 =====
var anchors = document.querySelectorAll('a[href^="#"]');
for (var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function(e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

console.log('📈 股天乐游大A - 网站已就绪');
