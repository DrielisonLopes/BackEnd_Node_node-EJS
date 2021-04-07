//rodar no terminal:
//greetings --name "Mayk Brito" --greeting "Tudo bem com você?"

const getFlag = require('./desafio')

console.log(`Oi ${getFlag('--name')}, ${getFlag('--greeting')}`)