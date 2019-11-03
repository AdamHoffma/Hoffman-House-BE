const express = require('express')
const server = express()
const cors = require('cors')
const helmet = require('helmet')
const ownersRouter = require('../auth/ownersRouter.js')
const showsRouter = require("../routes/shows/showsRouter.js")
const merchandiseRouter = require('../routes/merchandise/merchandiseRouter')

server.use(helmet())
server.use(express.json())
server.use(cors())
server.use("/api/login", ownersRouter)
server.use("/api/shows", showsRouter)
server.use("/api/merchandise", merchandiseRouter)


server.get('/', (req, res) => {
    res.send('api running')
})

module.exports = server