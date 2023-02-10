const meun = document.querySelector(".list");
const open = document.querySelector(".open-menu");
const close = document.querySelector(".close-menu");
// const list = document.querySelectorAll(".values");

function toggleMenu() {
  meun.classList.toggle("show");
open.classList.toggle("notShowMenu");
close.classList.toggle("notShowMenu");
}
const icon = [open,close];
icon.forEach((el) => el.addEventListener("click", toggleMenu)
);

// faq
const faq = document.querySelectorAll(".faq");
const iconadd = document.querySelectorAll(".addhole");
const img = document.querySelectorAll(".img");

faq.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

