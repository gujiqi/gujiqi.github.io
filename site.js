(() => {
  const button = document.querySelector('.lang');
  const saved = sessionStorage.getItem('jiqi-gu-language');
  let language = saved === 'zh' ? 'zh' : 'en';
  const apply = () => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-en][data-zh]').forEach(node => {
      node.textContent = node.dataset[language];
    });
    if (button) button.textContent = language === 'zh' ? 'EN' : '中文';
  };
  button?.addEventListener('click', () => {
    language = language === 'zh' ? 'en' : 'zh';
    sessionStorage.setItem('jiqi-gu-language', language);
    apply();
  });
  apply();
})();
