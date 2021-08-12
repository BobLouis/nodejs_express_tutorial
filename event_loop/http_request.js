const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    if (req.url === '/') {
        res.end('Welcome to our hime page')
    } else {
        res.end(`hello world`)
    }
})

server.listen(5000, () => {
    console.log('server listening on port : 5000...')
})