const whatsappBtn = document.querySelector('.whatsapp');
const floatingBtn = document.querySelector('.floating-btn');

window.addEventListener('scroll', () => {
  const footerTop = footer.offsetTop;
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollTop + windowHeight > footerTop) {
    whatsappBtn.style.opacity = 1;
    whatsappBtn.style.transform = 'translateY(0)';
  } else {
    whatsappBtn.style.opacity = 0;
    whatsappBtn.style.transform = 'translateY(20px)';
  }
});

floatingBtn.addEventListener('click', () => {
  window.location.href = 'https://wa.me/NUMERO_DE_WHATSAPP';
});