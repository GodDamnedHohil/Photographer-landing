document.addEventListener('DOMContentLoaded', function(){

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

  menuBtn.addEventListener('click', function() {
    sidebarIconBig.classList.toggle('driveInTop');
    sidebarIconBig.classList.remove('fadeOutTop');
    sideNav.classList.toggle('popInBottom');
    sideNav.classList.remove('fadeOutBottom');
    sideTitle.classList.toggle('popInRight');
    sideTitle.classList.remove('popOutLeft');
    sidebar.classList.toggle('swoopInLeft');
    sidebar.classList.remove('swoopOutLeft');
    sidebar.style.transform = 'translateX(0)';
    menuBtn.classList.toggle('fold');
    menuBtn.classList.remove('pullRight');
    menuBtn.style.transform = 'translateX(100px)';
    navbar.classList.toggle('navbar_sticky_transp')
  })

  closeSidebarBtn.addEventListener('click', function() {
    sidebarIconBig.classList.toggle('fadeOutTop');
    sidebarIconBig.classList.remove('driveInTop');
    sideNav.classList.toggle('fadeOutBottom');
    sideNav.classList.remove('popInBottom');
    sideTitle.classList.toggle('popOutLeft');
    sideTitle.classList.remove('popInRight');
    sidebar.classList.toggle('swoopOutLeft');
    sidebar.classList.remove('swoopInLeft');
    sidebar.style.transform = 'translateX(-120%)';
    menuBtn.classList.remove('fold');
    menuBtn.classList.toggle('pullRight');
    menuBtn.style.transform = 'translateX(0)';
    navbar.classList.remove('navbar_sticky_transp');
  })

  window.onscroll = function() { pinNavbar() };

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

  sliderBtn.addEventListener('click', function() {
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
  })
})