document.addEventListener('DOMContentLoaded', function(){

  const menuBtn = document.querySelector('.menu-icon')
  const closeSidebarBtn = document.querySelector('.sidebar-hide-btn');
  const sidebar = document.querySelector('.sidebar');
  const sidebarIconBig = document.querySelector('.sidebar-icon_big')

  sidebarIconBig.addEventListener('click', function() {
  })

  menuBtn.addEventListener('click', function() {
    sidebarIconBig.classList.toggle('driveInTop');
    sidebarIconBig.classList.remove('driveOutTop');
    menuBtn.classList.toggle('spin');
    sidebar.classList.toggle('swoopInLeft');
    sidebar.classList.remove('swoopOutLeft');
    sidebar.style.transform = 'translateX(0)'
  })

  closeSidebarBtn.addEventListener('click', function() {
    sidebarIconBig.classList.toggle('driveOutTop');
    sidebarIconBig.classList.remove('driveInTop');
    menuBtn.classList.remove('spin');
    sidebar.classList.toggle('swoopOutLeft');
    sidebar.classList.remove('swoopInLeft');
    sidebar.style.transform = 'translateX(-120%)'
  })


})