// O que é futebol?
export const palavrasFutebol = {
    probablyWords: [
    "que", "futebol",
    "q", "é", "futebol",
    "q", "futebol",
    "que", "e", "futebol",
    "q", "futebol",
    "me", "explica", "que", "futebol",
    "sabe", "me", "dizer", "o", "que", "futebol"
    ],
    matched: 0,
}

// Quais as regras do futebol?
export const palavrasRegras = {
    probablyWords: [
    "quais", "as", "regras", "do", "futebol",
    "quais", "sao", "as", "regras", "do", "futebol",
    "regras", "do", "futebol",
    "futebol", "regras",
    "como", "funciona", "o", "futebol"
    ],
    matched: 0,
}

// Que time ele mais gosta?
export const palavrasTimeGosta = {
    probablyWords: [
    "que", "mais", "gosta",
    "qual", "você", "torce",
    "preferido",
    "clube", "coração",
    "do",
    "time", "você",
    ],
    matched: 0,
}

// Palmeiras tem mundial?
export const palavrasMundialPalmeiras = {
    probablyWords: [
    "palmeiras", "tem", "mundial",
    "mundial", "palmeiras",
    "mundial",
    "tem", "copa", "do", "mundo",
    "campeão", "mundial"
    ],
    matched: 0,
}

export const papoFurado = {
    probablyWords: [
        "palmeiras", "tem", "mundial",
        "mundial", "palmeiras",
        "mundial",
        "tem", "copa", "do", "mundo",
        "campeão", "mundial"
    ],
    matched: 0,
}

// Trata a resposta
const trataResposta = (resposta) => {
    // Sorteia uma introdução aleatória para nossa resposta na nossa array de strings
    const introducoes = ["Bem...", "Hum...", "Ah...", "Como diria o velho Zagalo... ", "Deixando de lado o Pelé ser melhor que o Maradona... "] // Uma lista de introduções que nosso "MODELO" tem
    const introducao = introducoes[Math.floor(Math.random() * introducoes.length)] // Sorteia um número, e pega uma palavra nessa posição na array
    
    return `${introducao} ${resposta}` // Interpola a introdução com a resposta que já temos
  }


function showAnswer(index) {
    switch (index) {
        case 0:
            return "O futebol é o esporte mais conhecido do mundo e mais difundido em todos os países, sendo o Brazil e a Europa os maiores!"
        case 1:
            return "Algumas regras do futebol seria: não pode agressão, não pode gol contra"
        case 2:
            return "Eu gosto do tigre"
        case 3:
            return "O palmeiras não tem mundial, mas tem copa RIO, mas eles falam que tem né, fazer oq"
        default:
            return "Só sei falar de futebol meu amigo, se não for isso, tchau"
    }
}

export function mostProbablyQuestion() {
    let matches = [
        palavrasFutebol.matched, 
        palavrasRegras.matched, 
        palavrasTimeGosta.matched,
        palavrasMundialPalmeiras.matched, 
        papoFurado.matched
    ]

    // Vê quantas palavras de cada pergunta foi usada
    return showAnswer(matches.indexOf(Math.max(...matches)))
}