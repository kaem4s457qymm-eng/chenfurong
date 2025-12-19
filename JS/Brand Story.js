// Brand Story.js
document.addEventListener('DOMContentLoaded', function() {
  // 搜索按钮点击事件
  document.querySelector('.search-btn').addEventListener('click', function() {
    document.querySelector('.search-modal').style.display = 'flex';
  });

  // 关闭搜索弹窗按钮点击事件
  document.querySelector('.search-close').addEventListener('click', function() {
    document.querySelector('.search-modal').style.display = 'none';
  });

  // 点击弹窗外部关闭搜索弹窗
  document.querySelector('.search-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
    }
  });
});
