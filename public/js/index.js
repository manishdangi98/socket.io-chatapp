let socket = io();
    socket.on('connect',() =>{
        console.log('Connected to the server')

        socket.emit('createMessage',{
            from: "WDJ",
            text: "whats going on"
        })
    })
    
    socket.on('disconnect',() =>{
        console.log('Disconnected from server');
    });

    socket.on('newMessage', function(message){
        console.log('newMessage', message);
    });