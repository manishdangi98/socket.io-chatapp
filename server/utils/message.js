let genrateMessage = (from,text) =>{
    return {
        from, 
        text,
        createdAt: new Date().getTime()
    };
};

module.exports = {genrateMessage};