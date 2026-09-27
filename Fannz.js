const menuBtn = document.getElementById("menuBtn");
const dropdown = document.getElementById("dropdown");

menuBtn.addEventListener("click", () => {
  const open = dropdown.classList.toggle("show");
  menuBtn.setAttribute("aria-expanded", open);
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-actions")) {
    dropdown.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

dropdown.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => dropdown.classList.remove("show"));
});

const words = ["Developer", "Programmer", "Web Creator", "Tech Enthusiast"];
const typing = document.getElementById("typing");
let wordIndex = 0, charIndex = 0, deleting = false;

function typeEffect() {
  const word = words[wordIndex];
  typing.textContent = deleting ? word.slice(0, --charIndex) : word.slice(0, ++charIndex);

  let delay = deleting ? 55 : 95;
  if (!deleting && charIndex === word.length) {
    deleting = true;
    delay = 1300;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 300;
  }
  setTimeout(typeEffect, delay);
}
typeEffect();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: 0.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "6289604042788";

    const text =
        "Halo Fannz, saya " + name +
        ".%0A%0A" +
        "Email: " + email +
        "%0A%0A" +
        "Pesan:%0A" + message;

    const whatsappURL =
        "https://wa.me/" + phoneNumber +
        "?text=" + text;

    window.open(whatsappURL, "_blank");

});
