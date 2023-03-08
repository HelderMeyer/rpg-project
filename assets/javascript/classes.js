// Classe "Personagem" criada

class Character {

    _life = 0 //Vida
    maxLife = 0 //Vida Máxima
    magic = 0 //Magia
    strength = 0 //Força
    defense = 0 //Defesa

    constructor(name){ //Construtor para pegar o nome do personagem
        this.name = name
    }

    get life(){ //Método get life criado para pegar a vida do personagem
        return this._life
    }

    set life(newLife){ //Método set life criado para colocar a vida do personagem
        this._life = newLife < 0 ? 0 : newLife
    }
}

// CLASSES DOS HERÓIS

// Classe Knight = Cavaleiro

class Knight extends Character {
    constructor(name){
        super(name) // Pega o nome da classe Character
        this.life = 100
        this.magic = 0
        this.strength = 15
        this.defense = 10
        this.maxLife = this.life
    }
}

// Classe Wizard = Mago

class Wizard extends Character {
    constructor(name){
        super(name) // Pega o nome da classe Character
        this.life = 85
        this.magic = 100
        this.strength = 7
        this.defense = 15
        this.maxLife = this.life
    }
}

// Classe Archer = Arqueiro

class Archer extends Character {
    constructor(name){
        super(name) // Pega o nome da classe Character
        this.life = 90
        this.magic = 20
        this.strength = 20
        this.defense = 8
        this.maxLife = this.life
    }
}

// CLASSES DOS VILÕES

class Monster extends Character {
    constructor(name){
        super('Monstro')
        this.life = 10
        this.magic = 5
        this.strength = 5
        this.defense = 4
        this.maxLife = this.life
    }
}