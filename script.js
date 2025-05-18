// Smooth tab switching for projects (if using tab structure in future)
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-button");
  const panels = document.querySelectorAll(".tab-panel");

  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      // Remove active classes
      buttons.forEach((btn) => btn.classList.remove("active"));
      panels.forEach((panel) => panel.classList.remove("active"));

      // Add active classes
      button.classList.add("active");
      const tabId = button.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    })
  );
});

// Animate on scroll
const faders = document.querySelectorAll(".glass-section");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;

  fetch('https://script.google.com/macros/s/AKfycbyiU7ocpDCjNo3_mt6QRgBnWUluT2h4pLRmhRtvUi_bFVwU9bI6KR5LWlgInJDgxo9r/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  }).then(() => {
    this.querySelector('.form-success').style.display = 'block';
    this.reset();
  }).catch(() => {
    alert('Oops! Something went wrong.');
  });
});
