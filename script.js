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
const toggleCertBtn = document.getElementById('toggleCertBtn');
const certWrapper = document.getElementById('certWrapper');
const certs = document.getElementById('certs');

toggleCertBtn.addEventListener('click', () => {
  certWrapper.classList.toggle('expand');
  certs.classList.toggle('show');
  toggleCertBtn.textContent = certWrapper.classList.contains('expand') ? 'See Less' : 'See More';
});

// Toggle Project
const toggleProjectBtn = document.getElementById('toggleProjectBtn');
const ProjetWrapper = document.getElementById('ProjectWrapper');
const Project = document.getElementById('Project');

toggleProjectBtn.addEventListener('click', () => {
  ProjectWrapper.classList.toggle('expand');
  Project.classList.toggle('show');
  toggleProjectBtn.textContent = ProjectWrapper.classList.contains('expand') ? 'See Less' : 'See More';
});

// Toggle Video projects
const toggleVideoBtn = document.getElementById('toggleVideosBtn');
const ProjectWrapperVideo = document.getElementById('ProjectWrapperVideo');
const VideoProject = document.getElementById('VideoProject');
// const Videos = document.getElementById('');

toggleVideoBtn.addEventListener('click', () => {
  ProjectWrapperVideo.classList.toggle('expand');
  VideoProject.classList.toggle('show');
  toggleVideoBtn.textContent = ProjectWrapperVideo.classList.contains('expand') ? 'Hide Videos' : 'See Videos';
})

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


// For my modal

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

var imgContent = document.getElementById("imgContent");


function triggerOpen (event) {
  modal.style.display = "block";
  imgContent.src = event.src
}

span.onclick = () => {
  modal.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}