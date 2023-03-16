const startGame = document.querySelector('button#startButton')
const chooseCharacterArea = document.querySelector('div#selectionCharacterArea')
startGame.addEventListener('click', () => { startEvent() })

function startEvent() {
    startGame.style.opacity = '0'
    startGame.style.transition = 'opacity 0.7s'
    setTimeout(() => { startGame.style.display = 'none' }, 700)
    setTimeout(() => { chooseCharacterArea.style.display = '' }, 700)
}
class StartGame {
    gameChooseCharacter(number) {
        if(number === 1){
            setTimeout(() => { document.querySelector('#selectionCharacterArea').style.display = 'none'}, 700)
            setTimeout(() => { document.querySelector('#characterNameTitle').style.display = ''}, 700)
            setTimeout(() => { document.querySelector('#characterName').style.display = ''}, 700)
            setTimeout(() => { document.querySelector('#characterNameBeforeButton').style.display = ''}, 700)
            setTimeout(() => { document.querySelector('#selectionCharacterArea').style.opacity = '0'}, 700)
            setTimeout(() => { document.querySelector('#selectionCharacterArea').transition = 'opacity 0.7s'}, 700)
    
            let characterName = document.querySelector('input#characterName')
            const characterNameBeforeButton = document.querySelector('#characterNameBeforeButton')

            characterNameBeforeButton.addEventListener('click', () => {
                let nameCharacter = document.querySelector('#nameCharacter')
                nameCharacter.innerHTML = `Cavaleiro - ${characterName.value}`
                setTimeout(() => { document.querySelector('#sectionStart').style.display = 'none'}, 700)
                setTimeout(() => { document.querySelector('#levels').style.display = ''}, 700)
                setTimeout(() => { document.querySelector('#theGame').style.display = ''}, 700)
                let character = new Knight(`${characterName.value}`) // Objeto Knight Instanciado (Cavaleiro)
                const monster = new Monster() // Objeto Monster Instanciado (Monstro)
                const stage = new Stage( // Área de eventos das lutas
                    character,
                    monster,
                    document.querySelector('#character'),
                    document.querySelector('#monster')
                )
                // Criei o evento de quando clicar no botão "Atacar". O método eventAttack será chamado.
                document.querySelector('button#buttonCharacterSwordAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'sword'))
                document.querySelector('button#buttonCharacterSpearAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'spear'))
                document.querySelector('button#buttonCharacterKnifeAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'knife'))
                stage.update()
            })
        }else if(number === 2){
            setTimeout(() => { document.querySelector('#selectionCharacterArea').style.display = 'none'}, 700)
            setTimeout(() => { document.querySelector('#characterNameTitle').style.display = ''}, 700)
            setTimeout(() => { document.querySelector('#characterName').style.display = ''}, 700)
            setTimeout(() => { document.querySelector('#characterNameBeforeButton').style.display = ''}, 700)
            setTimeout(() => { document.querySelector('#selectionCharacterArea').style.opacity = '0'}, 700)
            setTimeout(() => { document.querySelector('#selectionCharacterArea').transition = 'opacity 0.7s'}, 700)
    
            let characterName = document.querySelector('input#characterName')
            const characterNameBeforeButton = document.querySelector('#characterNameBeforeButton')

            characterNameBeforeButton.addEventListener('click', () => {
                let nameCharacter = document.querySelector('#nameCharacter')
                nameCharacter.innerHTML = `Mago - ${characterName.value}`
                setTimeout(() => { document.querySelector('#sectionStart').style.display = 'none'}, 700)
                setTimeout(() => { document.querySelector('#levels').style.display = ''}, 700)
                setTimeout(() => { document.querySelector('#theGame').style.display = ''}, 700)
                let character = new Wizard(`${characterName.value}`) // Objeto Wizard Instanciado (Mago)
                const monster = new Monster() // Objeto Monster Instanciado (Monstro)
                const stage = new Stage( // Área de eventos das lutas
                    character,
                    monster,
                    document.querySelector('#character'),
                    document.querySelector('#monster')
                )
                // Criei o evento de quando clicar no botão "Atacar". O método eventAttack será chamado.
                document.querySelector('button#buttonCharacterSwordAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'sword'))
                document.querySelector('button#buttonCharacterSpearAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'spear'))
                document.querySelector('button#buttonCharacterKnifeAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'knife'))
                stage.update()
            })
        }else if(number === 3){
            setTimeout(() => { document.querySelector('#selectionCharacterArea').style.display = 'none'}, 700)
            setTimeout(() => { document.querySelector('#characterNameTitle').style.display = ''}, 700)
            setTimeout(() => { document.querySelector('#characterName').style.display = ''}, 700)
            setTimeout(() => { document.querySelector('#characterNameBeforeButton').style.display = ''}, 700)
            setTimeout(() => { document.querySelector('#selectionCharacterArea').style.opacity = '0'}, 700)
            setTimeout(() => { document.querySelector('#selectionCharacterArea').transition = 'opacity 0.7s'}, 700)
    
            let characterName = document.querySelector('input#characterName')
            const characterNameBeforeButton = document.querySelector('#characterNameBeforeButton')

            characterNameBeforeButton.addEventListener('click', () => {
                let nameCharacter = document.querySelector('#nameCharacter')
                nameCharacter.innerHTML = `Arqueira - ${characterName.value}`
                setTimeout(() => { document.querySelector('#sectionStart').style.display = 'none'}, 700)
                setTimeout(() => { document.querySelector('#levels').style.display = ''}, 700)
                setTimeout(() => { document.querySelector('#theGame').style.display = ''}, 700)
                let character = new Archer(`${characterName.value}`) // Objeto Wizard Instanciado (Mago)
                const monster = new Monster() // Objeto Monster Instanciado (Monstro)
                const stage = new Stage( // Área de eventos das lutas
                    character,
                    monster,
                    document.querySelector('#character'),
                    document.querySelector('#monster')
                )
                // Criei o evento de quando clicar no botão "Atacar". O método eventAttack será chamado.
                document.querySelector('button#buttonCharacterSwordAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'sword'))
                document.querySelector('button#buttonCharacterSpearAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'spear'))
                document.querySelector('button#buttonCharacterKnifeAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'knife'))
                stage.update()
            })
        }
    }
}
const start = new StartGame()
const knightSelectButton = document.querySelector('button#chooseKnightCharacter')
const wizardSelectButton = document.querySelector('button#chooseWizardCharacter')
const archorSelectButton = document.querySelector('button#chooseArchorCharacter')

knightSelectButton.addEventListener('click', () => {start.gameChooseCharacter(1)})
wizardSelectButton.addEventListener('click', () => {start.gameChooseCharacter(2)})
archorSelectButton.addEventListener('click', () => {start.gameChooseCharacter(3)})


