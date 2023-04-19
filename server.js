const net = require('net')

const PORT = 3002
const server = net.createServer()

server.listen(PORT, () => {
    console.log("Congratulations your server is running on PORT: " + PORT)
})

// word = "Sakhia Kwemo"
// word.split("k") => ["Sa", "khia ", "Kwemo"]

// data = "setName: Sakhia"
// data.split(" ") => ["setName:", "Sakhia"]
// data.split(" ")[1] => "Sakhia"


let emojis = ["😈", "🎃","👽", "😫","🤯", "🤑"]

let connections = []

//created connection with client
server.on('connection', (connection) => {
    console.log("Hello")
    //decoding
    connection.setEncoding('utf-8')
    //sends info to the client
    connection.write("Welcome my friends")
    connections.push(connection)
    //receives info from the client
    connection.on('data', (data) => {
        // if(data.startsWith("setName: ")) {
        //     connection.username = data.split(" ")[1].trim()
        //     let index = Math.floor(Math.random() * emojis.length)
        //     connection.emoji = emojis[index]
        //     emojis = emojis.filter(item => item !== connection.emoji)
        // }
        // for(const con of connections) {
        //     if(con !== connection && connection.username && connection.emoji && !data.includes('setName: ')) {
        //         con.write(`(${connection.username}) ${connection.emoji} sais: ${data}`.trim())
        //     }
        // }
    })
})