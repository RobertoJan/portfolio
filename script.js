
// function used to clear form after submission taken from Formspree article 1500009404742
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
        form.reset();
    }
    }

// Event handler used to add and remove the active class to create a scroll up button after the page height exceeds 100%. Credits to GTCoding youtube channel for the source code. https://github.com/Godsont/Back-To-Top-Button

const toTop = document.querySelector('.toTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('active')
    } else {
        toTop.classList.remove('active');
    }
})