function calcWinRate(wins, loses) {
    return wins - loses;
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

let wins = 120
let loses = 65

let winRate = calcWinRate(wins, loses)
let rank = getRanking(winRate)

console.log(`O Herói tem saldo de ${winRate} está no nível ${rank}`)