const moment = require('moment');

let genrateMessage = (from,text) =>{
    return {
        from, 
        text,
        createdAt:  moment().valueOf()
    };
};

let genrateLocationMessage = (from,lat,lng)=>{
    return{
        from,
        url: `https://www.google.com/maps?q=${lat},${lng}`,
        createdAt: moment().valueOf()
    }
}

module.exports = {genrateMessage, genrateLocationMessage}