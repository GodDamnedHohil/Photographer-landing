document.addEventListener('DOMContentLoaded', () => {

  const headerBg = document.querySelectorAll('.header-bg');
  const navbar = document.querySelector('.navbar');
  const navbarLogo = document.querySelector('.navbar-logo');
  const menuBtn = document.querySelector('.menu-icon')
  const closeSidebarBtn = document.querySelector('.sidebar-hide-btn');
  const sidebar = document.querySelector('.sidebar');
  const sidebarIconBig = document.querySelector('.sidebar-icon_big');
  const hero = document.querySelector('.hero');
  const heroTitle = document.querySelector('#hero-title');
  const sliderBtn = document.querySelector('.slider-btn');
  const btnCircleTop = document.querySelector('.circle_top');
  const btnCircleBottom = document.querySelector('.circle_bottom');
  const portfolioGridInfo = document.querySelectorAll('.portfolio-grid__item-info');
  const galleryContainer = document.querySelector('.gallery__container');
  const gallerySlide = document.querySelector('.gallery-slide')
  const galleryClosebtn = document.querySelector('.gallery-close-btn');
  const form = document.querySelector('.feedback-form');
  const formBtn = document.querySelector('.feedback-form-btn');
  const feedbackDone = document.querySelectorAll('.feedback-done');
  const feedbackTitleContainer = document.querySelector('.feedback-title__container'); 
  const feedbackFormInput = document.querySelectorAll('.feedback-form__input');
  const animContent = document.querySelectorAll('.anim-content');

  let sliderBtnLock = true;

  function showSidebar() {
    sidebar.style.transform = 'translateX(0)';
    sidebarIconBig.classList.toggle('driveInTop');
    sidebarIconBig.classList.remove('fadeOutTop');
  }

  function hideSidebar() {
    sidebar.style.transform = 'translateX(-120%)';
    sidebarIconBig.classList.toggle('fadeOutTop');
    sidebarIconBig.classList.remove('driveInTop');
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

  function unlockSliderBtn () {
    sliderBtnLock = true;
  }

  function changeText() {
    if(btnCircleTop.classList.contains('circle_big')) {
      heroTitle.innerText = 'Photographer';
    } else {
      heroTitle.innerText = 'Designer';
    }
  }

  function animateSlide() {
    animContent[0].classList.add('active');
  }

  function changeSlide() {
    if(btnCircleTop.classList.contains('circle_big')) {
      btnCircleTop.classList.remove('circle_big');
      btnCircleTop.classList.toggle('circle_small');
      btnCircleBottom.classList.toggle('circle_big');
      btnCircleBottom.classList.remove('circle_small');
      headerBg[1].classList.add('active');
    } else {
      btnCircleBottom.classList.remove('circle_big');
      btnCircleBottom.classList.toggle('circle_small');
      btnCircleTop.classList.toggle('circle_big');
      btnCircleTop.classList.remove('circle_small');
      headerBg[1].classList.remove('active')
    }
    animContent[0].classList.remove('active')
    setTimeout(changeText, 500);
    setTimeout(animateSlide, 500);
  }
  
  

  function getOffsetTop(elem) { 
    const rect = elem.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop
    };
  
  }

  function animOnScroll (params) {
    for (let i = 0; i < animContent.length; i++) {
      const animItem = animContent[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = getOffsetTop(animItem).top;
      const animStartIndex = 10;

      let animItemPoint = window.innerHeight - animItemHeight / animStartIndex;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStartIndex;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('active');
      } else {
        if(!animItem.classList.contains('anim-no-hide')) animItem.classList.remove('active');
      }
    }
  }

  setTimeout(animOnScroll(), 500);
  
  window.onscroll = () =>  { pinNavbar(), animOnScroll() };

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
    if (sliderBtnLock) {
      changeSlide();
      sliderBtnLock = false;
      setTimeout(unlockSliderBtn, 1000);
    } 
    
  });

  portfolioGridInfo.forEach((item, i) => {
    item.addEventListener('click', () => {
      galleryContainer.classList.remove('hidden');
      gallerySlide.src = `img/portfolio-picture-${i+1}.jpg`;
      document.body.style.overflow = 'hidden';
    })
  })

  galleryClosebtn.addEventListener('click', () => {
    galleryContainer.classList.add('hidden');
    document.body.style.overflow = 'scroll';
  })

  formBtn.addEventListener('click', () => {
    if(feedbackFormInput[0].value.length != 0 && feedbackFormInput[1].value.length != 0 && feedbackFormInput[2].value.length != 0) {
      event.preventDefault();
      feedbackTitleContainer.classList.add('hidden');
      form.classList.add('hidden');
      feedbackDone.forEach((item) => {
        item.classList.toggle('hidden');
      })
    }
    
  })
})