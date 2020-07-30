document.addEventListener('DOMContentLoaded', () => {

  const header = document.querySelector('.header');
  const navbar = document.querySelector('.navbar');
  const navbarLogo = document.querySelector('.navbar-logo');
  const menuBtn = document.querySelector('.menu-icon')
  const closeSidebarBtn = document.querySelector('.sidebar-hide-btn');
  const sidebar = document.querySelector('.sidebar');
  const sidebarIconBig = document.querySelector('.sidebar-icon_big');
  const sideNav = document.querySelector('.sidebar-nav');
  const sideTitle = document.querySelector('.sidebar-title');
  const hero = document.querySelector('.hero');
  const heroTitle = document.querySelector('#hero-title');
  const sliderBtn = document.querySelector('.slider-btn');
  const btnCircleTop = document.querySelector('.circle_top');
  const btnCircleBottom = document.querySelector('.circle_bottom');
  const servicesLink = document.querySelectorAll('.services__link');
  const portfolioGridItem = document.querySelectorAll('.portfolio-grid__item');
  const portfolioGridInfo = document.querySelectorAll('.portfolio-grid__item-info-content');

  function showSidebar() {
    sidebar.style.transform = 'translateX(0)';
    sidebarIconBig.classList.toggle('driveInTop');
    sidebarIconBig.classList.remove('fadeOutTop');
    sideNav.classList.toggle('popInBottom');
    sideNav.classList.remove('fadeOutBottom');
    sideTitle.classList.toggle('popInRight');
    sideTitle.classList.remove('popOutLeft');
    sidebar.classList.toggle('swoopInLeft');
    sidebar.classList.remove('swoopOutLeft');
  }

  function hideSidebar() {
    sidebar.style.transform = 'translateX(-120%)';
    sidebarIconBig.classList.toggle('fadeOutTop');
    sidebarIconBig.classList.remove('driveInTop');
    sideNav.classList.toggle('fadeOutBottom');
    sideNav.classList.remove('popInBottom');
    sideTitle.classList.toggle('popOutLeft');
    sideTitle.classList.remove('popInRight');
    sidebar.classList.toggle('swoopOutLeft');
    sidebar.classList.remove('swoopInLeft');
  }

  function showMenuBtn() {
    menuBtn.classList.remove('fold');
    menuBtn.classList.toggle('pullRight');
    menuBtn.style.transform = 'translateX(0)';
  }

  function hideMenuBtn() {
    menuBtn.style.transform = 'translateX(100px)';
    menuBtn.classList.toggle('fold');
    menuBtn.classList.remove('pullRight');
  }

  function pinNavbar() {
    if (window.pageYOffset > document.querySelector('.navbar-logo').offsetTop) {
      hero.style.marginTop = '80px';
      navbar.classList.add("navbar_sticky");
      navbarLogo.classList.add("navbar-logo_sticky");
      menuBtn.classList.add("menu-icon_sticky");
    } else {
      hero.style.marginTop = '0';
      navbar.classList.remove("navbar_sticky");
      navbarLogo.classList.remove("navbar-logo_sticky");
      menuBtn.classList.remove("menu-icon_sticky");
    }
  }

  function changeSlide() {
    if(btnCircleTop.classList.contains('circle_big')) {
      btnCircleTop.classList.remove('circle_big');
      btnCircleTop.classList.toggle('circle_small');
      btnCircleBottom.classList.toggle('circle_big');
      btnCircleBottom.classList.remove('circle_small');
      heroTitle.innerText = 'Designer';
      header.classList.add('header_sec')
    } else {
      btnCircleBottom.classList.remove('circle_big');
      btnCircleBottom.classList.toggle('circle_small');
      btnCircleTop.classList.toggle('circle_big');
      btnCircleTop.classList.remove('circle_small');
      heroTitle.innerText = 'Photographer';
      header.classList.remove('header_sec')
    }
  }

  function animateLink () {
    servicesLink.this.classList.add('vivify');
    servicesLink.this.classList.add('popInLeft');
  }

  window.onscroll = () =>  { pinNavbar() };

  menuBtn.addEventListener('click', () =>  {
    showSidebar();
    hideMenuBtn();
    navbar.classList.toggle('navbar_sticky_transp')
  });

  closeSidebarBtn.addEventListener('click', () =>  {
    hideSidebar();
    showMenuBtn();
    navbar.classList.remove('navbar_sticky_transp');
  });

  sliderBtn.addEventListener('click', () =>  {
    changeSlide();
  });

  
})