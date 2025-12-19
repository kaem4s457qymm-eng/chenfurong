// Jewelry Collection.js

// 产品筛选功能
const filterButtons = document.querySelectorAll('.filter-btn');
const productItems = document.querySelectorAll('.product-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 移除所有按钮的active类
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // 给当前点击的按钮添加active类
    button.classList.add('active');
    
    // 获取筛选类别
    const filterCategory = button.textContent;
    
    // 根据筛选类别显示/隐藏产品
    productItems.forEach(item => {
      if (filterCategory === '全部') {
        item.style.display = 'block';
      } else {
        const productName = item.querySelector('.product-name').textContent;
        const productDescription = item.querySelector('.product-description').textContent;
        
        // 这里可以根据实际产品分类进行调整
        // 目前使用简单的文本匹配，实际项目中可以使用data属性
        if (productName.includes(filterCategory) || productDescription.includes(filterCategory)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });
  });
});

// 搜索功能
const searchBtn = document.querySelector('.search-btn');
const searchModal = document.querySelector('.search-modal');
const searchClose = document.querySelector('.search-close');
const searchInput = document.querySelector('.search-input');
const searchSubmit = document.querySelector('.search-submit');

// 打开搜索弹窗
searchBtn.addEventListener('click', () => {
  searchModal.style.display = 'flex';
  searchInput.focus();
});

// 关闭搜索弹窗
searchClose.addEventListener('click', () => {
  searchModal.style.display = 'none';
  searchInput.value = '';
});

// 点击弹窗外部关闭
searchModal.addEventListener('click', (e) => {
  if (e.target === searchModal) {
    searchModal.style.display = 'none';
    searchInput.value = '';
  }
});

// 搜索提交
searchSubmit.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  if (searchTerm) {
    // 这里可以实现实际的搜索功能
    console.log('搜索:', searchTerm);
    // 关闭搜索弹窗
    searchModal.style.display = 'none';
    searchInput.value = '';
    
    // 示例：筛选产品
    productItems.forEach(item => {
      const productName = item.querySelector('.product-name').textContent.toLowerCase();
      const productDescription = item.querySelector('.product-description').textContent.toLowerCase();
      
      if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
    
    // 更新筛选按钮状态
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });
  }
});

// 按Enter键搜索
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchSubmit.click();
  }
});

// 加载更多功能
const loadMoreBtn = document.querySelector('.load-more-btn');

loadMoreBtn.addEventListener('click', () => {
  // 这里可以实现实际的加载更多功能
  // 示例：显示加载中状态
  loadMoreBtn.innerHTML = '加载中...';
  loadMoreBtn.disabled = true;
  
  // 模拟加载延迟
  setTimeout(() => {
    // 恢复按钮状态
    loadMoreBtn.innerHTML = '加载更多';
    loadMoreBtn.disabled = false;
    
    // 示例：显示提示信息
    alert('已加载全部产品');
  }, 1500);
});

// 产品详情查看功能
const productBtns = document.querySelectorAll('.product-btn');

productBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const productItem = btn.closest('.product-item');
    const productName = productItem.querySelector('.product-name').textContent;
    const productDescription = productItem.querySelector('.product-description').textContent;
    
    // 这里可以实现跳转到产品详情页或显示详情模态框
    console.log('查看详情:', productName, productDescription);
    alert(`查看${productName}详情`);
  });
});

// 系列分类点击功能
const categoryItems = document.querySelectorAll('.category-item');

categoryItems.forEach(item => {
  item.addEventListener('click', () => {
    const categoryName = item.querySelector('.category-overlay h3').textContent;
    
    // 这里可以实现跳转到对应分类页面或筛选产品
    console.log('点击分类:', categoryName);
    
    // 示例：筛选对应分类的产品
    filterButtons.forEach(btn => {
      if (btn.textContent === categoryName) {
        btn.click();
      }
    });
  });
});

// 监听窗口大小变化，确保响应式布局正常
window.addEventListener('resize', () => {
  // 这里可以添加响应式调整的代码
  console.log('窗口大小变化:', window.innerWidth);
});

// 页面加载完成后执行
window.addEventListener('load', () => {
  console.log('珠宝系列页面加载完成');
});
