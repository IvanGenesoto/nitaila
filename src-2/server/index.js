const $ = require
const express = $('express')
const app = express()
const server = $('http').Server(app)
const path = $('path')
const port = process.env.PORT || 3000
const socket = $('socket.io')
const io = socket(server)
const redis = null
const _ = './raw/'

const district = $(_)(redis, io, $, _)

$('./buffered')(district)

const {players} = district

io.on('connection', socket => $('./connect')(socket, players))

app.use(express.static(path.join(__dirname, 'public')))
server.listen(port, () => console.log('Listening on port ' + port))