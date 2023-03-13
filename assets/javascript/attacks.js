class Sword {
    eventAttack(attacking, attacked, weaponType){ // Evento que vai captar todos os ataques do personagem
        let randomFactor = (Math.random() * 2).toFixed(2) //Fator que vai gerar números aleatórios, de até 2 casas decimais
        let actualAttack = (attacking.strength * randomFactor).toFixed(2) // Força de quem ataca vezes o fator de ataque, para gerar valores de ataque aleatórios
        let actualDefense = (attacked.defense * randomFactor).toFixed(2) // Defesa de quem é atacado vezes o fator de número aleatório, para gerar valores de defesa aleatórios
        let actualCounterAttack = (attacked.strength * randomFactor).toFixed(2) // Força de quem contraataca (o monstro) vezes o fator de ataque, para gerar valores de ataque aleatórios
        let actualCounterDefense = (attacking.defense * randomFactor).toFixed(2) // Defesa de quem é contraatacado (você) vezes o fator de número aleatório, para gerar valores de defesa aleatórios

        if(weaponType === 'sword'){ // Ataque de Espada
            weaponType = 'Espada'
        }else if(weaponType === 'spear'){ // Ataque de Lança
            weaponType = 'Lança'
        }else if(weaponType === 'knife'){ // Ataque de Faca
            weaponType = 'Faca'
        }

        if(attacking.life <= 0 || attacked.life <= 0){ // Se a vida de quem ataca ou de quem foi atacado for menor ou igual a 0
            if(attacking.life <= 0){ // Se a vida de quem ataca for menor que ou igual a 0
                console.log('Você não pode atacar, porque está sem vida!')
            }else if(attacked.life <= 0){ // Se a vida de quem está sendo atacado for menor que ou igual a 0
                console.log('Você não pode atacar, porque o monstro já está sem vida!')
            }
        }else{
            if(actualAttack < actualDefense){ // Se o ataque for menor que a defesa do monstro, ele defenderá
                console.log(`O ${attacked.name} defendeu!`)
            }else{ // Caso contrário, o ataque será feito no monstro
                if(attacked.life <= actualAttack){ // Se a vida de quem é atacado for menor do que a força de ataque de quem tá atacando
                    attacked.life = 0 // Vida de quem ataca vai para 0
                    console.log(`O monstro recebeu ${actualAttack} de dano da ${weaponType}!`)
                    console.log(`O monstro está morto!`)
                }else{
                    attacked.life -= actualAttack // Vida do monstro menos o dano recebido
                    console.log(`O monstro recebeu ${actualAttack} de dano da ${weaponType}!`)
                }
            }
            if(attacked.life > 0){ // Se a vida do monstro for maior que 0
                if(actualCounterAttack < actualCounterDefense){ // Se o contraataque for menor que a sua defesa, você defende
                    console.log(`Você defendeu!`)
                }else{ // Caso contrário, você receberá o ataque do monstro
                    if(attacking.life <= actualCounterAttack){ // Se a vida de quem ataca for menor que ou igual ao dano do monstro
                        attacking.life = 0 // Vida de quem ataca vai para 0
                        console.log(`Você recebeu ${actualCounterAttack} de dano!`)
                        console.log(`Você morreu!`)
                    }else{ // Caso contrário, você receberá o dano
                        attacking.life -= actualCounterAttack // Sua vida menos o dano do monstro
                        console.log(`Você recebeu ${actualCounterAttack} de dano!`)
                    }
                }
            }
        }
        const update = new Update(
            stage.fighter,
            stage.monster,
            stage.fighterElement,
            stage.monsterElement
        )
        update.update() // Atualizar o jogo
    }
}