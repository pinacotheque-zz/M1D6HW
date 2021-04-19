// EX7.: Write a function to change the h1 text

let elementSelectedByCssQuery = document.querySelector(`h1`)
const changeClass = function () {
elementSelectedByCssQuery.innerText = `Gamze's BookStore.`
}


// EX8.: Write a function to change the page background color

const changeBackground = function () {
    document.body.style.backgroundColor = "rgb(214, 226, 189)"
    }


// EX9.: Write a function to change the footer address with a fake one

let elementSelectedFooter = document.querySelector(' h2')
const changeFooter = function() {
    elementSelectedFooter.innerText = "Sesame Street No:1 Northland KL"
}

// EX10.: Write a function to add a CSS class to every Amazon link

function addClassCss() {
    for (let node of document.querySelectorAll('a')){
        node.classList.add('newClass')
    }
}

// EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

function toggleImages() {
    for (let image of document.querySelectorAll('img')){
        image.classList.toggle('hidden')
    }
}

// EX12: Write a function to color the price of each product in a different one every time it's invoked

