// script.js
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".photos img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src; // hiển thị ảnh gốc
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};
