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

    //轮播图实现效果
 const swiperWrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    const prevBtn = document.querySelector('.swiper-btn-prev');
    const nextBtn = document.querySelector('.swiper-btn-next');
    const paginationItems = document.querySelectorAll('.pagination-item');
    let currentIndex = 0; 
    const slideCount = slides.length; 
    const autoPlayInterval = 5000; 
    let autoPlayTimer; 
    function switchSlide(index) {

      if (index < 0) index = slideCount - 1;
      if (index >= slideCount) index = 0;
      
 
      swiperWrapper.style.transform = `translateX(-${index * 100}%)`;
      
   
      currentIndex = index;
      
   
      paginationItems.forEach((item, i) => {
        item.classList.toggle('active', i === currentIndex);
      });
    }


    function nextSlide() {
      switchSlide(currentIndex + 1);
    }

    
    function prevSlide() {
      switchSlide(currentIndex - 1);
    }

   
    paginationItems.forEach(item => {
      item.addEventListener('click', () => {
        const index = parseInt(item.dataset.index);
        switchSlide(index);
       
        resetAutoPlay();
      });
    });


    function autoPlay() {
      autoPlayTimer = setInterval(nextSlide, autoPlayInterval);
    }

 
    function resetAutoPlay() {
      clearInterval(autoPlayTimer);
      autoPlay();
    }

 
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoPlay();
    });
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoPlay();
    });

   
    const swiperContainer = document.querySelector('.banner-swiper');
    swiperContainer.addEventListener('mouseenter', () => {
      clearInterval(autoPlayTimer);
    });
    swiperContainer.addEventListener('mouseleave', () => {
      autoPlay();
    });


    autoPlay();
window.onload = function() {
 
  var langSwitch = document.querySelector('.lang-switch');
  var searchBtn = document.querySelector('.search-btn');
  

 
  if (langSwitch) {
    langSwitch.addEventListener('click', function() {
     
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
    });
  }


}
