(function () {
  const BASE = '/conbrie-ai-learning';
  const routes = {
    home: BASE + '/01/',
    'knowledge-base': BASE + '/02/',
    'ai-tutor': BASE + '/06/',
    'mastery-profile': BASE + '/10/'
  };

  const go = (path) => {
    if (path && window.location.pathname !== path) window.location.href = path;
  };

  document.querySelectorAll('a[data-path]').forEach((link) => {
    const path = routes[link.dataset.path];
    if (path) link.href = path;
  });

  document.addEventListener('click', (event) => {
    const control = event.target.closest('button, a, [role="button"]');
    if (!control) return;
    const text = (control.innerText || control.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim();

    if (/返回/.test(text)) return;
    if (/导入|上传|新建资料/.test(text)) return go(BASE + '/07/');
    if (/开始 AI 结构化解析|开始解析/.test(text)) return setTimeout(() => go(BASE + '/08/'), 650);
    if (/保存并生成新知识专题|进入专题/.test(text)) return go(BASE + '/03/');
    if (/立即进入卡片复习|开始智能复习|开始今日学习|记忆卡片|复习卡片|立即强化/.test(text)) return go(BASE + '/04/');
    if (/随堂测验|智能强化测验|开始测验|生成 Quiz|生成测验/.test(text)) return go(BASE + '/05/');
    if (/学习数据|详细周报|查看详细报告/.test(text)) return go(BASE + '/09/');
    if (/AI 助手|向 AI 提问/.test(text)) return go(BASE + '/06/');
  });

  document.querySelectorAll('button').forEach((button) => {
    if (!button.getAttribute('type')) button.setAttribute('type', 'button');
  });
})();
