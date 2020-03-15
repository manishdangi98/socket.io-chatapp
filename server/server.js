const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {genrateMessage} = require('./utils/message');

// console.log(__dirname + "/../public");
// console.log(path.join(__dirname, '/../public'));

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000

let app= express();
let server = http.createServer(app);
let io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket)=> {
    console.log('New user just connected');


    socket.emit('newMessage', genrateMessage(
        'Admin', 'Welcome to the chat app'
    ));

    socket.broadcast.emit('newMessage', genrateMessage(
        'Admin', 'New user Joined'
    ));

    
    socket.on('createMessage', (message, callback) => {
        console.log("createMessage", message);
        
        io.emit('newMessage',genrateMessage(message.from,message.text))
        callback('This is the server:');

        // socket.broadcast.emit('newMessage',{
        //         from: message.from,
        //         text: message.text,
        //         createdAT: new Date().getTime(),
        //     })
    })

    socket.on('disconnect', () =>{
        console.log('User was disconnected');
    });
});

server.listen(port,()=>{
    console.log(`server is up on port ${port}`);
})