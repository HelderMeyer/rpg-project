const startGame = document.querySelector('button#startButton')
const chooseCharacterArea = document.querySelector('div#selectionCharacterArea')

const knightSelectButton = document.querySelector('button#chooseKnightCharacter')
const wizardSelectButton = document.querySelector('button#chooseWizardCharacter')
const archorSelectButton = document.querySelector('button#chooseArchorCharacter')

startGame.addEventListener('click', () => {startEvent()})
function startEvent(){
    startGame.style.opacity = '0'
    startGame.style.transition = 'opacity 0.7s'
    setTimeout(() => {startGame.style.display = 'none'}, 700)
    setTimeout(() => {chooseCharacterArea.style.display = ''}, 700)
}

knightSelectButton.addEventListener('click', () => {gameChooseCharacter(1)})
wizardSelectButton.addEventListener('click', () => {gameChooseCharacter(2)})
archorSelectButton.addEventListener('click', () => {gameChooseCharacter(3)})

function gameChooseCharacter(number){
    if(number === 1){
        return 1
    }else if(number === 2){
        return 2
    }else if(number === 3){
        return 3
    }
}

class StartGame {
    constructor(name, characterType){
        this.name = name
        this.characterType = characterType
    }

}