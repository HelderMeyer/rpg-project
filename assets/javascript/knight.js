// CLASSE "CAVALEIRO" - DERIVADO DA CLASSE "PERSONAGEM"

let knightInfo = JSON.parse(localStorage.getItem('monsterInfo') || '[]')

if(firstTime){
    knightInfo.push({
        life: 100,
        maxLife: 100,
        strength: 15,
        defense: 10,
        magic: 0,
        maxMagic: 0
    });
    localStorage.setItem('knightInfo', JSON.stringify(knightInfo));
} 

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