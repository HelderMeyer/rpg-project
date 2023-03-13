class Wizard extends Character {
    constructor(name){
        super(name)
        this.life = 80 // Vida do Mago
        this.maxLife = this.life // Vida máxima do Mago
        this.strength = 15 // Força do Mago
        this.defense = 10 // Defesa do Mago
        this.magic = 50 // Magia do Mago
        this.maxMagic = this.magic // Magia máxima do Mago
    }
}