document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  const navbar = document.getElementById('navbar');
  
  hamburger.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    navbar.classList.toggle('navbar-hidden');
  });
});