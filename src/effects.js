// get all the dom elements with the class name footer-element
const footerElements = document.getElementsByClassName('footer-element');

// loop through all the elements and add the event listener
for (let i = 0; i < footerElements.length; i++) {
    footerElements[i].addEventListener('click',()=>{
        footerElements[i].classList.toggle('violet')
        for (let j = 0; j < footerElements.length; j++) {
            if (j !== i) {
                footerElements[j].classList.remove('violet')
            }
        }
    })
}