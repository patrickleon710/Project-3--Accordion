// VARIABLES

const accordion = document.getElementsByClassName('content-container')

accordion.addEventListener('click', function() {
    this.classList.toggle('active')
})