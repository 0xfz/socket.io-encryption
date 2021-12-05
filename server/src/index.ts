import express from 'express'
import {Server, Socket} from 'socket.io'
import { createServer } from 'http'
import crypto from 'crypto';

crypto

const app = express()
const server = createServer(app)
const io = new Server(server, {
    cors:{
        origin: "*"
    }
})
              
io.on("connection", (socket: Socket) => {
    socket.on("exchange_public_key", (data) => {

        socket.broadcast.to(data.to.room).emit("get_pub_key_"+data.to.user, data.pub_key)
    })
})