const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal-button");
const closeButton = document.querySelector(".close-button");
const submitButton = document.querySelector(".submit-button");
const scrollDown = document.querySelector(".scroll-down");
const scriptURL = 'https://script.google.com/macros/s/AKfycbyi9hUDY6VZtJbZsAI9KwdVDEutI7_0TfinDL_ysKBAuflnVVlh/exec'
const form = document.forms['submit-to-google-sheet']
let isOpened = false;

const openModal = () => {
  modal.classList.add("is-open");
  body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("is-open");
  body.style.overflow = "initial";
};
// Open modal if user scrolls down page
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 3 && !isOpened) {
    isOpened = true;
    scrollDown.style.display = "none";
    openModal();
  }
});

modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

// Close modal if Esc button clicked
document.onkeydown = evt => {
  evt = evt || window.event;
  evt.keyCode === 27 ? closeModal() : false;
};

// Submit form data to google sheets
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
    alert("Thank you! Keep an eye on your inbox for Striv3r updates.");
    closeModal();

})
