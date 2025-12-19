// 愿望单脚本文件

// 模拟愿望单数据
const wishlistItems = [
  {
    id: 1,
    name: "TRUE LOVE 系列",
    description: "经典六爪钻石戒指",
    price: "¥ 15,999",
    image: "img/wKgcl2G5kjeAcIUaAADtrQYLO_s057.jpg",
    category: "rings"
  },
  {
    id: 2,
    name: "LOVE LINE 系列",
    description: "钻石项链",
    price: "¥ 8,999",
    image: "img/tiffany-titan-by-pharrell-williams-73471230_1074178_ED.jpg",
    category: "necklaces"
  },
  {
    id: 3,
    name: "MY HEART 系列",
    description: "心形钻石耳环",
    price: "¥ 7,999",
    image: "img/1204n6r48f.jpg",
    category: "earrings"
  },
  {
    id: 4,
    name: "LOVE KNOT 系列",
    description: "爱心结钻石手链",
    price: "¥ 11,999",
    image: "img/1037j646bx.jpg",
    category: "bracelets"
  },
  {
    id: 5,
    name: "HEART OF OCEAN 系列",
    description: "海洋之心钻石戒指",
    price: "¥ 25,999",
    image: "img/wKgclmO-iVqAUcLQAAHrPQN9ieo182.png",
    category: "rings"
  },
  {
    id: 6,
    name: "FOREVER 系列",
    description: "经典结婚对戒",
    price: "¥ 12,999",
    image: "img/wKgclmMZenyAa174AAGv2umliww183.png",
    category: "rings"
  }
];

// 获取DOM元素
const wishlistItemsContainer = document.getElementById('wishlist-items');
const emptyWishlist = document.getElementById('empty-wishlist');
const searchInput = document.getElementById('wishlist-search');
const searchSubmit = document.querySelector('.search-submit');
const filterBtns = document.querySelectorAll('.filter-btn');

// 初始化页面
function init() {
  renderWishlistItems(wishlistItems);
  setupEventListeners();
}

// 渲染愿望单产品
function renderWishlistItems(items) {
  // 清空容器
  wishlistItemsContainer.innerHTML = '';
  
  // 检查是否有产品
  if (items.length === 0) {
    wishlistItemsContainer.style.display = 'none';
    emptyWishlist.style.display = 'block';
    return;
  }
  
  // 显示产品列表，隐藏空提示
  wishlistItemsContainer.style.display = 'grid';
  emptyWishlist.style.display = 'none';
  
  // 渲染产品
  items.forEach(item => {
    const itemElement = createWishlistItem(item);
    wishlistItemsContainer.appendChild(itemElement);
  });
}

// 创建愿望单产品元素
function createWishlistItem(item) {
  const div = document.createElement('div');
  div.className = 'wishlist-item';
  div.dataset.category = item.category;
  
  div.innerHTML = `
    <div class="wishlist-item-image">
      <div class="product-brand-mark">一生只送一人</div>
      <img src="${item.image}" alt="${item.name} ${item.description}">
    </div>
    <div class="wishlist-item-info">
      <h3 class="wishlist-item-name">${item.name}</h3>
      <p class="wishlist-item-description">${item.description}</p>
      <div class="wishlist-item-price">${item.price}</div>
      <div class="wishlist-item-actions">
        <button class="add-to-cart-btn" data-id="${item.id}">加入购物车</button>
        <button class="remove-btn" data-id="${item.id}">移除此项</button>
      </div>
    </div>
  `;
  
  // 添加事件监听器
  const addToCartBtn = div.querySelector('.add-to-cart-btn');
  const removeBtn = div.querySelector('.remove-btn');
  
  addToCartBtn.addEventListener('click', () => addToCart(item));
  removeBtn.addEventListener('click', () => removeFromWishlist(item.id));
  
  return div;
}

// 搜索功能 - 使用正则表达式
function searchItems(query) {
  if (!query.trim()) {
    return wishlistItems;
  }
  
  // 创建正则表达式，忽略大小写
  const regex = new RegExp(query.trim(), 'i');
  
  return wishlistItems.filter(item => {
    return regex.test(item.name) || regex.test(item.description);
  });
}

// 分类过滤功能
function filterItems(category) {
  if (category === 'all') {
    return wishlistItems;
  }
  
  return wishlistItems.filter(item => item.category === category);
}

// 组合搜索和过滤功能
function filterAndSearchItems(category, query) {
  // 先过滤分类
  const filteredByCategory = filterItems(category);
  
  // 再搜索
  if (query.trim()) {
    const regex = new RegExp(query.trim(), 'i');
    return filteredByCategory.filter(item => {
      return regex.test(item.name) || regex.test(item.description);
    });
  }
  
  return filteredByCategory;
}

// 添加到购物车
function addToCart(item) {
  // 这里可以添加实际的添加到购物车逻辑
  alert(`已将 "${item.name}" 添加到购物车！`);
}

// 从愿望单移除
function removeFromWishlist(itemId) {
  // 这里可以添加实际的移除逻辑
  alert(`已从愿望单中移除商品！`);
  

}

// 设置事件监听器
function setupEventListeners() {
  // 搜索输入事件
  searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
    const filteredItems = filterAndSearchItems(activeCategory, query);
    renderWishlistItems(filteredItems);
  });
  
  // 搜索提交事件
  searchSubmit.addEventListener('click', () => {
    const query = searchInput.value;
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
    const filteredItems = filterAndSearchItems(activeCategory, query);
    renderWishlistItems(filteredItems);
  });
  
  // 搜索框回车提交
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchSubmit.click();
    }
  });
  
  // 过滤按钮事件
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 更新按钮状态
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // 获取当前分类和搜索关键词
      const category = btn.dataset.category;
      const query = searchInput.value;
      
      // 过滤和搜索
      const filteredItems = filterAndSearchItems(category, query);
      renderWishlistItems(filteredItems);
    });
  });
  
  // 搜索弹窗功能
  const searchBtn = document.querySelector('.search-btn');
  const searchModal = document.querySelector('.search-modal');
  const searchClose = document.querySelector('.search-close');
  const modalSearchInput = document.querySelector('.search-modal .search-input');
  const modalSearchSubmit = document.querySelector('.search-modal .search-submit');
  
  // 打开搜索弹窗
  searchBtn.addEventListener('click', () => {
    searchModal.classList.add('active');
    setTimeout(() => modalSearchInput.focus(), 300);
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
  modalSearchSubmit.addEventListener('click', () => {
    const searchTerm = modalSearchInput.value.trim();
    if (searchTerm) {
      alert(`搜索: ${searchTerm}`);
      searchModal.classList.remove('active');
    }
  });
  
  // 搜索框回车提交
  modalSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      modalSearchSubmit.click();
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
}

// 窗口加载完成后执行
window.addEventListener('load', init);