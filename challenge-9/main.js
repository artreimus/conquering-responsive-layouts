const navToggle = document.querySelector("#nav-toggle");
const nav = document.querySelector("#nav");
const listToggleOne = document.querySelector("#btn-list-one");
const listToggleTwo = document.querySelector("#btn-list-two");
const listToggleThree = document.querySelector("#btn-list-three");
const listOne = document.querySelector("#list-one");
const listTwo = document.querySelector("#list-two");
const listThree = document.querySelector("#list-three");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

listToggleOne.addEventListener("click", () => {
  listOne.classList.toggle("hidden");
  listTwo.classList.add("hidden");
  listThree.classList.add("hidden");
});

listToggleTwo.addEventListener("click", () => {
  listTwo.classList.toggle("hidden");
  listOne.classList.add("hidden");
  listThree.classList.add("hidden");
});

listToggleThree.addEventListener("click", () => {
  listThree.classList.toggle("hidden");
  listOne.classList.add("hidden");
  listTwo.classList.add("hidden");
});
