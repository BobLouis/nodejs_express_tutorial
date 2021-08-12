const http = require('http')


const server = http.createServer()

server.on('request', (req, res) => {
    res.end('Welcome')
})
server.listen(5000)

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data received from ${name} ${id}`)
})
customEmitter.on('response', () => {
    console.log('other ')
})
customEmitter.emit('response', 'louis', 43)