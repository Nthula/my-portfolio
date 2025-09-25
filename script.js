document.addEventListener("DOMContentLoaded", () => {
  const homeText = document.querySelector(".home-text");
  const typingText = document.getElementById("typing-text");
  const nameToType = "Olorato Nthula";
  let index = 0;
  let typed = false;

  const homeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !typed) {
        typeWriter();
        typed = true; // prevents re-triggering
      }
    });
  }, { threshold: 0.3 }); // lower threshold ensures it triggers earlier

  homeObserver.observe(homeText);

  function typeWriter() {
    if (index < nameToType.length) {
      typingText.textContent += nameToType.charAt(index);
      index++;
      setTimeout(typeWriter, 150); // typing speed
    }
  }
});


const navLinks = document.querySelectorAll('.nav-links a');

// Smooth scroll
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Update active link on scroll
window.addEventListener('scroll', () => {
  let current = '';

  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
