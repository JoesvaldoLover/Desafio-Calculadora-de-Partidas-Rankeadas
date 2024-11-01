function calcWinRate(wins, loses) {
    return wins - loses
}

// Função principal da partida
// Retorna true, indicando vitória da equipe do jogador,
// Ou falso, indicando derrota da equipe do jogador
function mainMatch(heroWinRate) {
    const enemyPlayer = getEnemyWinRate(heroWinRate)
    return heroWinRate >= enemyPlayer
}

// Gera e retorna um valor baseado no saldo de vitória informado,
// variando entre 90% e 110% do saldo recebido pelo parâmetro
function getEnemyWinRate(winRateBase) {
    return Math.round(Math.random() * (winRateBase * 0.2) + (winRateBase * 0.9))
}

function getRanking(winRate) {
    let rank = "Ferro"

    if (winRate > 10 && winRate <= 20) {
        rank = "Bronze"
    } else if (winRate > 20 && winRate <= 50) {
        rank = "Prata"
    } else if (winRate > 50 && winRate <= 80) {
        rank = "Ouro"
    } else if (winRate > 80 && winRate <= 90) {
        rank = "Diamante"
    } else if (winRate > 90 && winRate <= 100) {
        rank = "Lendário"
    } else if (winRate > 100) {
        rank = "Imortal"
    }

    return rank
}

let wins = 100
let loses = 50

let winRate = calcWinRate(wins, loses)

totalPartidas = 100

for (let i = 0; i < totalPartidas; i++) {
    if(mainMatch(winRate))
        wins++
    else
        loses++

    winRate = calcWinRate(wins, loses)
}

const RANK = getRanking(winRate)

console.log(`O Herói tem saldo de ${winRate} está no nível ${RANK}`)