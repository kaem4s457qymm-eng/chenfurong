

// 导航栏交互
const langTrigger = document.querySelector('.lang-trigger');
const langMenu = document.querySelector('.lang-menu');

langTrigger.addEventListener('click', () => {
  langMenu.classList.toggle('show');
});

// 点击页面其他地方关闭语言选择菜单
document.addEventListener('click', (e) => {
  if (!langTrigger.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.classList.remove('show');
  }
});

// 搜索功能
const searchBtn = document.querySelector('.search-btn');
const searchModal = document.querySelector('.search-modal');
const searchClose = document.querySelector('.search-close');

searchBtn.addEventListener('click', () => {
  searchModal.classList.add('show');
});

searchClose.addEventListener('click', () => {
  searchModal.classList.remove('show');
});

// 搜索弹窗外部点击关闭
searchModal.addEventListener('click', (e) => {
  if (e.target === searchModal) {
    searchModal.classList.remove('show');
  }
});

// 平滑滚动
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// 表单验证
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 简单的表单验证
    const nameInput = contactForm.querySelector('input[type="text"]');
    const emailInput = contactForm.querySelector('input[type="email"]');
    const phoneInput = contactForm.querySelector('input[type="tel"]');
    const messageInput = contactForm.querySelector('textarea');
    
    if (!nameInput.value.trim()) {
      alert('请输入您的姓名');
      nameInput.focus();
      return;
    }
    
    if (!emailInput.value.trim()) {
      alert('请输入您的邮箱');
      emailInput.focus();
      return;
    }
    
    // 简单的邮箱格式验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      alert('请输入有效的邮箱地址');
      emailInput.focus();
      return;
    }
    
    if (!phoneInput.value.trim()) {
      alert('请输入您的电话');
      phoneInput.focus();
      return;
    }
    
    if (!messageInput.value.trim()) {
      alert('请输入您的留言');
      messageInput.focus();
      return;
    }
    
    // 表单提交成功
    alert('感谢您的留言！我们将尽快与您联系。');
    contactForm.reset();
  });
}

// 滚动动画
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// 观察需要动画的元素
const animateElements = document.querySelectorAll('.philosophy-item, .ring-card, .story-text');
animateElements.forEach(el => {
  observer.observe(el);
});

// 响应式菜单（如果需要）
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.nav-list');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
}
