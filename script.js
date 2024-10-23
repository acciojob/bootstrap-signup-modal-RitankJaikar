const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    const modalTitle = exampleModal.querySelector('.modal-title')
    modalTitle.textContent = `Create Account`
  })

  // Add an event listener for when the modal is hidden
  exampleModal.addEventListener('hidden.bs.modal', () => {
    console.log('Modal has been closed.')
  })
}