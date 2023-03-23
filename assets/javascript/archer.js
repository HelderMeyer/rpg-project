let archerInfo = JSON.parse(localStorage.getItem('archerInfo') || '[]')

if(firstTime == null){
    archerInfo.push({
        life: 90,
        maxLife: 90,
        strength: 15,
        defense: 8,
        magic: 30,
        maxMagic: 30
    });
    localStorage.setItem('archerInfo', JSON.stringify(archerInfo));
} 


class Archer extends Character {
    constructor(name){
        super(name)
        this.life = archerInfo[0].life // Vida do Arqueiro
        this.maxLife = archerInfo[0].maxLife // Vida máxima do Arqueiro
        this.strength = archerInfo[0].strength // Força do Arqueiro
        this.defense = archerInfo[0].defense // Defesa do Arqueiro
        this.magic = archerInfo[0].magic // Magia do Arqueiro
        this.maxMagic = archerInfo[0].maxMagic // Magia máxima do Arqueiro
    }
}