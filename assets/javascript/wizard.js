let wizardInfo = JSON.parse(localStorage.getItem('wizardInfo') || '[]')

if(firstTime == null){
    wizardInfo.push({
        life: 80,
        maxLife: 80,
        strength: 15,
        defense: 10,
        magic: 50,
        maxMagic: 50
    });
    localStorage.setItem('wizardInfo', JSON.stringify(wizardInfo));

    let wizardAttacks = JSON.parse(localStorage.getItem('wizardAttacks') || '[]')
    wizardAttacks.push({
        crook: 1,
        fire: 0,
        ice: 0,
        lightning: 0
    });
    localStorage.setItem('wizardAttacks', JSON.stringify(wizardAttacks));
} 

class Wizard extends Character {
    constructor(name){
        super(name)
        this.life = wizardInfo[0].life // Vida do Mago
        this.maxLife = wizardInfo[0].maxLife // Vida máxima do Mago
        this.strength = wizardInfo[0].strength // Força do Mago
        this.defense = wizardInfo[0].defense // Defesa do Mago
        this.magic = wizardInfo[0].magic // Magia do Mago
        this.maxMagic = wizardInfo[0].maxMagic // Magia máxima do Mago
    }
}