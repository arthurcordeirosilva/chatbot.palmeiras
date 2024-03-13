import { palavrasFutebol, palavrasMundialPalmeiras, palavrasRegras, palavrasTimeGosta, comoDarUmaBicicleta, palavrasPS4, palavrasPapoFurado, mostProbablyQuestion } from './can-i-answer.js'
// O que ele vai poder responder?
// - O que é futebol?
// - Quais as regras do futebol?
// - Que time ele mais gosta?
// - Palmeiras tem mundial?
// - Vamos jogar no PS4?
// - PAPO FURADO?

// Separe a frase em uma array de palavras
let pergunta = "Ps4 bora jogar?"
pergunta = pergunta.toLowerCase()
pergunta = pergunta.replace('?', "") // Tirar da pergunta o "?"
pergunta = pergunta.split(' ')


const bancos = [
    palavrasFutebol, palavrasMundialPalmeiras, palavrasRegras, palavrasTimeGosta, comoDarUmaBicicleta, palavrasPapoFurado, palavrasPS4, 
]
// ["minha", "pergunta", "é", "essa"]
for (let i = 0; i < pergunta.length; i++) { // Palavra i
    for (let j = 0; j < bancos.length; j++) { // Procura a palavra i, no banco j
        if (bancos[j].probablyWords.indexOf(pergunta[i]) !== -1) {
            bancos[j].matched++
        }
    }
}
console.log(pergunta)
console.log(mostProbablyQuestion(pergunta))
// Ande pela array de palavras
  // Veja se a palavra existe no banco X, 
  // senão, veja no Y, 
  // senão, veja no Z...TEM NO Z? tensione (aumente o matched em 1)
