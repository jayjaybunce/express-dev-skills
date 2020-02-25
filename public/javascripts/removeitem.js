let listEl = document.querySelector('#skills')
let inputElOne = document.querySelector('#skill')
let inputElTwo = document.querySelector('#comfortable')
let inputElThree = document.querySelector('#num-of-projects')
let submitEl = document.querySelector('#sub')

listEl.addEventListener('dblclick',(evt)=>{
    if(evt.target.tagName !== 'TD'){
        return;
    }else{
        evt.target.closest('tr').remove()
    }
})

submitEl.addEventListener('click',addItem)


function addItem(){
    inputElOne = inputElOne.value
    inputElTwo = inputElTwo.value
    inputElThree = inputElThree.value
    if(validateInput(inputElOne,inputElTwo,inputElThree)){
        let newTr = document.createElement('tr')
        let skillTd = document.createElement('td')
        let comfortTd = document.createElement('td')
        let numProgTd = document.createElement('td')
        skillTd.textContent = inputElOne
        comfortTd.textContent = inputElTwo
        numProgTd.textContent = inputElThree
        newTr.appendChild(skillTd,comfortTd,numProgTd)
        listEl.appendChild(newTr)
    }
}


function validateInput(skill,comfort,numProj){
    comfort = comfort.toLowerCase()
    numProj = parseInt(numProj.value)
    if(skill.value === ""||comfort.value===""||numProj.value===""){
        console.log('returned false 40')
        return false;
    }else{
        return true;
    }
}