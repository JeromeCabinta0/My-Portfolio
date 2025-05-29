// Toggle nav menu on mobile
document.querySelector('.menu-icon').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('active');
});

// Toggle Certificates
document.getElementById('toggleBtn').addEventListener('click', () => {
  const wrapper = document.getElementById('certWrapper');
  const certs = document.getElementById('certs');
  wrapper.classList.toggle('expand');
  certs.classList.toggle('show');
  document.getElementById('toggleBtn').textContent =
    wrapper.classList.contains('expand') ? 'See Less' : 'See More';
});

// Mobile menu toggle (if needed)
  const menuIcon = document.querySelector(".menu-icon");
  const nav = document.querySelector("nav");

  menuIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

// Form handler
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('formMessage').textContent = "Message sent successfully!";
  document.getElementById('formMessage').classList.remove('hidden');
  e.target.reset();
});
