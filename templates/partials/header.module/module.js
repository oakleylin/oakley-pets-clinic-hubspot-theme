document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const menuWrapper = document.getElementById("headerMenuWrapper");
  const iconHamburger = toggleBtn.querySelector(".icon-hamburger");
  const iconClose = toggleBtn.querySelector(".icon-close");

  toggleBtn.addEventListener("click", function() {
    // 切換選單的展開/收合 class
    menuWrapper.classList.toggle("is-open");
    
    // 切換圖示 (三條線 <-> X)
    if (menuWrapper.classList.contains("is-open")) {
      iconHamburger.style.display = "none";
      iconClose.style.display = "block";
    } else {
      iconHamburger.style.display = "block";
      iconClose.style.display = "none";
    }
  });
});