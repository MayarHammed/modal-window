"use strict";
const modal1 = document.querySelector(".modal1");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const showModal = document.querySelector(".show-modal");


//Open Modal
showModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
  showModal.classList.add("hidden");


});


//Close action
closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  showModal.classList.remove("hidden");
  modal1.classList.add("hidden1");
});

// close Model with click on window
window.addEventListener("click", function (event) {
  if (event.target.tagName === "MAIN") {
    closeAction();
  }
});

//Close Modal with ESC key
document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.key === "space") {
    if (!modal.classList.contains("hidden")) {
      closeAction();
    }
  }
});
