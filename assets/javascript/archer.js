// CLASSE "ARQUEIRA" - DERIVADO DA CLASSE "PERSONAGEM"

// Import do localStorage para os atributos/habildades do "Arqueira"
let archerInfo = JSON.parse(localStorage.getItem('archerInfo') || '[]')

// Se o jogo for iniciado pela primeira vez, vai definir os seguintes atributos ao personagem "Arqueira"
if(firstTime == null){
    // Habilidades da "Arqueira"
    archerInfo.push({
        life: 90,
        maxLife: 90,
        strength: 15,
        defense: 8,
        magic: 30,
        maxMagic: 30
    });
    // Salvar no localStorage
    localStorage.setItem('archerInfo', JSON.stringify(archerInfo));
    // Import do localStorage para os ataques da "Arqueira"
    let archerAttacks = JSON.parse(localStorage.getItem('archerAttacks') || '[]')
    // Ataques da "Arqueira"
    archerAttacks.push({
        arrows: 1,
        poisonarrow: 0,
        flamingarrow: 0,
        raysarrow: 0
    });
    // Salvar no localStorage
    localStorage.setItem('archerAttacks', JSON.stringify(archerAttacks));
} 

class Archer extends Character {
    constructor(name){
        super(name) // Vai pegar o nome da classe Character
        this.life = archerInfo[0].life // Vida do Arqueiro
        this.maxLife = archerInfo[0].maxLife // Vida máxima do Arqueiro
        this.strength = archerInfo[0].strength // Força do Arqueiro
        this.defense = archerInfo[0].defense // Defesa do Arqueiro
        this.magic = archerInfo[0].magic // Magia do Arqueiro
        this.maxMagic = archerInfo[0].maxMagic // Magia máxima do Arqueiro
    }
}