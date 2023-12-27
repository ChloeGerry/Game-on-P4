/**
 * Handle modal display
 */

export default class HandleModalClass {
  constructor() {
    this.modal = document.getElementsByClassName("background")[0];
    this.closeIcon = document.getElementsByClassName("close")[0];
    this.modalButton = document.querySelectorAll(".modal-btn");
    this.form = document.getElementsByClassName("form")[0];
    this.validationMessage = document.getElementsByClassName("validation-message")[0];
    this.closeButton = document.getElementsByClassName("btn-close")[0];
  }

  openModal = () => {
    this.modalButton.forEach((btn) => btn.addEventListener("click", this.launchModal));
  };

  launchModal = () => {
    console.log("test");
    this.modal.style.display = "block";
    this.validationMessage.style.display = "none";
    this.closeButton.style.display = "none";
    this.form.style.display = "block";
  };

  closeModal = () => {
    this.closeIcon.addEventListener("click", () => (this.modal.style.display = "none"));
  };

  lauchValidationMessage = () => {
    this.validationMessage.style.display = "block";
    this.closeButton.style.display = "block";
    this.closeButton.addEventListener("click", () => (this.modal.style.display = "none"));
  };
}
