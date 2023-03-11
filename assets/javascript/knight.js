// CLASSE "CAVALEIRO" - DERIVADO DA CLASSE "PERSONAGEM"

class Knight extends Character {
    constructor(name){
        super(name) // Vai pegar o nome da classe Character
        this.life = 100 // Vida do Cavaleiro
        this.maxLife = this.life // Vida máxima do Cavaleiro
        this.strength = 15 // Força do Cavaleiro
        this.defense = 10 // Defesa do Cavaleiro
        this.magic = 0 // Magia do Cavaleiro
        this.maxMagic = this.magic // Magia máxima do Cavaleiro
    }
}