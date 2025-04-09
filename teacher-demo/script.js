document.addEventListener('DOMContentLoaded', () => {
  // Add active class to current nav item
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.parentElement.classList.add('active');
    }
  });

  // Set current date in Russian
  const currentDate = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const dateFormatter = new Intl.DateTimeFormat('ru-RU', options);
  document.querySelector('.current-date').textContent = dateFormatter.format(currentDate);

  // Make top bar sticky with shadow on scroll
  const topBar = document.querySelector('.top-bar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 50) {
      topBar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
      topBar.style.boxShadow = 'var(--shadow)';
    }

    lastScroll = currentScroll;
  });

  // Handle notifications and user profile clicks
  const notifications = document.querySelector('.notifications');
  const userProfile = document.querySelector('.user-profile');

  notifications.addEventListener('click', (e) => {
    e.stopPropagation();
    // Add notification panel logic here
  });

  userProfile.addEventListener('click', (e) => {
    e.stopPropagation();
    // Add user menu logic here
  });

  // Close menus when clicking outside
  document.addEventListener('click', () => {
    // Add logic to close open menus
  });
});