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

    socket.emit('newMessage',{
        from: "Guna",
        text: "Hackathon kab karwana hai"
    })

    socket.on('createMessage', (message) => {
        console.log("createMessage", message);
    })

    socket.on('disconnect', () =>{
        console.log('User was disconnected');
    });
});

server.listen(port,()=>{
    console.log(`server is up on port ${port}`);
})