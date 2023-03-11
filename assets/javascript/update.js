class Update extends Stage {
    constructor(fighter, monster, fighterElement, monsterElement){
        super(fighter, monster, fighterElement, monsterElement)
    }
    update(){ // Método que vai atualizar o jogo a cada ação realizada
        // VARIÁVEIS PARA RESUMIR O CÓDIGO

        // VIDAS
        const cl = document.querySelector('#characterLife') // cl = characterLife
        const ml = document.querySelector('#monsterLife') // ml = monsterLife
        
        // FORÇA E DEFESA (SUA)
        const syd = document.querySelector('#showYourDefense') // sdy = showYourDefense = Sua defesa
        const sys = document.querySelector('#showYourStrength') // ssy = showYourStrength = Sua força
        
        // FORÇA E DEFESA (MONSTRO)
        const smd = document.querySelector('#showMonsterDefense') // smd = showMonsterDefense
        const sms = document.querySelector('#showMonsterStrength') // sms = showMonsterStrength
        
        // MAGIAS
        const ym = document.querySelector('#characterMagic') // ym = yourMagic (Sua magia)
        const mm = document.querySelector('#monsterMagic') // mm = monsterMagic (Magia do monstro)

        // SUA BARRA DE VIDA E DO MONSTRO
        let characterLifePct = ((this.fighter.life/this.fighter.maxLife)*100) // Vida do Personagem em %
        let monsterLifePct = ((this.monster.life/this.monster.maxLife)*100) // Vida do Monstro em %

        // SUA BARRA DE MAGIA E A BARRA MAGIA DO MONSTRO
        let characterMagicPct = ((this.fighter.magic/this.fighter.maxMagic)*100) // Magia do Personagem em %
        let monsterMagicPct = ((this.monster.magic/this.monster.maxMagic)*100) // Magia do Monstro em %
        
        // VIDA NA TELA
        cl.innerHTML = `<div class="divBarsFormat"><img src="../assets/images/Vida.png" height="24px"><img><p>${this.fighter.life.toFixed(0)} de vida</p></div>` // Exibir a vida do personagem dentro da barra de vida
        ml.innerHTML = `<div class="divBarsFormat"><img src="../assets/images/Vida.png" height="24px"><img><p>${this.monster.life.toFixed(0)} de vida</p></div>` // Exibir a vida do monstro dentro da barra de vida
        cl.style.width = `${characterLifePct}%` // Manipular a barra de vida de acordo com a porcentagem da vida do personagem
        ml.style.width = `${monsterLifePct}%` // Manupular a barra de vida de acordo com a porcentagem da vida do monstro

        // MAGIA NA TELA
        ym.innerHTML = `<div class="divBarsFormat"><img src="../assets/images/Magia.png" height="24px"><img><p>${this.fighter.magic.toFixed(0)} de magia</p></div>` // Exibir a magia do personagem dentro da barra de magia
        mm.innerHTML = `<div class="divBarsFormat"><img src="../assets/images/Magia.png" height="24px"><img><p>${this.monster.magic.toFixed(0)} de magia</p></div>` // Exibir a magia do monstro dentro da barra de magia
        ym.style.width = `${characterMagicPct}%` // Manipular a barra de magia de acordo com a porcentagem de magia do personagem
        mm.style.width = `${monsterMagicPct}%` // Manupular a barra de magia de acordo com a porcentagem de magia do monstro

        // FORÇA E DEFESA
        syd.innerHTML = `${this.fighter.defense} de defesa` // Exibir a defesa do personagem
        syd.style.color = `aqua`
        sys.innerHTML = `${this.fighter.strength} de força`// Exibir a força do personagem
        sys.style.color = `red`
        smd.innerHTML = `${this.monster.defense} de defesa` // Exibir a defesa do monstro
        smd.style.color = `aqua`
        sms.innerHTML = `${this.monster.strength} de força` // Exibir a força do monstro
        sms.style.color = `red`
    }
}