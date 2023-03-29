// CLASSE "MONSTRO" - DERIVADO DA CLASSE "PERSONAGEM"

let monsterInfo = JSON.parse(localStorage.getItem('monsterInfo') || '[]')

if(firstTime == null){
    localStorage.setItem('gold', '0')
    document.querySelector('#myGold').innerHTML = `${Number(localStorage.getItem('gold'))}`
    monsterInfo.push({
        life: 80,
        maxLife: 80,
        strength: 10,
        defense: 8,
        magic: 0,
        maxMagic: 0
    });
    localStorage.setItem('monsterInfo', JSON.stringify(monsterInfo));
}

class Monster extends Character {
    constructor(name) {
        super('Monstro') // O nome do Monstro é definido por padrão
        this.life = monsterInfo[0].life // Vida do Monstro
        this.maxLife = monsterInfo[0].maxLife // Vida máxima do Monstro
        this.strength = monsterInfo[0].strength // Força do Monstro
        this.defense = monsterInfo[0].defense // Defesa do Monstro
        this.magic = monsterInfo[0].magic // Magia do Monstro
        this.maxMagic = monsterInfo[0].maxMagic // Magia máxima do Monstro
    }
}
