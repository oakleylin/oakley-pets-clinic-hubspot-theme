(function() {
  const initHeroSwiper = function() {
    const containers = document.querySelectorAll('.custom-hero-carousel');
    
    containers.forEach(container => {
      // 容錯處理：HubSpot 的布林值可能以 'true'、'1' 或真布林值存在
      const isAutoplay = container.dataset.autoplay === 'true' || container.dataset.autoplay === '1';
      const slideSpeed = parseInt(container.dataset.speed) || 5000;
      const showDots = container.dataset.dots !== 'false';
      const showArrows = container.dataset.arrows !== 'false';

      const options = {
        loop: true,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        speed: 1000, // 切換過程的時間
        
        // 核心修正：Autoplay 配置
        autoplay: isAutoplay ? {
          delay: slideSpeed,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        } : false,

        // 分頁器
        pagination: {
          el: container.querySelector('.swiper-pagination'),
          clickable: true,
          enabled: showDots
        },

        // 導覽箭頭
        navigation: {
          nextEl: container.querySelector('.swiper-button-next'),
          prevEl: container.querySelector('.swiper-button-prev'),
          enabled: showArrows
        },

        // 監聽器：確保在 HubSpot 編輯器或動態加載時能正確運作
        observer: true,
        observeParents: true,
        watchSlidesProgress: true
      };

      // 初始化 Swiper
      const swiper = new Swiper(container, options);

      // UI 顯示控制
      if (!showDots) container.querySelector('.swiper-pagination').style.display = 'none';
      if (!showArrows) {
        container.querySelector('.swiper-button-next').style.display = 'none';
        container.querySelector('.swiper-button-prev').style.display = 'none';
      }
    });
  };

  // 確保 Swiper 載入後再執行
  if (typeof Swiper !== 'undefined') {
    initHeroSwiper();
  } else {
    let timer = 0;
    const checkInterval = setInterval(() => {
      timer++;
      if (typeof Swiper !== 'undefined') {
        clearInterval(checkInterval);
        initHeroSwiper();
      }
      if (timer > 50) clearInterval(checkInterval); // 5秒後停止嘗試
    }, 100);
  }
})();