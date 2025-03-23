// Função para alternar o menu mobile
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  let icon = document.querySelector('.icon');
  
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
  } else {
      menuMobile.classList.add('open');
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
  }
}