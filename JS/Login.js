// 登录表单验证脚本

// 正则表达式模式
const emailRegex = /^[^s@]+@[^s@]+\.[^s@]+$/;
const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// 获取DOM元素
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('username-error');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('password-error');

// 验证用户名/邮箱
function validateUsername() {
  const value = usernameInput.value.trim();
  
  if (value === '') {
    usernameError.textContent = '请输入用户名或邮箱';
    usernameInput.classList.add('error');
    return false;
  }
  
  if (emailRegex.test(value)) {
    // 邮箱格式验证通过
    usernameError.textContent = '';
    usernameInput.classList.remove('error');
    return true;
  } else if (usernameRegex.test(value)) {
    // 用户名格式验证通过
    usernameError.textContent = '';
    usernameInput.classList.remove('error');
    return true;
  } else {
    // 格式不正确
    usernameError.textContent = '请输入有效的邮箱或用户名（3-20个字符，字母数字下划线）';
    usernameInput.classList.add('error');
    return false;
  }
}

// 验证密码
function validatePassword() {
  const value = passwordInput.value;
  
  if (value === '') {
    passwordError.textContent = '请输入密码';
    passwordInput.classList.add('error');
    return false;
  }
  
  if (!passwordRegex.test(value)) {
    passwordError.textContent = '密码需包含大小写字母、数字和特殊字符，至少8位';
    passwordInput.classList.add('error');
    return false;
  } else {
    passwordError.textContent = '';
    passwordInput.classList.remove('error');
    return true;
  }
}

// 表单提交事件处理
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // 验证所有字段
  const isUsernameValid = validateUsername();
  const isPasswordValid = validatePassword();
  
  if (isUsernameValid && isPasswordValid) {
    // 表单验证通过，可以提交到服务器
    alert('登录成功！');
    // 这里可以添加实际的登录逻辑，如发送API请求
    // loginForm.submit();
  }
});

// 实时验证
usernameInput.addEventListener('input', validateUsername);
passwordInput.addEventListener('input', validatePassword);

// 搜索弹窗功能
const searchBtn = document.querySelector('.search-btn');
const searchModal = document.querySelector('.search-modal');
const searchClose = document.querySelector('.search-close');
const searchInput = document.querySelector('.search-input');
const searchSubmit = document.querySelector('.search-submit');

// 打开搜索弹窗
searchBtn.addEventListener('click', () => {
  searchModal.classList.add('active');
  setTimeout(() => searchInput.focus(), 300);
});

// 关闭搜索弹窗
searchClose.addEventListener('click', () => {
  searchModal.classList.remove('active');
});

// 点击弹窗外部关闭
searchModal.addEventListener('click', (e) => {
  if (e.target === searchModal) {
    searchModal.classList.remove('active');
  }
});

// 搜索提交
searchSubmit.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    alert(`搜索: ${searchTerm}`);
    searchModal.classList.remove('active');
  }
});

// 搜索框回车提交
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchSubmit.click();
  }
});

// 平滑滚动功能
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});

// 页面滚动效果
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.backgroundColor = '#fff';
    header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
  }
});

// 语言选择菜单
const langTrigger = document.querySelector('.lang-trigger');
const langMenu = document.querySelector('.lang-menu');
const langItems = document.querySelectorAll('.lang-item');

// 点击语言选择项
langItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const langText = item.textContent;
    langTrigger.textContent = langText === '简体中文' ? '中' : 'En';
  });
});

// 窗口加载完成后执行
window.addEventListener('load', () => {
  // 添加页面加载动画效果
  document.body.classList.add('loaded');
  
  // 初始化表单状态
  usernameInput.value = '';
  passwordInput.value = '';
});

// 添加CSS错误样式
const style = document.createElement('style');
style.textContent = `
  .form-input.error {
    border-color: #e61f34;
    background-color: #fff5f5;
  }
  
  .form-input.error:focus {
    box-shadow: 0 0 0 3px rgba(230, 31, 52, 0.1);
  }
  
  body.loaded {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  
  body {
    opacity: 0;
  }
`;
document.head.appendChild(style);