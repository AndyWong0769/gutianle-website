/* ============================================
   股天乐游大A - 配置中心
   👇 改下面这些就行，改完提交，网站自动更新
   ============================================ */

const SITE_CONFIG = {
    // 联系方式
    contact: {
        qq: '945489562@qq.com',        // 👈 改QQ号改这里
        wechat: 'andy664940',            // 👈 改微信号改这里
        github: 'https://github.com/AndyWong0769'
    },

    // 微信二维码图片路径
    // 把二维码图片上传到 images/ 文件夹，然后改下面文件名
    wechatQR: 'images/wechat-qr.png',  // 👈 改成你上传的图片文件名

    // 微信二维码占位文字（图片未上传时显示）
    wechatQRPlaceholder: '请上传微信二维码\n到 images/ 文件夹',

    // 产品价格（改价格改这里）
    products: {
        tCalculator: { name: '做T计算器', price: '¥98' },
        bidding:     { name: '竞价选股工具', price: '¥128' },
        overlap:     { name: '重叠股票筛选助手', price: '¥88' },
        bundle:      { name: '全家桶套餐', price: '¥228', original: '¥314' },
        source:      { name: '源码版', price: '¥398' }
    },

    // 网站信息
    site: {
        name: '股天乐游大A',
        subtitle: 'A股智能交易工具箱',
        yearStart: 2024
    }
};
