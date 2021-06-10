(() => {
  const refs = {
    openModalBtn: document.querySelector('[desck-data-modal-open]'),
    closeModalBtn: document.querySelector('[desck-data-modal-close]'),
    modal: document.querySelector('[desck-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();