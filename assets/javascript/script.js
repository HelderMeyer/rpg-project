let character = new Knight('Helder') // Objeto Knight Instanciado (Cavaleiro)
let monster = new Monster() // Objeto Monster Instanciado (Monstro)
const stage = new Stage( // Área de eventos das lutas
    character,
    monster,
    document.querySelector('#character'),
    document.querySelector('#monster')
)
stage.start()