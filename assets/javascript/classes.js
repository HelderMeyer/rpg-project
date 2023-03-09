// CLASSE "PERSONAGEM"

class Character {
    _life = 0 // Vida do personagem
    maxLife = 0 // Vida máxima do personagem
    strength = 0 // Força do personagem
    defense = 0 // Defesa do personagem
    constructor(name){
        this.name = name // Nome do personagem
    }
}

// CLASSE "CAVALEIRO" - DERIVADO DA CLASSE "PERSONAGEM"

class Knight extends Character {
    constructor(name){
        super(name) // Vai pegar o nome da classe Character
        this.life = 100 // Vida do Cavaleiro
        this.maxLife = this.life // Vida máxima do Cavaleiro
        this.strength = 15 // Força do Cavaleiro
        this.defense = 10 // Defesa do Cavaleiro
    }
}

// CLASSE "MONSTRO" - DERIVADO DA CLASSE "PERSONAGEM"

class Monster extends Character {
    constructor(name){
        super('Monstro') // O nome do Monstro é definido por padrão
        this.life = 80 // Vida do Monstro
        this.maxLife = this.life // Vida máxima do Monstro
        this.strength = 10 // Força do Monstro
        this.defense = 8 // Defesa do Monstro
    }
}

// ARÉA/EVENTOS DE LUTA/COMBATE

class Stage {
    constructor(fighter, monster, fighterElement, monsterElement){
        this.fighter = fighter // Lutador
        this.fighterElement = fighterElement // Área do lutador no HTML
        this.monster = monster // Monstro
        this.monsterElement = monsterElement // Área do monstro no HTML
    }
    start(){ // Método que vai dar início ao jogo
        this.fighterElement = document.querySelector('button#buttonCharacterAttack').addEventListener('click', () => this.eventAttack(this.fighter, this.monster)) // Criei o evento de quando clicar no botão "Atacar". O método eventAttack será chamado.
        this.update() // Atualizar o jogo
    }
    eventAttack(attacking, attacked){ // Evento que vai captar todos os ataques do personagem
        let randomFactor = (Math.random() * 2).toFixed(2) //Fator que vai gerar números aleatórios, de até 2 casas decimais
        let actualAttack = (attacking.strength * randomFactor).toFixed(2) // Força de quem ataca vezes o fator de ataque, para gerar valores de ataque aleatórios
        let actualDefense = (attacked.defense * randomFactor).toFixed(2) // Defesa de quem é atacado vezes o fator de número aleatório, para gerar valores de defesa aleatórios
        let actualCounterAttack = (attacked.strength * randomFactor).toFixed(2) // Força de quem contraataca (o monstro) vezes o fator de ataque, para gerar valores de ataque aleatórios
        let actualCounterDefense = (attacking.defense * randomFactor).toFixed(2) // Defesa de quem é contraatacado (você) vezes o fator de número aleatório, para gerar valores de defesa aleatórios

        if(attacking.life <= 0 || attacked.life <= 0){ // Se a vida de quem ataca ou de quem foi atacado for menor ou igual a 0
            if(attacking.life <= 0){ // Se a vida de quem ataca for menor que ou igual a 0
                console.log('Você não pode atacar, porque está sem vida!')
            }else if(attacked.life <= 0){ // Se a vida de quem está sendo atacado for menor que ou igual a 0
                console.log('Você não pode atacar, porque o monstro já está sem vida!')
            }
        }else{
            if(actualAttack < actualDefense){ // Se o ataque for menor que a defesa do monstro, ele defenderá
                console.log(`O ${attacked.name} defendeu!`)
            }else{ // Caso contrário, o ataque será feito no monstro
                if(attacked.life <= actualAttack){ // Se a vida de quem é atacado for menor do que a força de ataque de quem tá atacando
                    attacked.life = 0 // Vida de quem ataca vai para 0
                    console.log(`O monstro recebeu ${actualAttack} de dano!`)
                    console.log(`O monstro está morto!`)
                }else{
                    attacked.life -= actualAttack // Vida do monstro menos o dano recebido
                    console.log(`O monstro recebeu ${actualAttack} de dano!`)
                }
            }
            if(attacked.life > 0){ // Se a vida do monstro for maior que 0
                if(actualCounterAttack < actualCounterDefense){ // Se o contraataque for menor que a sua defesa, você defende
                    console.log(`Você defendeu!`)
                }else{ // Caso contrário, você receberá o ataque do monstro
                    if(attacking.life <= actualCounterAttack){ // Se a vida de quem ataca for menor que ou igual ao dano do monstro
                        attacking.life = 0 // Vida de quem ataca vai para 0
                        console.log(`Você recebeu ${actualCounterAttack} de dano!`)
                        console.log(`Você morreu!`)
                    }else{ // Caso contrário, você receberá o dano
                        attacking.life -= actualCounterAttack // Sua vida menos o dano do monstro
                        console.log(`Você recebeu ${actualCounterAttack} de dano!`)
                    }
                }
            }
        }
        this.update() // Atualizar o jogo
    }
    update(){ // Método que vai atualizar o jogo a cada ação realizada
        // VARIÁVEIS PARA RESUMIR O CÓDIGO

        // VIDAS
        const cl = document.querySelector('#characterLife') // cl = characterLife
        const ml = document.querySelector('#monsterLife') // ml = monsterLife
        
        // FORÇA E DEFESA (SUA)
        const syd = document.querySelector('#showYourDefense') // sdy = showYourDefense = Sua defesa
        const sys = document.querySelector('#showYourStrength') // ssy = showYourStrength = Sua força
        
        // FORÇA E DEFESA (MONSTRO)
        const smd = document.querySelector('#showMonsterDefense') // smd = showMonsterDefense
        const sms = document.querySelector('#showMonsterStrength') // sms = showMonsterStrength
       
        // SUA BARRA DE VIDA E DO MONSTRO
        let characterLifePct = ((this.fighter.life/this.fighter.maxLife)*100) // Vida do Personagem em %
        let monsterLifePct = ((this.monster.life/this.monster.maxLife)*100) // Vida do Monstro em %
        
        // VIDA NA TELA
        cl.innerHTML = `<p>${this.fighter.life.toFixed(2)} de vida</p>` // Exibir a vida do personagem dentro da barra de vida
        ml.innerHTML = `<p>${this.monster.life.toFixed(2)} de vida</p>` // Exibir a vida do monstro dentro da barra de vida
        cl.style.width = `${characterLifePct}%` // Manipular a barra de vida de acordo com a porcentagem da vida do personagem
        ml.style.width = `${monsterLifePct}%` // Manupular a barra de vida de acordo com a porcentagem da vida do monstro

        // FORÇA E DEFESA
        syd.innerHTML = `${this.fighter.defense} de defesa`
        syd.style.color = `aqua`
        sys.innerHTML = `${this.fighter.strength} de força`
        sys.style.color = `red`
        smd.innerHTML = `${this.monster.defense} de defesa`
        smd.style.color = `aqua`
        sms.innerHTML = `${this.monster.strength} de força`
        sms.style.color = `red`
    }
}
