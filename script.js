(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  const nav = document.querySelectorAll('.nav-links a[data-page]');
  nav.forEach(a => {
    if(a.getAttribute('data-page') === path) a.classList.add('active');
  });
})();
