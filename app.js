// Target the modal and get started button
// When clicked get started button should change modal display from none to flex
// Do opposite to close

const modal = document.getElementById("modal");
const openBtn = document.querySelector(".primaryBtn");
const closeBtn = document.querySelector(".xBtn");

// console.log(modal)
// function to open modal?
function openModal() {
  openBtn.addEventListener("click", function () {
    modal.style.display = "flex";
  });
}

function closeModal() {
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
}

// const openModal = () => {
//   modal.style.display = "flex";
// };

// const closeModal = () => {
//   modal.style.display = "none";
// };

// openBtn.addEventListener("onclick", openModal);
// closeBtn.addEventListener("onclick", closeModal);
1;
