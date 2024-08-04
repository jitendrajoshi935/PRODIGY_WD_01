// resp.js
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('.nav-list');
  const rightNav = document.querySelector('.rightnav');

  burger.addEventListener('click', () => {
    navList.classList.toggle('v-class');
    rightNav.classList.toggle('v-class');
    burger.classList.toggle('toggle');
  });
});

