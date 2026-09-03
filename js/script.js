const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');

menuBtn.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const button = item.querySelector('.faq-question');
  const icon = button.querySelector('span');

  button.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    faqItems.forEach((otherItem) => {
      otherItem.classList.remove('open');
      otherItem.querySelector('.faq-question span').textContent = '+';
    });

    if (!isOpen) {
      item.classList.add('open');
      icon.textContent = '−';
    }
  });
});

const playBtn = document.querySelector('.play-btn');
playBtn.addEventListener('click', () => {
  alert('Acá podrías abrir un video o una demo del producto.');
});

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => {
        contactForm.reset();
        alert("Consulta enviada correctamente");
      })
      .catch(() => {
        alert("Hubo un error al enviar el formulario");
      });
  });
}