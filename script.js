const calvo = document.querySelector('.calvo');
const score = document.querySelector('.score');

const ham = document.querySelector('.hamburguer')

const som = new Audio()

var morto = false

som.scr = "sons/Soco.mp3"

var score_atual = 0
const pular = () => {
    if (morto == true) {
        calvo.src = "morreu.png"
        return
    }
    calvo.classList.add('jump')
    const ham_position = ham.offsetLeft
    const calvo_position = +window.getComputedStyle(calvo).bottom.replace('px', '')
    calvo.src = "calvo2.png"

    setTimeout(() => {
        if (morto == true) {
            calvo.src = "morreu.png"
        }
        if (morto == false) {
            calvo.src = "calvo.png"
        }
        
        calvo.classList.remove('jump')
    }, 500)
}

document.addEventListener('keydown', pular)
document.addEventListener('mousedown', pular)



const score_interval = setInterval(() => {
    score_atual = score_atual + 1
    score.textContent='Score: '+score_atual
}, 100)

const loop = setInterval(() => {
    const ham_position = ham.offsetLeft
    const calvo_position = +window.getComputedStyle(calvo).bottom.replace('px', '')

    if (ham_position <= 120 && ham_position > 0 && calvo_position <= 140) {
        morto = true
        const oldPosition = ham.offsetLeft
        ham.style.animation = 'none';
        ham.style.left = `${oldPosition}`
        calvo.style.animation = 'none'
        calvo.src = "morreu.png"
        calvo.style.bottom = `${calvo_position}px`
        score.textContent = 'Você morreu!'
        som.play()
        clearInterval(score_interval)
        clearInterval(loop)
    }
}, 10)