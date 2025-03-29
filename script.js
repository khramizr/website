window.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggleIndex = document.getElementById('slider');
  const toggleBlog = document.getElementById('slider-blog');

  function setTheme(isDark) {
    if (isDark) {
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  let storedTheme = localStorage.getItem('theme');
  if (!storedTheme) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(true);
      if (toggleIndex) toggleIndex.checked = true;
      if (toggleBlog) toggleBlog.checked = true;
    } else {
      setTheme(false);
    }
  } else {
    if (storedTheme === 'dark') {
      setTheme(true);
      if (toggleIndex) toggleIndex.checked = true;
      if (toggleBlog) toggleBlog.checked = true;
    } else {
      setTheme(false);
    }
  }

  if (toggleIndex) {
    toggleIndex.addEventListener('change', (e) => {
      setTheme(e.target.checked);
    });
  }
  if (toggleBlog) {
    toggleBlog.addEventListener('change', (e) => {
      setTheme(e.target.checked);
    });
  }
  

  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    });
  }
});
