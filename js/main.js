const buyBtns = document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.modal')
const close = document.querySelector('.modal-close')
const container = document.querySelector('.modal-container')

function openbuyTickets() {
    modal.classList.add('open')
}

function hidebuyTickets() {
    modal.classList.remove('open')
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', openbuyTickets)
}
close.addEventListener('click', hidebuyTickets)
modal.addEventListener('click', hidebuyTickets)
container.addEventListener('click', function(event) {
    event.stopPropagation()
})