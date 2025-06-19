// 導覽列滾動陰影
window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
    document.getElementById('backToTop').style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  
  // Intersection Observer - 淡入效果
  const observers = document.querySelectorAll('.fade-in');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  
  observers.forEach(el => io.observe(el));
  
  // 表單提示
  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const msg = document.getElementById('form-message');
    msg.classList.remove('hidden');
    setTimeout(() => msg.classList.add('hidden'), 3000);
  });
  
  // 回到頂部按鈕
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // 手機選單展開
  document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });

 // header滑動隱藏
  let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 80) {
    // 向下滑：隱藏 header
    header.style.transform = 'translateY(-100%)';
  } else {
    // 向上滑：顯示 header
    header.style.transform = 'translateY(0)';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 保證非負
});

