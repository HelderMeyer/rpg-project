class Archer extends Character {
    constructor(name){
        super(name)
        this.life = 90 // Vida do Arqueiro
        this.maxLife = this.life // Vida máxima do Arqueiro
        this.strength = 15 // Força do Arqueiro
        this.defense = 8 // Defesa do Arqueiro
        this.magic = 30 // Magia do Arqueiro
        this.maxMagic = this.magic // Magia máxima do Arqueiro
    }
}