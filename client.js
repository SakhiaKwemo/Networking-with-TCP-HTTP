const net = require('net')

const client = net.createConnection({
    host: 'localhost', 
    port: 3002
})

//receiving info from server
client.on('data', (data) => {
    console.log(data)
})

//decoding 
client.setEncoding('utf-8')


process.stdin.on('data', (data) => {
    //sending info to the server
    client.write(data)
})