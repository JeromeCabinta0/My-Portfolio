// script.js

// Toggle mobile menu
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
});

function type() {
  if (charIndex < roles[roleIndex].length) {
    typingSpan.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, nextTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typingSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (roles.length) setTimeout(type, nextTextDelay);
});

// Toggle certificates
const toggleBtn = document.getElementById('toggleBtn');
const certWrapper = document.getElementById('certWrapper');
const certs = document.getElementById('certs');

toggleBtn.addEventListener('click', () => {
  certWrapper.classList.toggle('expand');
  certs.classList.toggle('show');
  toggleBtn.textContent = certWrapper.classList.contains('expand') ? 'See Less' : 'See More';
});

// Contact form submission (no backend, just simple feedback)
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Simple validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    formMessage.textContent = "Thank you for your message! I will get back to you soon.";
    formMessage.style.color = "lightgreen";
  } else {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
  }

  formMessage.classList.remove('hidden');

  // Reset form
  contactForm.reset();
});
