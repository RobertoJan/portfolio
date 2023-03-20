
// function used to clear form after submission taken from Formspree article 1500009404742
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
        form.reset();
    }
    }