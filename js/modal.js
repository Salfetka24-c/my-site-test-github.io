const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.button-modal-opn');
const modalBtnClose = document.querySelector('.button-modal-cls');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
