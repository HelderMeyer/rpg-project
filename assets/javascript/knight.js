// CLASSE "CAVALEIRO" - DERIVADO DA CLASSE "PERSONAGEM"

// Import do localStorage para os atributos/habildades do "Cavaleiro"
let knightInfo = JSON.parse(localStorage.getItem('knightInfo') || '[]')

// Se o jogo for iniciado pela primeira vez, vai definir os seguintes atributos ao personagem "Cavaleiro"
if (firstTime == null) {
    // Habilidades do Cavaleiro
    knightInfo.push({
        life: 100,
        maxLife: 100,
        strength: 15,
        defense: 10,
        magic: 0,
        maxMagic: 0
    });
    // Salvar no localStorage
    localStorage.setItem('knightInfo', JSON.stringify(knightInfo));
    // Import do localStorage para os ataques do "Cavaleiro"
    let knightAttacks = JSON.parse(localStorage.getItem('knightAttacks') || '[]')
    knightAttacks.push({
        punch: 1,
        sword: 0,
        spear: 0
    });
    // Salvar no localStorage
    localStorage.setItem('knightAttacks', JSON.stringify(knightAttacks));
}

class Knight extends Character {
    constructor(name) {
        super(name) // Vai pegar o nome da classe Character
        this.life = knightInfo[0].life // Vida do Cavaleiro
        this.maxLife = knightInfo[0].maxLife // Vida máxima do Cavaleiro
        this.strength = knightInfo[0].strength // Força do Cavaleiro
        this.defense = knightInfo[0].defense // Defesa do Cavaleiro
        this.magic = knightInfo[0].magic // Magia do Cavaleiro
        this.maxMagic = knightInfo[0].maxMagic // Magia máxima do Cavaleiro
    }
}