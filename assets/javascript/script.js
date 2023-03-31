const startGame = document.querySelector('button#startButton')
const continueButton = document.querySelector('#continueButton')
const newGameButton = document.querySelector('#newGameButton')
const chooseCharacterArea = document.querySelector('div#selectionCharacterArea')
startGame.addEventListener('click', () => { startEvent() })

function startEvent() {
    let continueGame = Number(localStorage.getItem('continue'))
    startGame.style.opacity = '0'
    startGame.style.transition = 'opacity 0.7s'
    setTimeout(() => { startGame.style.display = 'none' }, 700)
    if (continueGame) {
        continueButton.style.opacity = '1'
        continueButton.style.transition = 'opacity 0.7s'
        setTimeout(() => { continueButton.style.display = 'flex' }, 700)
    }
    newGameButton.style.opacity = '1'
    newGameButton.style.transition = 'opacity 0.7s'
    setTimeout(() => { newGameButton.style.display = 'flex' }, 700)
}
class StartGame {
    gameChooseCharacter(number) {
        if (number === 1) { // CAVALEIRO
            setTimeout(() => { document.querySelector('#selectionCharacterArea').style.display = 'none' }, 700)
            setTimeout(() => { document.querySelector('#characterNameTitle').style.display = '' }, 700)
            setTimeout(() => { document.querySelector('#characterName').style.display = '' }, 700)
            setTimeout(() => { document.querySelector('#characterNameBeforeButton').style.display = '' }, 700)
            setTimeout(() => { document.querySelector('#selectionCharacterArea').style.opacity = '0' }, 700)
            setTimeout(() => { document.querySelector('#selectionCharacterArea').transition = 'opacity 0.7s' }, 700)

            let characterName = document.querySelector('input#characterName')
            const characterNameBeforeButton = document.querySelector('#characterNameBeforeButton')
            const nameCharacter = document.querySelector('#nameCharacter')

            characterNameBeforeButton.addEventListener('click', () => {
                if (localStorage.getItem('name') == null) {
                    localStorage.setItem('name', `${characterName.value}`) // Armazenar o nome no LocalStorage
                    let myName = localStorage.getItem('name')
                    nameCharacter.innerHTML = `Cavaleiro - ${myName}`
                    setTimeout(() => { document.querySelector('#sectionStart').style.display = 'none' }, 700)
                    setTimeout(() => { document.querySelector('#levels').style.display = '' }, 700)
                    setTimeout(() => { document.querySelector('#theGame').style.display = '' }, 700)
                    let character = new Knight(`${myName}`) // Objeto Knight Instanciado (Cavaleiro)
                    const monster = new Monster() // Objeto Monster Instanciado (Monstro)
                    const stage = new Stage( // Área de eventos das lutas
                        character,
                        monster,
                        document.querySelector('#character'),
                        document.querySelector('#monster')
                    )
                    // Criei o evento de quando clicar no botão "Atacar". O método eventAttack será chamado.

                    // ====================
                    // ATAQUES DO CAVALEIRO
                    // ====================
                    let knightAttacks = JSON.parse(localStorage.getItem('knightAttacks') || '[]')
                    if (knightAttacks[0].sword == 0) {
                        document.querySelector('button#buttonCharacterSwordAttack').style.display = 'none'
                    } else {
                        document.querySelector('button#buttonCharacterSwordAttack').style.display = ''
                    }

                    if (knightAttacks[0].spear == 0) {
                        document.querySelector('button#buttonCharacterSpearAttack').style.display = 'none'
                    } else {
                        document.querySelector('button#buttonCharacterSpearAttack').style.display = ''
                    }

                    document.querySelector('button#buttonCharacterPunchAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'punch', 1))
                    document.querySelector('button#buttonCharacterSwordAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'sword', 1.5))
                    document.querySelector('button#buttonCharacterSpearAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'spear', 2))

                    stage.update()
                    return
                }
            })
            if (localStorage.getItem('name') != null) {
                let myName = localStorage.getItem('name')
                nameCharacter.innerHTML = `Cavaleiro - ${myName}`
                setTimeout(() => { document.querySelector('#sectionStart').style.display = 'none' }, 700)
                setTimeout(() => { document.querySelector('#levels').style.display = '' }, 700)
                setTimeout(() => { document.querySelector('#theGame').style.display = '' }, 700)
                let character = new Knight(`${myName}`) // Objeto Knight Instanciado (Cavaleiro)
                const monster = new Monster() // Objeto Monster Instanciado (Monstro)
                const stage = new Stage( // Área de eventos das lutas
                    character,
                    monster,
                    document.querySelector('#character'),
                    document.querySelector('#monster')
                )
                // Criei o evento de quando clicar no botão "Atacar". O método eventAttack será chamado.
                // ====================
                // ATAQUES DO CAVALEIRO
                // ====================

                let knightAttacks = JSON.parse(localStorage.getItem('knightAttacks') || '[]')
                if (knightAttacks[0].sword == 0) {
                    document.querySelector('button#buttonCharacterSwordAttack').style.display = 'none'
                } else {
                    document.querySelector('button#buttonCharacterSwordAttack').style.display = ''
                }

                if (knightAttacks[0].spear == 0) {
                    document.querySelector('button#buttonCharacterSpearAttack').style.display = 'none'
                } else {
                    document.querySelector('button#buttonCharacterSpearAttack').style.display = ''
                }

                document.querySelector('button#buttonCharacterPunchAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'punch', 1))
                document.querySelector('button#buttonCharacterSwordAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'sword', 1.5))
                document.querySelector('button#buttonCharacterSpearAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'spear', 2))
                stage.update()
            }
        } else if (number === 2) {
            setTimeout(() => { document.querySelector('#selectionCharacterArea').style.display = 'none' }, 700)
            setTimeout(() => { document.querySelector('#characterNameTitle').style.display = '' }, 700)
            setTimeout(() => { document.querySelector('#characterName').style.display = '' }, 700)
            setTimeout(() => { document.querySelector('#characterNameBeforeButton').style.display = '' }, 700)
            setTimeout(() => { document.querySelector('#selectionCharacterArea').style.opacity = '0' }, 700)
            setTimeout(() => { document.querySelector('#selectionCharacterArea').transition = 'opacity 0.7s' }, 700)

            let characterName = document.querySelector('input#characterName')
            const characterNameBeforeButton = document.querySelector('#characterNameBeforeButton')
            const nameCharacter = document.querySelector('#nameCharacter')

            characterNameBeforeButton.addEventListener('click', () => {
                if (localStorage.getItem('name') == null) {
                    localStorage.setItem('name', `${characterName.value}`)
                    let myName = localStorage.getItem('name')
                    nameCharacter.innerHTML = `Mago - ${myName}`
                    setTimeout(() => { document.querySelector('#sectionStart').style.display = 'none' }, 700)
                    setTimeout(() => { document.querySelector('#levels').style.display = '' }, 700)
                    setTimeout(() => { document.querySelector('#theGame').style.display = '' }, 700)
                    let character = new Wizard(`${myName}`) // Objeto Wizard Instanciado (Mago)
                    const monster = new Monster() // Objeto Monster Instanciado (Monstro)
                    const stage = new Stage( // Área de eventos das lutas
                        character,
                        monster,
                        document.querySelector('#character'),
                        document.querySelector('#monster')
                    )
                    // ====================
                    // BOTÕES DE ATAQUE DO CAVALEIRO
                    // ====================

                    document.querySelector('button#buttonCharacterPunchAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'punch'))
                    document.querySelector('button#buttonCharacterSwordAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'sword'))
                    document.querySelector('button#buttonCharacterSpearAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'spear'))

                    stage.update()
                    return
                }
            })
            if (localStorage.getItem('name') != null) {
                let myName = localStorage.getItem('name')
                nameCharacter.innerHTML = `Mago - ${myName}`
                setTimeout(() => { document.querySelector('#sectionStart').style.display = 'none' }, 700)
                setTimeout(() => { document.querySelector('#levels').style.display = '' }, 700)
                setTimeout(() => { document.querySelector('#theGame').style.display = '' }, 700)
                let character = new Wizard(`${myName}`) // Objeto Wizard Instanciado (Mago)
                const monster = new Monster() // Objeto Monster Instanciado (Monstro)
                const stage = new Stage( // Área de eventos das lutas
                    character,
                    monster,
                    document.querySelector('#character'),
                    document.querySelector('#monster')
                )
                // Criei o evento de quando clicar no botão "Atacar". O método eventAttack será chamado.
                // ====================
                // BOTÕES DE ATAQUE DO CAVALEIRO
                // ====================

                document.querySelector('button#buttonCharacterPunchAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'punch'))
                document.querySelector('button#buttonCharacterSwordAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'sword'))
                document.querySelector('button#buttonCharacterSpearAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'spear'))
                stage.update()
            }
        } else if (number === 3) {
            setTimeout(() => { document.querySelector('#selectionCharacterArea').style.display = 'none' }, 700)
            setTimeout(() => { document.querySelector('#characterNameTitle').style.display = '' }, 700)
            setTimeout(() => { document.querySelector('#characterName').style.display = '' }, 700)
            setTimeout(() => { document.querySelector('#characterNameBeforeButton').style.display = '' }, 700)
            setTimeout(() => { document.querySelector('#selectionCharacterArea').style.opacity = '0' }, 700)
            setTimeout(() => { document.querySelector('#selectionCharacterArea').transition = 'opacity 0.7s' }, 700)

            let characterName = document.querySelector('input#characterName')
            const characterNameBeforeButton = document.querySelector('#characterNameBeforeButton')
            const nameCharacter = document.querySelector('#nameCharacter')

            characterNameBeforeButton.addEventListener('click', () => {
                if (localStorage.getItem('name') == null) {
                    localStorage.setItem('name', `${characterName.value}`)
                    let myName = localStorage.getItem('name')
                    nameCharacter.innerHTML = `Arqueira - ${characterName.value}`
                    setTimeout(() => { document.querySelector('#sectionStart').style.display = 'none' }, 700)
                    setTimeout(() => { document.querySelector('#levels').style.display = '' }, 700)
                    setTimeout(() => { document.querySelector('#theGame').style.display = '' }, 700)
                    let character = new Archer(`${characterName.value}`) // Objeto Wizard Instanciado (Mago)
                    const monster = new Monster() // Objeto Monster Instanciado (Monstro)
                    const stage = new Stage( // Área de eventos das lutas
                        character,
                        monster,
                        document.querySelector('#character'),
                        document.querySelector('#monster')
                    )
                    // Criei o evento de quando clicar no botão "Atacar". O método eventAttack será chamado.
                    // ====================
                    // BOTÕES DE ATAQUE DO CAVALEIRO
                    // ====================

                    document.querySelector('button#buttonCharacterPunchAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'punch'))
                    document.querySelector('button#buttonCharacterSwordAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'sword'))
                    document.querySelector('button#buttonCharacterSpearAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'spear'))
                    stage.update()
                    return
                }
            })
            if (localStorage.getItem('name') != null) {
                let myName = localStorage.getItem('name')
                nameCharacter.innerHTML = `Arqueira - ${characterName.value}`
                setTimeout(() => { document.querySelector('#sectionStart').style.display = 'none' }, 700)
                setTimeout(() => { document.querySelector('#levels').style.display = '' }, 700)
                setTimeout(() => { document.querySelector('#theGame').style.display = '' }, 700)
                let character = new Archer(`${characterName.value}`) // Objeto Wizard Instanciado (Mago)
                const monster = new Monster() // Objeto Monster Instanciado (Monstro)
                const stage = new Stage( // Área de eventos das lutas
                    character,
                    monster,
                    document.querySelector('#character'),
                    document.querySelector('#monster')
                )
                // Criei o evento de quando clicar no botão "Atacar". O método eventAttack será chamado.
                // ====================
                // BOTÕES DE ATAQUE DO CAVALEIRO
                // ====================

                document.querySelector('button#buttonCharacterPunchAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'punch'))
                document.querySelector('button#buttonCharacterSwordAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'sword'))
                document.querySelector('button#buttonCharacterSpearAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'spear'))
                stage.update()
            }
        }
    }
}
const start = new StartGame()
const knightSelectButton = document.querySelector('button#chooseKnightCharacter')
const wizardSelectButton = document.querySelector('button#chooseWizardCharacter')
const archorSelectButton = document.querySelector('button#chooseArchorCharacter')

newGameButton.addEventListener('click', () => {
    knightAttacks[0].sword = 0
    localStorage.setItem('knightAttacks', JSON.stringify(knightAttacks));
    let myLevelList = document.querySelector('#levelsList')
    myLevelList.getElementsByTagName('li')[0].style.backgroundColor = '#144272'
    myLevelList.getElementsByTagName('li')[0].style.scale = '1.2'
    localStorage.removeItem('gold')
    localStorage.setItem('gold', '0')
    document.querySelector('#myGold').innerHTML = `${Number(localStorage.getItem('gold'))}`
    localStorage.setItem('firsttime', 'false')
    localStorage.removeItem('monsterLevel')
    localStorage.setItem('monsterLevel', '0')
    localStorage.removeItem('name')
    continueButton.style.opacity = '0'
    continueButton.style.transition = 'opacity 0.7s'
    newGameButton.style.opacity = '0'
    newGameButton.style.transition = 'opacity 0.7s'
    setTimeout(() => { continueButton.style.display = 'none' }, 700)
    setTimeout(() => { newGameButton.style.display = 'none' }, 700)
    setTimeout(() => { chooseCharacterArea.style.display = '' }, 700)
    // SALVAR AS INFORMAÇÕES DO MONSTRO NO LOCALSTORAGE
    // VARIÁVEL PARA PEGAR OS ITENS NO LOCAL STORAGE
    // VARIÁVEL PARA COLOCAR OS ITENS NA ARRAY DENTRO DO LOCALSTORAGE
    monsterInfo[0].life = 80
    monsterInfo[0].maxLife = 80
    monsterInfo[0].strength = 10
    monsterInfo[0].defense = 8
    monsterInfo[0].magic = 0
    monsterInfo[0].maxMagic = 0

    knightInfo[0].life = 100
    knightInfo[0].maxLife = 100
    knightInfo[0].strength = 15
    knightInfo[0].defense = 10
    knightInfo[0].magic = 0
    knightInfo[0].maxMagic = 0

    wizardInfo[0].life = 80
    wizardInfo[0].maxLife = 80
    wizardInfo[0].strength = 15
    wizardInfo[0].defense = 10
    wizardInfo[0].magic = 50
    wizardInfo[0].maxMagic = 50

    archerInfo[0].life = 90
    archerInfo[0].maxLife = 90
    archerInfo[0].strength = 15
    archerInfo[0].defense = 8
    archerInfo[0].magic = 30
    archerInfo[0].maxMagic = 30
    // SALVAR OS VALORES DA ARRAY NA LOCALSTORAGE
    localStorage.setItem('monsterInfo', JSON.stringify(monsterInfo));
    localStorage.setItem('knightInfo', JSON.stringify(knightInfo));
    localStorage.setItem('archerInfo', JSON.stringify(archerInfo));
    localStorage.setItem('wizardInfo', JSON.stringify(wizardInfo));
    localStorage.setItem('continue', '1')
})

continueButton.addEventListener('click', () => {
    let actualLevel = Number(localStorage.getItem('monsterLevel'))
    let myLevelList = document.querySelector('#levelsList')
    for (let i = 0; i < actualLevel; i++) {
        myLevelList.getElementsByTagName('li')[i].style.backgroundColor = 'green'
    }
    myLevelList.getElementsByTagName('li')[actualLevel].style.backgroundColor = '#144272'
    myLevelList.getElementsByTagName('li')[actualLevel].style.scale = '1.2'
    setTimeout(() => { document.querySelector('#sectionStart').style.display = 'none' }, 700)
    setTimeout(() => { document.querySelector('#levels').style.display = '' }, 700)
    setTimeout(() => { document.querySelector('#theGame').style.display = '' }, 700)
    document.querySelector('#myGold').innerHTML = `${Number(localStorage.getItem('gold'))}`
    start.gameChooseCharacter(Number(localStorage.getItem('characterClassType')))
})
knightSelectButton.addEventListener('click', () => {
    start.gameChooseCharacter(1)
    localStorage.setItem('characterClassType', '1')
})
wizardSelectButton.addEventListener('click', () => {
    start.gameChooseCharacter(2)
    localStorage.setItem('characterClassType', '2')
})
archorSelectButton.addEventListener('click', () => {
    start.gameChooseCharacter(3)
    localStorage.setItem('characterClassType', '3')
})

const buttonShop = document.querySelector('#buttonShop')
const ShopArea = document.querySelector('#shop')
buttonShop.addEventListener('click', () => {
    if (ShopArea.style.display == 'flex') {
        ShopArea.style.display = 'none'
        buttonShop.innerHTML = 'Abrir Loja'
    } else {
        ShopArea.style.display = 'flex'
        buttonShop.innerHTML = 'Fechar Loja'
    }
})

const buttonBuyMaxLife = document.querySelector('#itemBuyMaxLife')
const buttonBuyStrength = document.querySelector('#itemBuyStrength')
const buttonBuyDefense = document.querySelector('#itemBuyDefense')
const buttonBuyMaxMagic = document.querySelector('#itemBuyMaxMagic')
const buttonBuyNewAttackSpear = document.querySelector('#itemBuyNewAttackSpear')
const buttonBuyNewAttackSword = document.querySelector('#itemBuyNewAttackSword')

buttonBuyMaxLife.addEventListener('click', () => {
    let goldCurrency = Number(localStorage.getItem('gold'))
    if (goldCurrency >= 10) {
        knightInfo[0].maxLife += 5
        wizardInfo[0].maxLife += 5
        archerInfo[0].maxLife += 5
        localStorage.setItem('knightInfo', JSON.stringify(knightInfo));
        localStorage.setItem('archerInfo', JSON.stringify(archerInfo));
        localStorage.setItem('wizardInfo', JSON.stringify(wizardInfo));
        goldCurrency = goldCurrency - 10
        localStorage.setItem('gold', `${Number(goldCurrency)}`)
        document.querySelector('#myGold').innerHTML = `${Number(localStorage.getItem('gold'))}`
    }
})

buttonBuyStrength.addEventListener('click', () => {
    let goldCurrency = Number(localStorage.getItem('gold'))
    if (goldCurrency >= 12) {
        knightInfo[0].strength += 5
        wizardInfo[0].strength += 5
        archerInfo[0].strength += 5
        localStorage.setItem('archerInfo', JSON.stringify(archerInfo));
        localStorage.setItem('wizardInfo', JSON.stringify(wizardInfo));
        localStorage.setItem('knightInfo', JSON.stringify(knightInfo));
        goldCurrency = goldCurrency - 12
        localStorage.setItem('gold', `${Number(goldCurrency)}`)
        document.querySelector('#myGold').innerHTML = `${Number(localStorage.getItem('gold'))}`
    }
})

buttonBuyDefense.addEventListener('click', () => {
    let goldCurrency = Number(localStorage.getItem('gold'))
    if (goldCurrency >= 12) {
        knightInfo[0].defense += 5
        wizardInfo[0].defense += 5
        archerInfo[0].defense += 5
        localStorage.setItem('archerInfo', JSON.stringify(archerInfo));
        localStorage.setItem('wizardInfo', JSON.stringify(wizardInfo));
        localStorage.setItem('knightInfo', JSON.stringify(knightInfo));
        goldCurrency = goldCurrency - 12
        localStorage.setItem('gold', `${Number(goldCurrency)}`)
        document.querySelector('#myGold').innerHTML = `${Number(localStorage.getItem('gold'))}`
    }
})

buttonBuyMaxMagic.addEventListener('click', () => {
    let goldCurrency = Number(localStorage.getItem('gold'))
    if (goldCurrency >= 16) {
        knightInfo[0].maxMagic += 2
        knightInfo[0].magic = knightInfo[0].maxMagic
        wizardInfo[0].maxMagic += 2
        wizardInfo[0].magic = wizardInfo[0].maxMagic
        archerInfo[0].maxMagic += 2
        archerInfo[0].magic = archerInfo[0].maxMagic
        localStorage.setItem('archerInfo', JSON.stringify(archerInfo));
        localStorage.setItem('wizardInfo', JSON.stringify(wizardInfo));
        localStorage.setItem('knightInfo', JSON.stringify(knightInfo));
        goldCurrency = goldCurrency - 16
        localStorage.setItem('gold', `${Number(goldCurrency)}`)
        document.querySelector('#myGold').innerHTML = `${Number(localStorage.getItem('gold'))}`
    }
})
let knightAttacks = JSON.parse(localStorage.getItem('knightAttacks') || '[]')

buttonBuyNewAttackSword.addEventListener('click', () => {
    let goldCurrency = Number(localStorage.getItem('gold'))
    if (goldCurrency >= 100) {
        knightAttacks[0].sword = 1
        localStorage.setItem('knightAttacks', JSON.stringify(knightAttacks));
        document.querySelector('button#buttonCharacterSwordAttack').style.display = ''
        goldCurrency = goldCurrency - 100
        localStorage.setItem('gold', `${Number(goldCurrency)}`)
        document.querySelector('#myGold').innerHTML = `${Number(localStorage.getItem('gold'))}`
    }
})

buttonBuyNewAttackSpear.addEventListener('click', () => {
    let goldCurrency = Number(localStorage.getItem('gold'))
    if (goldCurrency >= 300) {
        knightAttacks[0].spear = 1
        localStorage.setItem('knightAttacks', JSON.stringify(knightAttacks));
        document.querySelector('button#buttonCharacterSpearAttack').style.display = ''
        goldCurrency = goldCurrency - 300
        localStorage.setItem('gold', `${Number(goldCurrency)}`)
        document.querySelector('#myGold').innerHTML = `${Number(localStorage.getItem('gold'))}`
    }
})