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
        if(attacking.life <= 0 || attacked.life <= 0){ // Se a vida de quem ataca ou de quem foi atacado for menor ou igual a 0
            if(attacking <= 0){ // Se a vida de quem ataca for menor que ou igual a 0
                console.log('Você não pode atacar, porque está sem vida!')
            }else if(attacked.life <= 0){
                console.log('Você não pode atacar, porque o monstro já está sem vida!')
            }
        }else{
            if(attacked.life < attacking.strength){
                attacked.life = 0
                console.log(`O monstro está morto!`)
            }else{
                attacked.life -= attacking.strength
                console.log(`O monstro recebeu ${attacking.strength} de dano!`)
            }
        }
        this.update() // Atualizar o jogo
    }
    update(){ // Método que vai atualizar o jogo a cada ação realizada
        const cl = document.querySelector('#characterLife') // cl = characterLife
        const ml = document.querySelector('#monsterLife') // ml = monsterLife
        let characterLifePct = ((this.fighter.life/this.fighter.maxLife)*100) // Vida do Personagem em %
        let monsterLifePct = ((this.monster.life/this.monster.maxLife)*100) // Vida do Monstro em %

        cl.innerHTML = `<p>${this.fighter.life} de vida</p>` // Exibir a vida do personagem dentro da barra de vida
        ml.innerHTML = `<p>${this.monster.life} de vida</p>` // Exibir a vida do monstro dentro da barra de vida
        cl.style.width = `${characterLifePct}%` // Manipular a barra de vida de acordo com a porcentagem da vida do personagem
        ml.style.width = `${monsterLifePct}%` // Manupular a barra de vida de acordo com a porcentagem da vida do monstro
    }
}
