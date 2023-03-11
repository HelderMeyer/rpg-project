// CLASSE "MONSTRO" - DERIVADO DA CLASSE "PERSONAGEM"

class Monster extends Character {
    constructor(name){
        super('Monstro') // O nome do Monstro é definido por padrão
        this.life = 80 // Vida do Monstro
        this.maxLife = this.life // Vida máxima do Monstro
        this.strength = 10 // Força do Monstro
        this.defense = 8 // Defesa do Monstro
        this.magic = 0 // Magia do Monstro
        this.maxMagic = this.magic // Magia máxima do Monstro
    }
}
