let bodyEl = document.querySelector('body')
let clickMe = document.querySelector('#single-skill li')


clickMe.addEventListener('click',flashScreen)

function flashScreen(){
    bodyEl.style.backgroundColor = 'green'
    setTimeout(() => {
        bodyEl.style.backgroundColor ='black'
    }, 60);
}

