const textHead = document.querySelectorAll('.text-head')

textHead.forEach((textHead) => {
    textHead.addEventListener('click', function () {
        if (textHead.nextElementSibling.classList.contains('answer')) {
            textHead.nextElementSibling.classList.toggle('show-answer');
            textHead.childNodes[1].classList.toggle('text-on')
            textHead.childNodes[3].classList.toggle('show-angle')

        }
    })
})
