const button = document.getElementById("buttonOpen");
const modal = document.querySelector(".dialog-modal");
const buttonClose = document.querySelector("#buttonClose");

button.onclick = function () {
  modal.showModal();
};

buttonClose.onclick = function () {
  modal.close();
};

const buttonP = document.getElementById("valorP-open");
const modalP = document.querySelector(".dialog-P");
const buttonCloseP = document.querySelector("#buttonClose-P");

buttonP.onclick = function () {
  modalP.showModal();
};

buttonCloseP.onclick = function () {
  modalP.close();
};

