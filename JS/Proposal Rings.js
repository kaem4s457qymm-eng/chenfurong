// 导航菜单激活状态
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// 钻戒系列分类过滤
const categoryBtns = document.querySelectorAll('.category-btn');
const ringCards = document.querySelectorAll('.ring-card');

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // 移除所有按钮的active类
    categoryBtns.forEach(b => b.classList.remove('active'));
    // 为当前按钮添加active类
    btn.classList.add('active');
    
    const category = btn.getAttribute('data-category');
    
    // 过滤钻戒卡片
    ringCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || category === cardCategory) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// 轮播图功能
const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiperSlides = document.querySelectorAll('.swiper-slide');
const prevBtn = document.querySelector('.swiper-btn-prev');
const nextBtn = document.querySelector('.swiper-btn-next');
const paginationItems = document.querySelectorAll('.pagination-item');
let currentSlide = 0;
const slideCount = swiperSlides.length;

// 更新轮播图显示
function updateSlide() {
  swiperWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  
  // 更新分页指示器
  paginationItems.forEach((item, index) => {
    item.classList.toggle('active', index === currentSlide);
  });
}

// 下一张
nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slideCount;
  updateSlide();
});

// 上一张
prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slideCount) % slideCount;
  updateSlide();
});

// 点击分页指示器切换
paginationItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentSlide = index;
    updateSlide();
  });
});

// 自动轮播
let autoSlideInterval = setInterval(() => {
  nextBtn.click();
}, 5000);

// 鼠标悬停时停止自动轮播
const bannerSwiper = document.querySelector('.banner-swiper');
bannerSwiper.addEventListener('mouseenter', () => {
  clearInterval(autoSlideInterval);
});

// 鼠标离开时恢复自动轮播
bannerSwiper.addEventListener('mouseleave', () => {
  autoSlideInterval = setInterval(() => {
    nextBtn.click();
  }, 5000);
});

// 搜索弹窗
const searchBtn = document.querySelector('.search-btn');
const searchModal = document.querySelector('.search-modal');
const searchClose = document.querySelector('.search-close');

searchBtn.addEventListener('click', () => {
  searchModal.style.display = 'flex';
});

searchClose.addEventListener('click', () => {
  searchModal.style.display = 'none';
});

// 点击模态框外部关闭
searchModal.addEventListener('click', (e) => {
  if (e.target === searchModal) {
    searchModal.style.display = 'none';
  }
});

// 滚动到指定位置
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
  ctaBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// 平滑滚动到锚点
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', () => {
  // 添加页面加载动画
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// 移动端适配
if (window.innerWidth <= 768) {
  // 移动端轮播图调整
  const slideContents = document.querySelectorAll('.slide-content');
  slideContents.forEach(content => {
    content.style.left = '5%';
    content.style.transform = 'translateY(-50%) scale(0.8)';
  });
}