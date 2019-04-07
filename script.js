let showPortfolio = () => {
    fadeOut('left')
    setTimeout(() => {window.location.assign('portfolio.html')}, 500)
}

let showContact = () => {
    fadeOut('right')
    setTimeout(() => {window.location.assign('contact.html')}, 500)
}

let backHome = (direction) => {
    fadeOut(direction)
    setTimeout(() => {window.location.assign('index.html')}, 500)

}

let fadeOut = (direction) => {
    //fadeOut left fades to the right, right fades to the left. the direction refers to the button pressed
    if (direction === "left") {
        //add class animated and fadeOutRight to .buttonsAndContent
        let buttonsAndContent = document.getElementById('fadeHandle')
        buttonsAndContent.classList.add('fadeOutRight')
    }else {
        let buttonsAndContent = document.getElementById('fadeHandle')
        buttonsAndContent.classList.add('fadeOutLeft')
    }

}


//section for the slide logic

let slides = ['images/Aqua copy.jpg']





let forwardSlide = {

}

let backSlide = {

}