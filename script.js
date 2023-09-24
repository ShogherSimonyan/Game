let arr = ["gaze", 'unable', 'week', 'funny', 'cumbersome', 'abstracted', 'incredible', 'religion', 'wool', 'bathe', 'disgusted', 'stupid', 'heap', 'flag', 'ants', 'industrious', 'rob', 'heat', 'plain', 'salt', 'produce', 'delightful', 'offbeat', 'wakeful', 'adventurous', 'tendency', 'fixed', 'dolls', 'empty', 'decisive', 'gifted', 'unnatural', 'alarm', 'tumble', 'prevent', 'temporary', 'tip', 'squealing', 'mom', "thunder"]
const container = document.querySelector('.container')
let sxal = 0
let div = document.querySelectorAll("nav>div")
let chisht=0
let miavorner=document.querySelector(".miavorner")


function getRandomWord() {
    let randomIndex = Math.floor(Math.random() * arr.length)
    //Math.floor թիվը կլորացնումա դեպի ներքև (45.5=45)
    let word = arr[randomIndex]
    arr.splice(randomIndex, 1)
    console.log(word);
    return { word }
}

let currentWord = getRandomWord()
pant(currentWord)

console.log(currentWord.word);

function pant(currentWord) {
    container.innerHTML = ''

    for (let i = 0; i < currentWord.word.length; i++) {
        let p = document.createElement('p')
        p.innerHTML = currentWord.word[i]
        container.append(p)
    }
}


let usedKeys = []
window.addEventListener('keypress', (ev) => {
    if (usedKeys.includes(ev.key)) return
    usedKeys.push(ev.key)
    if (currentWord.word.includes(ev.key)) {
        [...container.children].forEach(p => {
            if (p.innerHTML == ev.key) {
                p.style.visibility = 'visible'
                chisht++
            }
        })
    if (currentWord.word.length==chisht) {
        alert ("You win")
        miavorner.innerHTML++
            currentWord.word = getRandomWord().word
            usedKeys = []
            pant(currentWord)
            for (let i = 0; i < div.length; i++) {
                div[i].style.display = "none"
                chisht = 0
                sxal=0
            }
    }

    }
    else {
        div[sxal++].style.display = "block"
        if (sxal == div.length ) {
            alert("Game over")
            currentWord.word = getRandomWord().word
            usedKeys = []
            pant(currentWord)
            for (let i = 0; i < div.length; i++) {
                div[i].style.display = "none"
                chisht=0
                sxal = 0
            }
            
        }
    }
})


