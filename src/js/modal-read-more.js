(() => {
    const refs = {
      openModalBtn: document.querySelector('[me-data-modal-open]'),
      closeModalBtn: document.querySelector('[me-data-modal-close]'),
      modal: document.querySelector('[me-data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    refs.backdrop.addEventListener('click', logBackdropClick);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden-read');
    }
    function logBackdropClick(){
      console.log('Это клик в бэкдроп');
    }
  })();