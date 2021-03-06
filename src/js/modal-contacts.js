(() => {
  const refs = {
    openModalBtn: document.querySelector('[my-data-modal-open]'),
    closeModalBtn: document.querySelector('[my-data-modal-close]'),
    modal: document.querySelector('[my-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();