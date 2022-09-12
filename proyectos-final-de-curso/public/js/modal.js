
const modals = document.querySelectorAll('.modal');
const modalTriggerAddImg = document.getElementById('modalTriggerAddImg');
const modalTriggerAddImg2 = document.getElementById('modalTriggerAddImg2');
const spans = document.querySelectorAll('.close');

modalTriggerAddImg.addEventListener('click', () => {
  modals[0].classList.add('d-block');
  modals[0].classList.remove('d-none');
})

modalTriggerAddImg2.addEventListener('click', () => {
  modals[1].classList.add('d-block');
  modals[1].classList.remove('d-none');
})

spans.forEach(span => {
  span.addEventListener('click', () => {
    modals.forEach(modal => {
      modal.classList.add('d-none')
      modal.classList.remove('d-block')
    })
  })
})

window.addEventListener('click', (event) => {
  if(event.target.className === 'modal d-block') {
    modals.forEach(modal => {
      modal.classList.add('d-none')
      modal.classList.remove('d-block')
    })
  }
})