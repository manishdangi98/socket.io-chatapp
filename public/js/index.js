let socket = io();
    socket.on('connect',() =>{
        console.log('Connected to the server')

        
    })
    
    socket.on('disconnect',() =>{
        console.log('Disconnected from server');
    });

    socket.on('newMessage', function(message){
        console.log('newMessage', message);
    });