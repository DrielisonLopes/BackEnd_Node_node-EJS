const { EventEmitter } = require('events')

const ev = new EventEmitter()

console.log(ev)

//'on' ouve várias vezes já o 'once' uma única vez
//ouvindo o evento
ev.on('saySomething', (message) => {
    console.log('Eu ouvi você ', message)
})

//disparar o evento
ev.emit('saySomething', "Dri")
ev.emit('saySomething', "Maykão")
ev.emit('saySomething', "Madara")