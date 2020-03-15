let expect = require('expect');

var {genrateMessage, genrateLocationMessage} = require('./message');

describe('Genrate Message', ()=>{
    it("should genrate correct message object", ()=> {
        let from = "Manish",
            text = "Some random message",
            message = genrateMessage(from,text);


        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});

    });

});


describe('Generate Location Message',()=>{
    it('should genrate correct location object', () =>{
        let from = 'Anmol',
            lat = 22.973423,
            lng = 78.656894,
            url = `https://www.google.com/maps?q=${lat},${lng}`,
            message= genrateLocationMessage(from,lat,lng);
        
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});
    });
});
