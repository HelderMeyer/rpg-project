let character = new Knight('Helder') // Objeto Knight Instanciado (Cavaleiro)
let monster = new Monster() // Objeto Monster Instanciado (Monstro)
const stage = new Stage( // Área de eventos das lutas
    character,
    monster,
    document.querySelector('#character'),
    document.querySelector('#monster')
)
const update = new Update( // Área para salvar e atualizar o jogo
    stage.fighter,
    stage.monster,
    stage.fighterElement,
    stage.monsterElement
)
const sword = new Sword() // Ataque
// Criei o evento de quando clicar no botão "Atacar". O método eventAttack será chamado.
document.querySelector('button#buttonCharacterSwordAttack').addEventListener('click', () => sword.eventAttack(stage.fighter, stage.monster, 'sword'))
document.querySelector('button#buttonCharacterSpearAttack').addEventListener('click', () => sword.eventAttack(stage.fighter, stage.monster, 'spear'))
document.querySelector('button#buttonCharacterKnifeAttack').addEventListener('click', () => sword.eventAttack(stage.fighter, stage.monster, 'knife')) 
update.update()
