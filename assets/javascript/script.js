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

            buttonBuyNewAttackPoisonArrow.style.display = 'none'
            buttonBuyNewAttackFlamingArrow.style.display = 'none'
            buttonBuyNewAttackRaysArrow.style.display = 'none'
            document.querySelector('#liPoisonArrows').style.display = 'none'
            document.querySelector('#liFlamingArrows').style.display = 'none'
            document.querySelector('#liRaysArrows').style.display = 'none'

            buttonBuyNewAttackFire.style.display = 'none'
            buttonBuyNewAttackIce.style.display = 'none'
            buttonBuyNewAttackLightning.style.display = 'none'
            document.querySelector('#liFire').style.display = 'none'
            document.querySelector('#liIce').style.display = 'none'
            document.querySelector('#liLightning').style.display = 'none'

            document.querySelector('#itemBuyMaxMagic').style.display = 'none'
            document.querySelector('#buyMaxMagic').style.display = 'none'

            document.querySelector('#buttonCharacterCrookAttack').style.display = 'none'
            document.querySelector('#buttonCharacterFireAttack').style.display = 'none'
            document.querySelector('#buttonCharacterIceAttack').style.display = 'none'
            document.querySelector('#buttonCharacterLightning').style.display = 'none'
            document.querySelector('#buttonCharacterBowAttack').style.display = 'none'
            document.querySelector('#buttonCharacterBowArrowPoison').style.display = 'none'
            document.querySelector('#buttonCharacterBowArrowFlaming').style.display = 'none'
            document.querySelector('#buttonCharacterBowArrowRays').style.display = 'none'

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
                    let character = new Knight(myName) // Objeto Knight Instanciado (Cavaleiro)
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

            buttonBuyNewAttackPoisonArrow.style.display = 'none'
            buttonBuyNewAttackFlamingArrow.style.display = 'none'
            buttonBuyNewAttackRaysArrow.style.display = 'none'
            document.querySelector('#liPoisonArrows').style.display = 'none'
            document.querySelector('#liFlamingArrows').style.display = 'none'
            document.querySelector('#liRaysArrows').style.display = 'none'

            buttonBuyNewAttackSword.style.display = 'none'
            buttonBuyNewAttackSpear.style.display = 'none'
            document.querySelector('#liSword').style.display = 'none'
            document.querySelector('#liSpear').style.display = 'none'

            document.querySelector('button#buttonCharacterPunchAttack').style.display = 'none'
            document.querySelector('button#buttonCharacterSwordAttack').style.display = 'none'
            document.querySelector('button#buttonCharacterSpearAttack').style.display = 'none'
            document.querySelector('#buttonCharacterBowAttack').style.display = 'none'
            document.querySelector('#buttonCharacterBowArrowPoison').style.display = 'none'
            document.querySelector('#buttonCharacterBowArrowFlaming').style.display = 'none'
            document.querySelector('#buttonCharacterBowArrowRays').style.display = 'none'

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
                    // ATAQUES DO MAGO
                    // ====================

                    let wizardAttacks = JSON.parse(localStorage.getItem('wizardAttacks') || '[]')
                    if (wizardAttacks[0].fire == 0) {
                        document.querySelector('button#buttonCharacterFireAttack').style.display = 'none'
                    } else {
                        document.querySelector('button#buttonCharacterFireAttack').style.display = ''
                    }

                    if (wizardAttacks[0].ice == 0) {
                        document.querySelector('button#buttonCharacterIceAttack').style.display = 'none'
                    } else {
                        document.querySelector('button#buttonCharacterIceAttack').style.display = ''
                    }

                    if (wizardAttacks[0].lightning == 0) {
                        document.querySelector('button#buttonCharacterLightning').style.display = 'none'
                    } else {
                        document.querySelector('button#buttonCharacterLightning').style.display = ''
                    }

                    document.querySelector('#buttonCharacterCrookAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'crook', 1))
                    document.querySelector('#buttonCharacterFireAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'fire', 1.4))
                    document.querySelector('#buttonCharacterIceAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'ice', 1.5))
                    document.querySelector('#buttonCharacterLightning').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'lightning', 2))

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
                // ATAQUES DO MAGO
                // ====================

                let wizardInfo = JSON.parse(localStorage.getItem('wizardInfo') || '[]')
                if (wizardInfo[0].magic < 4) {
                    buttonCharacterLightning.style.display = 'none'
                } else {
                    if (wizardAttacks[0].lightning == 0) {
                        document.querySelector('button#buttonCharacterLightning').style.display = 'none'
                    } else {
                        document.querySelector('button#buttonCharacterLightning').style.display = ''
                    }
                }
                if (wizardInfo[0].magic < 2) {
                    buttonCharacterIceAttack.style.display = 'none'
                    buttonCharacterFireAttack.style.display = 'none'
                } else {
                    if (wizardAttacks[0].fire == 0) {
                        document.querySelector('button#buttonCharacterFireAttack').style.display = 'none'
                    } else {
                        document.querySelector('button#buttonCharacterFireAttack').style.display = ''
                    }

                    if (wizardAttacks[0].ice == 0) {
                        document.querySelector('button#buttonCharacterIceAttack').style.display = 'none'
                    } else {
                        document.querySelector('button#buttonCharacterIceAttack').style.display = ''
                    }
                }

                document.querySelector('#buttonCharacterCrookAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'crook', 1))
                document.querySelector('#buttonCharacterFireAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'fire', 1.4))
                document.querySelector('#buttonCharacterIceAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'ice', 1.5))
                document.querySelector('#buttonCharacterLightning').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'lightning', 2))

                stage.update()
            }
        } else if (number === 3) {

            buttonBuyNewAttackFire.style.display = 'none'
            buttonBuyNewAttackIce.style.display = 'none'
            buttonBuyNewAttackLightning.style.display = 'none'
            buttonBuyNewAttackSword.style.display = 'none'
            buttonBuyNewAttackSpear.style.display = 'none'
            document.querySelector('#liFire').style.display = 'none'
            document.querySelector('#liIce').style.display = 'none'
            document.querySelector('#liLightning').style.display = 'none'
            document.querySelector('#liSword').style.display = 'none'
            document.querySelector('#liSpear').style.display = 'none'

            document.querySelector('#buttonCharacterPunchAttack').style.display = 'none'
            document.querySelector('#buttonCharacterSwordAttack').style.display = 'none'
            document.querySelector('#buttonCharacterSpearAttack').style.display = 'none'
            document.querySelector('#buttonCharacterIceAttack').style.display = 'none'
            document.querySelector('#buttonCharacterFireAttack').style.display = 'none'
            document.querySelector('#buttonCharacterCrookAttack').style.display = 'none'
            document.querySelector('#buttonCharacterLightning').style.display = 'none'

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
                    // ATAQUES DA ARQUEIRA
                    // ====================

                    let archerAttacks = JSON.parse(localStorage.getItem('archerAttacks') || '[]')
                    if (archerAttacks[0].poisonarrow == 0) {
                        document.querySelector('button#buttonCharacterBowArrowPoison').style.display = 'none'
                    } else {
                        document.querySelector('button#buttonCharacterBowArrowPoison').style.display = ''
                    }

                    if (archerAttacks[0].flamingarrow == 0) {
                        document.querySelector('button#buttonCharacterBowArrowFlaming').style.display = 'none'
                    } else {
                        document.querySelector('button#buttonCharacterBowArrowFlaming').style.display = ''
                    }

                    if (archerAttacks[0].raysarrow == 0) {
                        document.querySelector('button#buttonCharacterBowArrowRays').style.display = 'none'
                    } else {
                        document.querySelector('button#buttonCharacterBowArrowRays').style.display = ''
                    }

                    document.querySelector('#buttonCharacterBowAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'normalarrow', 1))
                    document.querySelector('#buttonCharacterBowArrowPoison').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'poisonarrow', 1.3))
                    document.querySelector('#buttonCharacterBowArrowFlaming').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'flamingarrow', 1.6))
                    document.querySelector('#buttonCharacterBowArrowRays').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'raysarrow', 2))
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
                // ATAQUES DA ARQUEIRA
                // ====================

                let archerAttacks = JSON.parse(localStorage.getItem('archerAttacks') || '[]')
                    if (archerAttacks[0].poisonarrow == 0) {
                        document.querySelector('button#buttonCharacterBowArrowPoison').style.display = 'none'
                    } else {
                        document.querySelector('button#buttonCharacterBowArrowPoison').style.display = ''
                    }

                    if (archerAttacks[0].flamingarrow == 0) {
                        document.querySelector('button#buttonCharacterBowArrowFlaming').style.display = 'none'
                    } else {
                        document.querySelector('button#buttonCharacterBowArrowFlaming').style.display = ''
                    }

                    if (archerAttacks[0].raysarrow == 0) {
                        document.querySelector('button#buttonCharacterBowArrowRays').style.display = 'none'
                    } else {
                        document.querySelector('button#buttonCharacterBowArrowRays').style.display = ''
                    }

                document.querySelector('#buttonCharacterBowAttack').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'normalarrow', 1))
                document.querySelector('#buttonCharacterBowArrowPoison').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'poisonarrow', 1.3))
                document.querySelector('#buttonCharacterBowArrowFlaming').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'flamingarrow', 1.6))
                document.querySelector('#buttonCharacterBowArrowRays').addEventListener('click', () => stage.eventAttack(stage.fighter, stage.monster, 'raysarrow', 2))
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
    // Ataques do Cavaleiro
    buttonBuyNewAttackSword.style.display = ''
    document.querySelector('#liSword').style.display = ''
    buttonBuyNewAttackSpear.style.display = ''
    document.querySelector('#liSpear').style.display = ''
    knightAttacks[0].sword = 0
    knightAttacks[0].spear = 0
    localStorage.setItem('knightAttacks', JSON.stringify(knightAttacks));

    // Ataques do Mago

    buttonBuyNewAttackFire.style.display = ''
    buttonBuyNewAttackIce.style.display = ''
    buttonBuyNewAttackLightning.style.display = ''

    document.querySelector('#liFire').style.display = ''
    document.querySelector('#liIce').style.display = ''
    document.querySelector('#liLightning').style.display = ''

    wizardAttacks[0].fire = 0
    wizardAttacks[0].ice = 0
    wizardAttacks[0].lightning = 0
    localStorage.setItem('wizardAttacks', JSON.stringify(wizardAttacks));

    // Ataques da Arqueira

    buttonBuyNewAttackPoisonArrow.style.display = ''
    buttonBuyNewAttackFlamingArrow.style.display = ''
    buttonBuyNewAttackRaysArrow.style.display = ''

    document.querySelector('#liPoisonArrows').style.display = ''
    document.querySelector('#liFlamingArrows').style.display = ''
    document.querySelector('#liRaysArrows').style.display = ''

    archerAttacks[0].poisonarrow = 0
    archerAttacks[0].flamingarrow = 0
    archerAttacks[0].raysarrow = 0
    localStorage.setItem('archerAttacks', JSON.stringify(archerAttacks));

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

const buttonBuyNewAttackFire = document.querySelector('#itemBuyNewAttackFire')
const buttonBuyNewAttackIce = document.querySelector('#itemBuyNewAttackIce')
const buttonBuyNewAttackLightning = document.querySelector('#itemBuyNewAttackLightning')

const buttonBuyNewAttackPoisonArrow = document.querySelector('#itemBuyNewAttackPoisonArrows')
const buttonBuyNewAttackFlamingArrow = document.querySelector('#itemBuyNewAttackFlamingArrows')
const buttonBuyNewAttackRaysArrow = document.querySelector('#itemBuyNewAttackRaysArrows')

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
let wizardAttacks = JSON.parse(localStorage.getItem('wizardAttacks') || '[]')
let archerAttacks = JSON.parse(localStorage.getItem('archerAttacks') || '[]')

if (knightAttacks[0].sword == 1) {
    buttonBuyNewAttackSword.style.display = 'none'
    document.querySelector('#liSword').style.display = 'none'
}

buttonBuyNewAttackSword.addEventListener('click', () => {
    let goldCurrency = Number(localStorage.getItem('gold'))
    if (goldCurrency >= 100) {
        knightAttacks[0].sword = 1
        localStorage.setItem('knightAttacks', JSON.stringify(knightAttacks));
        document.querySelector('button#buttonCharacterSwordAttack').style.display = ''
        goldCurrency = goldCurrency - 100
        localStorage.setItem('gold', `${Number(goldCurrency)}`)
        document.querySelector('#myGold').innerHTML = `${Number(localStorage.getItem('gold'))}`
        buttonBuyNewAttackSword.style.display = 'none'
        document.querySelector('#liSword').style.display = 'none'
    }
})

if (knightAttacks[0].spear == 1) {
    buttonBuyNewAttackSpear.style.display = 'none'
    document.querySelector('#liSpear').style.display = 'none'
}

buttonBuyNewAttackSpear.addEventListener('click', () => {
    let goldCurrency = Number(localStorage.getItem('gold'))
    if (goldCurrency >= 200) {
        knightAttacks[0].spear = 1
        localStorage.setItem('knightAttacks', JSON.stringify(knightAttacks));
        document.querySelector('button#buttonCharacterSpearAttack').style.display = ''
        goldCurrency = goldCurrency - 200
        localStorage.setItem('gold', `${Number(goldCurrency)}`)
        document.querySelector('#myGold').innerHTML = `${Number(localStorage.getItem('gold'))}`
        buttonBuyNewAttackSpear.style.display = 'none'
        document.querySelector('#liSpear').style.display = 'none'
    }
})

if (wizardAttacks[0].fire == 1) {
    buttonBuyNewAttackFire.style.display = 'none'
    document.querySelector('#liFire').style.display = 'none'
}

buttonBuyNewAttackFire.addEventListener('click', () => {
    let goldCurrency = Number(localStorage.getItem('gold'))
    if (goldCurrency >= 100) {
        wizardAttacks[0].fire = 1
        localStorage.setItem('wizardAttacks', JSON.stringify(wizardAttacks));
        document.querySelector('button#buttonCharacterFireAttack').style.display = ''
        goldCurrency = goldCurrency - 100
        localStorage.setItem('gold', `${Number(goldCurrency)}`)
        document.querySelector('#myGold').innerHTML = `${Number(localStorage.getItem('gold'))}`
        buttonBuyNewAttackFire.style.display = 'none'
        document.querySelector('#liFire').style.display = 'none'
    }
})

if (wizardAttacks[0].ice == 1) {
    buttonBuyNewAttackIce.style.display = 'none'
    document.querySelector('#liIce').style.display = 'none'
}

buttonBuyNewAttackIce.addEventListener('click', () => {
    let goldCurrency = Number(localStorage.getItem('gold'))
    if (goldCurrency >= 100) {
        wizardAttacks[0].ice = 1
        localStorage.setItem('wizardAttacks', JSON.stringify(wizardAttacks));
        document.querySelector('button#buttonCharacterIceAttack').style.display = ''
        goldCurrency = goldCurrency - 100
        localStorage.setItem('gold', `${Number(goldCurrency)}`)
        document.querySelector('#myGold').innerHTML = `${Number(localStorage.getItem('gold'))}`
        buttonBuyNewAttackIce.style.display = 'none'
        document.querySelector('#liIce').style.display = 'none'
    }
})

if (wizardAttacks[0].lightning == 1) {
    buttonBuyNewAttackLightning.style.display = 'none'
    document.querySelector('#liLightning').style.display = 'none'
}

buttonBuyNewAttackLightning.addEventListener('click', () => {
    let goldCurrency = Number(localStorage.getItem('gold'))
    if (goldCurrency >= 200) {
        wizardAttacks[0].lightning = 1
        localStorage.setItem('wizardAttacks', JSON.stringify(wizardAttacks));
        document.querySelector('button#buttonCharacterLightning').style.display = ''
        goldCurrency = goldCurrency - 200
        localStorage.setItem('gold', `${Number(goldCurrency)}`)
        document.querySelector('#myGold').innerHTML = `${Number(localStorage.getItem('gold'))}`
        buttonBuyNewAttackLightning.style.display = 'none'
        document.querySelector('#liLightning').style.display = 'none'
    }
})

if (archerAttacks[0].poisonarrow == 1) {
    buttonBuyNewAttackPoisonArrow.style.display = 'none'
    document.querySelector('#liPoisonArrows').style.display = 'none'
}

buttonBuyNewAttackPoisonArrow.addEventListener('click', () => {
    let goldCurrency = Number(localStorage.getItem('gold'))
    if (goldCurrency >= 100) {
        archerAttacks[0].poisonarrow = 1
        localStorage.setItem('archerAttacks', JSON.stringify(archerAttacks));
        document.querySelector('button#buttonCharacterBowArrowPoison').style.display = ''
        goldCurrency = goldCurrency - 100
        localStorage.setItem('gold', `${Number(goldCurrency)}`)
        document.querySelector('#myGold').innerHTML = `${Number(localStorage.getItem('gold'))}`
        buttonBuyNewAttackPoisonArrow.style.display = 'none'
        document.querySelector('#liPoisonArrows').style.display = 'none'
    }
})

if (archerAttacks[0].flamingarrow == 1) {
    buttonBuyNewAttackFlamingArrow.style.display = 'none'
    document.querySelector('#liFlamingArrows').style.display = 'none'
}

buttonBuyNewAttackFlamingArrow.addEventListener('click', () => {
    let goldCurrency = Number(localStorage.getItem('gold'))
    if (goldCurrency >= 100) {
        archerAttacks[0].flamingarrow = 1
        localStorage.setItem('archerAttacks', JSON.stringify(archerAttacks));
        document.querySelector('button#buttonCharacterBowArrowFlaming').style.display = ''
        goldCurrency = goldCurrency - 100
        localStorage.setItem('gold', `${Number(goldCurrency)}`)
        document.querySelector('#myGold').innerHTML = `${Number(localStorage.getItem('gold'))}`
        buttonBuyNewAttackFlamingArrow.style.display = 'none'
        document.querySelector('#liFlamingArrows').style.display = 'none'
    }
})

if (archerAttacks[0].raysarrow == 1) {
    buttonBuyNewAttackRaysArrow.style.display = 'none'
    document.querySelector('#liRaysArrows').style.display = 'none'
}

buttonBuyNewAttackRaysArrow.addEventListener('click', () => {
    let goldCurrency = Number(localStorage.getItem('gold'))
    if (goldCurrency >= 200) {
        archerAttacks[0].raysarrow = 1
        localStorage.setItem('archerAttacks', JSON.stringify(archerAttacks));
        document.querySelector('button#buttonCharacterBowArrowRays').style.display = ''
        goldCurrency = goldCurrency - 200
        localStorage.setItem('gold', `${Number(goldCurrency)}`)
        document.querySelector('#myGold').innerHTML = `${Number(localStorage.getItem('gold'))}`
        buttonBuyNewAttackRaysArrow.style.display = 'none'
        document.querySelector('#liRaysArrows').style.display = 'none'
    }
})
