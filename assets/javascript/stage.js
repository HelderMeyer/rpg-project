// ARÉA/EVENTOS DE LUTA/COMBATE

let firstTime = localStorage.getItem('firsttime')

if (firstTime == null) {
    localStorage.setItem('monsterLevel', '0')
}

class Stage {
    constructor(fighter, monster, fighterElement, monsterElement) {
        this.fighter = fighter // Lutador
        this.fighterElement = fighterElement // Área do lutador no HTML
        this.monster = monster // Monstro
        this.monsterElement = monsterElement // Área do monstro no HTML
    }
    eventAttack(attacking, attacked, weaponType, attackTypePercent) { // Evento que vai captar todos os ataques do personagem
        let randomFactor = (Math.random() * 2).toFixed(2) //Fator que vai gerar números aleatórios, de até 2 casas decimais

        let actualAttack = 0

        let actualDefense = (monsterInfo[0].defense * randomFactor).toFixed(2) // Defesa de quem é atacado vezes o fator de número aleatório, para gerar valores de defesa aleatórios
        let actualCounterAttack = (monsterInfo[0].strength * randomFactor).toFixed(2) // Força de quem contraataca (o monstro) vezes o fator de ataque, para gerar valores de ataque aleatórios

        let actualCounterDefense = 0

        let monsterLevel = localStorage.getItem('monsterLevel')

        if (localStorage.getItem('characterClassType') == 1) {
            actualAttack = ((knightInfo[0].strength * randomFactor) * Number(attackTypePercent)).toFixed(2)
        } else if (localStorage.getItem('characterClassType') == 2) {
            actualAttack = (wizardInfo[0].strength * randomFactor).toFixed(2)
        } else if (localStorage.getItem('characterClassType') == 3) {
            actualAttack = (archerInfo[0].strength * randomFactor).toFixed(2)
        }

        if (localStorage.getItem('characterClassType') == 1) {
            actualCounterDefense = (knightInfo[0].defense * randomFactor).toFixed(2)
        } else if (localStorage.getItem('characterClassType') == 2) {
            actualCounterDefense = (wizardInfo[0].defense * randomFactor).toFixed(2)
        } else if (localStorage.getItem('characterClassType') == 3) {
            actualCounterDefense = (archerInfo[0].defense * randomFactor).toFixed(2)
        }

        /*
        if (localStorage.getItem('characterClassType') == 1) {
            
        } else if (localStorage.getItem('characterClassType') == 2) {
           
        } else if (localStorage.getItem('characterClassType') == 3) {
            
        }
        */

        if (weaponType === 'sword') { // Ataque de Espada
            weaponType = 'Espada'
        } else if (weaponType === 'spear') { // Ataque de Lança
            weaponType = 'Lança'
        } else if (weaponType === 'punch') { // Ataque de Faca
            weaponType = 'Soco'
        } else if (weaponType === 'crook') {
            weaponType = 'Cajado'
        } else if (weaponType === 'fire') {
            weaponType = 'Fogo'
        } else if (weaponType === 'ice') {
            weaponType = 'Gelo'
        } else if (weaponType === 'lightning') {
            weaponType = 'Relâmpagos'
        }

        let attackingLife = 0

        if (localStorage.getItem('characterClassType') == 1) {
            attackingLife = knightInfo[0].life
        } else if (localStorage.getItem('characterClassType') == 2) {
            attackingLife = wizardInfo[0].life
        } else if (localStorage.getItem('characterClassType') == 3) {
            attackingLife = archerInfo[0].life
        }

        if (attackingLife <= 0 || monsterInfo[0].life <= 0) { // Se a vida de quem ataca ou de quem foi atacado for menor ou igual a 0
            if (attackingLife <= 0) { // Se a vida de quem ataca for menor que ou igual a 0
                console.log('Você não pode atacar, porque está sem vida!')
            } else if (monsterInfo[0].life <= 0) { // Se a vida de quem está sendo atacado for menor que ou igual a 0
                console.log('Você não pode atacar, porque o monstro já está sem vida!')
            }
        } else {
            if (actualAttack < actualDefense) { // Se o ataque for menor que a defesa do monstro, ele defenderá
                console.log(`O ${attacked.name} defendeu!`)
            } else { // Caso contrário, o ataque será feito no monstro
                if (monsterInfo[0].life <= actualAttack) { // Se a vida de quem é atacado for menor do que a força de ataque de quem tá atacando
                    monsterInfo[0].life = 0 // Vida de quem ataca vai para 0

                    // 1234518342167341283672153126735167835126783521786352178635126783561253672815367125312678351267357128653

                    if(wizardInfo[0].magic >= 2){
                        if(weaponType == 'Fogo'){
                            wizardInfo[0].magic -= 2
                            localStorage.setItem('wizardInfo', JSON.stringify(wizardInfo));
                        }
                        if(weaponType == 'Gelo'){
                            wizardInfo[0].magic -= 2
                            localStorage.setItem('wizardInfo', JSON.stringify(wizardInfo));
                        }
                        if(wizardInfo[0].magic >= 4){
                            if(weaponType == 'Relâmpagos'){
                                wizardInfo[0].magic -= 4
                                localStorage.setItem('wizardInfo', JSON.stringify(wizardInfo));
                            }
                        }
                    }

                    if(wizardInfo[0].magic >= 4 && wizardAttacks[0].lightning == 1){
                        buttonCharacterLightning.style.display = ''
                    }else{
                        buttonCharacterLightning.style.display = 'none'
                    }

                    if(wizardAttacks[0].fire == 1){
                        if(wizardInfo[0].magic >= 2){
                            buttonCharacterFireAttack.style.display = ''
                        }else{
                            buttonCharacterFireAttack.style.display = 'none'
                        }
                    }
                    
                    if(wizardAttacks[0].ice == 1){
                        if(wizardInfo[0].magic >= 2){
                            buttonCharacterIceAttack.style.display = ''
                        }else{
                            buttonCharacterIceAttack.style.display = 'none'
                        }
                    }

                    console.log(`O monstro recebeu ${actualAttack} de dano da ${weaponType}!`)
                    console.log(`O monstro está morto!`)
                    monsterInfo[0].life = monsterInfo[0].life
                    localStorage.setItem('monsterInfo', JSON.stringify(monsterInfo));
                    if (monsterInfo[0].life == 0) {
                        let myLevelList = document.querySelector('#levelsList')
                        myLevelList.getElementsByTagName('li')[monsterLevel].style.backgroundColor = 'green'
                        myLevelList.getElementsByTagName('li')[monsterLevel].style.scale = '1'
                        setTimeout(() => {
                            ++monsterLevel
                            localStorage.setItem('monsterLevel', monsterLevel.toString())
                            this.monsterLevel(monsterLevel)
                            myLevelList.getElementsByTagName('li')[monsterLevel].style.backgroundColor = '#144272'
                            myLevelList.getElementsByTagName('li')[monsterLevel].style.scale = '1.2'
                        }, 1000)
                        let newGoldCurrency = Number(localStorage.getItem('gold'))
                        newGoldCurrency += monsterInfo[0].maxLife * 0.1
                        localStorage.setItem('gold', `${Number(newGoldCurrency).toFixed(0)}`)
                        for (let contador = 0; contador <= Number(localStorage.getItem('gold')); contador++) {
                            setTimeout(() => {
                                document.querySelector('#myGold').innerHTML = `${contador}`
                            }, 500)
                        }
                    }
                } else {
                    monsterInfo[0].life -= actualAttack // Vida do monstro menos o dano recebido
                    console.log(`O monstro recebeu ${actualAttack} de dano da ${weaponType}!`)
                    monsterInfo[0].life = monsterInfo[0].life
                    localStorage.setItem('monsterInfo', JSON.stringify(monsterInfo));
                    
                    // 1234518342167341283672153126735167835126783521786352178635126783561253672815367125312678351267357128653

                    if(wizardInfo[0].magic >= 2){
                        if(weaponType == 'Fogo'){
                            wizardInfo[0].magic -= 2
                            localStorage.setItem('wizardInfo', JSON.stringify(wizardInfo));
                        }
                        if(weaponType == 'Gelo'){
                            wizardInfo[0].magic -= 2
                            localStorage.setItem('wizardInfo', JSON.stringify(wizardInfo));
                        }
                        if(wizardInfo[0].magic >= 4){
                            if(weaponType == 'Relâmpagos'){
                                wizardInfo[0].magic -= 4
                                localStorage.setItem('wizardInfo', JSON.stringify(wizardInfo));
                            }
                        }
                    }

                    if(wizardInfo[0].magic >= 4 && wizardAttacks[0].lightning == 1){
                        buttonCharacterLightning.style.display = ''
                    }else{
                        buttonCharacterLightning.style.display = 'none'
                    }

                    if(wizardAttacks[0].fire == 1){
                        if(wizardInfo[0].magic >= 2){
                            buttonCharacterFireAttack.style.display = ''
                        }else{
                            buttonCharacterFireAttack.style.display = 'none'
                        }
                    }
                    
                    if(wizardAttacks[0].ice == 1){
                        if(wizardInfo[0].magic >= 2){
                            buttonCharacterIceAttack.style.display = ''
                        }else{
                            buttonCharacterIceAttack.style.display = 'none'
                        }
                    }
                    
                }
            }
            if (monsterInfo[0].life > 0) { // Se a vida do monstro for maior que 0
                if (actualCounterAttack < actualCounterDefense) { // Se o contraataque for menor que a sua defesa, você defende
                    console.log(`Você defendeu!`)
                } else { // Caso contrário, você receberá o ataque do monstro
                    if (attackingLife <= actualCounterAttack) { // Se a vida de quem ataca for menor que ou igual ao dano do monstro
                        attackingLife = 0 // Vida de quem ataca vai para 0
                        console.log(`Você recebeu ${actualCounterAttack} de dano!`)
                        console.log(`Você morreu!`)
                        if (attackingLife == 0) {
                            let myLevelList = document.querySelector('#levelsList')
                            setTimeout(() => {
                                myLevelList.getElementsByTagName('li')[monsterLevel].style.scale = '1'
                                myLevelList.getElementsByTagName('li')[monsterLevel].style.backgroundColor = '#41a6ff'
                                if (monsterLevel >= 1) {
                                    --monsterLevel
                                    localStorage.setItem('monsterLevel', monsterLevel.toString())
                                } else {
                                    localStorage.setItem('monsterLevel', `0`)
                                }
                                if (localStorage.getItem('characterClassType') == 1) {
                                    attackingLife = knightInfo[0].maxLife
                                } else if (localStorage.getItem('characterClassType') == 2) {
                                    attackingLife = wizardInfo[0].maxLife
                                } else if (localStorage.getItem('characterClassType') == 3) {
                                    attackingLife = archerInfo[0].maxLife
                                }
                                knightInfo[0].life = knightInfo[0].maxLife
                                wizardInfo[0].life = wizardInfo[0].maxLife
                                archerInfo[0].life = archerInfo[0].maxLife
                                localStorage.setItem('knightInfo', JSON.stringify(knightInfo));
                                localStorage.setItem('wizardInfo', JSON.stringify(wizardInfo));
                                localStorage.setItem('archerInfo', JSON.stringify(archerInfo));
                                this.monsterLevel(monsterLevel)
                                myLevelList.getElementsByTagName('li')[monsterLevel].style.backgroundColor = '#144272'
                                myLevelList.getElementsByTagName('li')[monsterLevel].style.scale = '1.2'
                            }, 1000)
                        }
                        knightInfo[0].life = attackingLife
                        wizardInfo[0].life = attackingLife
                        archerInfo[0].life = attackingLife
                        localStorage.setItem('knightInfo', JSON.stringify(knightInfo));
                        localStorage.setItem('wizardInfo', JSON.stringify(wizardInfo));
                        localStorage.setItem('archerInfo', JSON.stringify(archerInfo));
                    } else { // Caso contrário, você receberá o dano
                        attackingLife -= actualCounterAttack // Sua vida menos o dano do monstro
                        console.log(`Você recebeu ${actualCounterAttack} de dano!`)
                        knightInfo[0].life = attackingLife
                        wizardInfo[0].life = attackingLife
                        archerInfo[0].life = attackingLife
                        localStorage.setItem('knightInfo', JSON.stringify(knightInfo));
                        localStorage.setItem('wizardInfo', JSON.stringify(wizardInfo));
                        localStorage.setItem('archerInfo', JSON.stringify(archerInfo));
                    }
                }
            }
        }
        this.update() // Atualizar o jogo
    }
    monsterLevel(number) {
        // 0 - 9 (10 números)
        // Pegue o que eu estou e deixe azul escuro #144272
        // Quando avançar, pegar o anterior e deixar verde #green
        // Se eu perder o que eu estou, voltar 1 nível e deixar o nível que perdi em vermelho #red
        switch (number) {
            case 0:
                monsterInfo[0].life = 80
                monsterInfo[0].maxLife = 80
                monsterInfo[0].strength = 10
                monsterInfo[0].defense = 8
                monsterInfo[0].magic = 0
                monsterInfo[0].maxMagic = 0
                localStorage.setItem('monsterInfo', JSON.stringify(monsterInfo));
                break;
            case 1:
                monsterInfo[0].life = 120
                monsterInfo[0].maxLife = 120
                monsterInfo[0].strength = 12
                monsterInfo[0].defense = 12
                monsterInfo[0].magic = 5
                monsterInfo[0].maxMagic = 5
                localStorage.setItem('monsterInfo', JSON.stringify(monsterInfo));
                break;
            case 2:
                monsterInfo[0].life = 160
                monsterInfo[0].maxLife = 160
                monsterInfo[0].strength = 18
                monsterInfo[0].defense = 16
                monsterInfo[0].magic = 10
                monsterInfo[0].maxMagic = 10
                localStorage.setItem('monsterInfo', JSON.stringify(monsterInfo));
                break;
            case 3:
                monsterInfo[0].life = 200
                monsterInfo[0].maxLife = 200
                monsterInfo[0].strength = 26
                monsterInfo[0].defense = 22
                monsterInfo[0].magic = 20
                monsterInfo[0].maxMagic = 20
                localStorage.setItem('monsterInfo', JSON.stringify(monsterInfo));
                break;
            case 4:
                monsterInfo[0].life = 280
                monsterInfo[0].maxLife = 280
                monsterInfo[0].strength = 30
                monsterInfo[0].defense = 28
                monsterInfo[0].magic = 25
                monsterInfo[0].maxMagic = 25
                localStorage.setItem('monsterInfo', JSON.stringify(monsterInfo));
                break;
            case 5:
                monsterInfo[0].life = 360
                monsterInfo[0].maxLife = 360
                monsterInfo[0].strength = 38
                monsterInfo[0].defense = 34
                monsterInfo[0].magic = 30
                monsterInfo[0].maxMagic = 30
                localStorage.setItem('monsterInfo', JSON.stringify(monsterInfo));
                break;
            case 6:
                monsterInfo[0].life = 440
                monsterInfo[0].maxLife = 440
                monsterInfo[0].strength = 44
                monsterInfo[0].defense = 40
                monsterInfo[0].magic = 35
                monsterInfo[0].maxMagic = 35
                localStorage.setItem('monsterInfo', JSON.stringify(monsterInfo));
                break;
            case 7:
                monsterInfo[0].life = 600
                monsterInfo[0].maxLife = 600
                monsterInfo[0].strength = 64
                monsterInfo[0].defense = 60
                monsterInfo[0].magic = 40
                monsterInfo[0].maxMagic = 40
                localStorage.setItem('monsterInfo', JSON.stringify(monsterInfo));
                break;
            case 8:
                monsterInfo[0].life = 760
                monsterInfo[0].maxLife = 760
                monsterInfo[0].strength = 78
                monsterInfo[0].defense = 70
                monsterInfo[0].magic = 45
                monsterInfo[0].maxMagic = 45
                localStorage.setItem('monsterInfo', JSON.stringify(monsterInfo));
                break;
            case 9:
                monsterInfo[0].life = 1000
                monsterInfo[0].maxLife = 1000
                monsterInfo[0].strength = 100
                monsterInfo[0].defense = 90
                monsterInfo[0].magic = 50
                monsterInfo[0].maxMagic = 50
                localStorage.setItem('monsterInfo', JSON.stringify(monsterInfo));
                break;
            default:
                break;
        }
        this.update() // Atualizar o jogo
    }
    update() { // Método que vai atualizar o jogo a cada ação realizada
        // VARIÁVEIS PARA RESUMIR O CÓDIGO

        // VIDAS
        const cl = document.querySelector('#characterLife') // cl = characterLife - BARRA DE VIDA DO PERSONAGEM
        const ml = document.querySelector('#monsterLife') // ml = monsterLife - BARRA DE VIDA DO MONSTRO

        // FORÇA E DEFESA (SUA)
        const syd = document.querySelector('#showYourDefense') // sdy = showYourDefense = Sua defesa 
        const sys = document.querySelector('#showYourStrength') // ssy = showYourStrength = Sua força

        // FORÇA E DEFESA (MONSTRO)
        const smd = document.querySelector('#showMonsterDefense') // smd = showMonsterDefense
        const sms = document.querySelector('#showMonsterStrength') // sms = showMonsterStrength

        // MAGIAS
        const ym = document.querySelector('#characterMagic') // ym = yourMagic (Sua magia) - BARRA DE MAGIA
        const mm = document.querySelector('#monsterMagic') // mm = monsterMagic (Magia do monstro) - BARRA DE MAGIA

        // SUA BARRA DE VIDA E DO MONSTRO
        if (localStorage.getItem('characterClassType') == 1) {
            let characterLifePct = ((knightInfo[0].life / knightInfo[0].maxLife) * 100) // Vida do Personagem em %
            cl.style.width = `${characterLifePct}%` // Manipular a barra de vida de acordo com a porcentagem da vida do personagem
        } else if (localStorage.getItem('characterClassType') == 2) {
            let characterLifePct = ((wizardInfo[0].life / wizardInfo[0].maxLife) * 100) // Vida do Personagem em %
            cl.style.width = `${characterLifePct}%` // Manipular a barra de vida de acordo com a porcentagem da vida do personagem
        } else if (localStorage.getItem('characterClassType') == 3) {
            let characterLifePct = ((archerInfo[0].life / archerInfo[0].maxLife) * 100) // Vida do Personagem em %
            cl.style.width = `${characterLifePct}%` // Manipular a barra de vida de acordo com a porcentagem da vida do personagem
        }

        let monsterLifePct = ((monsterInfo[0].life / monsterInfo[0].maxLife) * 100) // Vida do Monstro em %

        // SUA BARRA DE MAGIA E A BARRA MAGIA DO MONSTRO
        let characterMagicPct = 0
        if (localStorage.getItem('characterClassType') == 1) {
            characterMagicPct = ((knightInfo[0].magic / knightInfo[0].maxMagic) * 100)
            ym.style.width = `${characterMagicPct}%` // Manipular a barra de magia de acordo com a porcentagem de magia do personagem
            ym.innerHTML = `<div class="divBarsFormat"><img src="../assets/images/Magia.png" height="24px"><img><p>${knightInfo[0].magic.toFixed(0)} de magia</p></div>` // Exibir a magia do personagem dentro da barra de magia
        } else if (localStorage.getItem('characterClassType') == 2) {
            characterMagicPct = ((wizardInfo[0].magic / wizardInfo[0].maxMagic) * 100)
            ym.style.width = `${characterMagicPct}%` // Manipular a barra de magia de acordo com a porcentagem de magia do personagem
            ym.innerHTML = `<div class="divBarsFormat"><img src="../assets/images/Magia.png" height="24px"><img><p>${wizardInfo[0].magic.toFixed(0)} de magia</p></div>` // Exibir a magia do personagem dentro da barra de magia
        } else if (localStorage.getItem('characterClassType') == 3) {
            characterMagicPct = ((knightInfo[0].magic / knightInfo[0].maxMagic) * 100)
            ym.style.width = `${characterMagicPct}%` // Manipular a barra de magia de acordo com a porcentagem de magia do personagem
            ym.innerHTML = `<div class="divBarsFormat"><img src="../assets/images/Magia.png" height="24px"><img><p>${archerInfo[0].magic.toFixed(0)} de magia</p></div>` // Exibir a magia do personagem dentro da barra de magia
        }

        let monsterMagicPct = ((archerInfo[0].magic / archerInfo[0].maxMagic) * 100) // Magia do Monstro em %

        // VIDA NA TELA
        if (localStorage.getItem('characterClassType') == 1) {
            cl.innerHTML = `<div class="divBarsFormat"><img src="../assets/images/Vida.png" height="24px"><img><p>${knightInfo[0].life.toFixed(0)} de vida</p></div>` // Exibir a vida do personagem dentro da barra de vida
        } else if (localStorage.getItem('characterClassType') == 2) {
            cl.innerHTML = `<div class="divBarsFormat"><img src="../assets/images/Vida.png" height="24px"><img><p>${wizardInfo[0].life.toFixed(0)} de vida</p></div>` // Exibir a vida do personagem dentro da barra de vida
        } else if (localStorage.getItem('characterClassType') == 3) {
            cl.innerHTML = `<div class="divBarsFormat"><img src="../assets/images/Vida.png" height="24px"><img><p>${archerInfo[0].life.toFixed(0)} de vida</p></div>` // Exibir a vida do personagem dentro da barra de vida
        }

        ml.innerHTML = `<div class="divBarsFormat"><img src="../assets/images/Vida.png" height="24px"><img><p>${monsterInfo[0].life.toFixed(0)} de vida</p></div>` // Exibir a vida do monstro dentro da barra de vida
        ml.style.width = `${monsterLifePct}%` // Manupular a barra de vida de acordo com a porcentagem da vida do monstro
        mm.innerHTML = `<div class="divBarsFormat"><img src="../assets/images/Magia.png" height="24px"><img><p>${monsterInfo[0].magic.toFixed(0)} de magia</p></div>` // Exibir a magia do monstro dentro da barra de magia
        mm.style.width = `${monsterMagicPct}%` // Manupular a barra de magia de acordo com a porcentagem de magia do monstro

        // ==============
        // FORÇA E DEFESA
        // ==============

        if (localStorage.getItem('characterClassType') == 1) {
            syd.innerHTML = `${knightInfo[0].defense} de defesa` // Exibir a defesa do personagem
            syd.style.color = `aqua`
            sys.innerHTML = `${knightInfo[0].strength} de força`// Exibir a força do personagem
            sys.style.color = `red`
        } else if (localStorage.getItem('characterClassType') == 2) {
            syd.innerHTML = `${wizardInfo[0].defense} de defesa` // Exibir a defesa do personagem
            syd.style.color = `aqua`
            sys.innerHTML = `${wizardInfo[0].strength} de força`// Exibir a força do personagem
            sys.style.color = `red`
        } else if (localStorage.getItem('characterClassType') == 3) {
            syd.innerHTML = `${archerInfo[0].defense} de defesa` // Exibir a defesa do personagem
            syd.style.color = `aqua`
            sys.innerHTML = `${archerInfo[0].strength} de força`// Exibir a força do personagem
            sys.style.color = `red`
        }
        smd.innerHTML = `${monsterInfo[0].defense} de defesa` // Exibir a defesa do monstro
        smd.style.color = `aqua`
        sms.innerHTML = `${monsterInfo[0].strength} de força` // Exibir a força do monstro
        sms.style.color = `red`
    }
}
