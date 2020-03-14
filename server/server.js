const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

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


    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app',
        createdAT : new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user Joined',
        createdAT : new Date().getTime()
    });

    
    socket.on('createMessage', (message) => {
        console.log("createMessage", message);
        
        // io.emit('newMessage',{
        //     from: message.from,
        //     text: message.text,
        //     createdAT: new Date().getTime(),
        // })
        socket.broadcast.emit('newMessage',{
                from: message.from,
                text: message.text,
                createdAT: new Date().getTime(),
            })
    })

    socket.on('disconnect', () =>{
        console.log('User was disconnected');
    });
});

server.listen(port,()=>{
    console.log(`server is up on port ${port}`);
})