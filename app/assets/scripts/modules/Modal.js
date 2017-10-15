import $ from "jquery";

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events() {
    // on click modal button
    this.openModalButton.on("click", this.openModal.bind(this));
    // on click x modal button
    this.closeModalButton.on("click", this.closeModal.bind(this));
    // push any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    // if escape
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }
  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
