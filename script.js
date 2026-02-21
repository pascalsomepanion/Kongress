// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn')?.addEventListener('click', function () {
  document.querySelector('.mobile-menu').classList.toggle('open');
  this.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.remove('open');
    document.querySelector('.mobile-menu-btn').classList.remove('active');
  });
});

// Header scroll behavior - hide on scroll down, show on scroll up
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 100) {
    if (currentScroll > lastScroll) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
  }
  lastScroll = currentScroll;
});
