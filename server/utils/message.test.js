let expect = require('expect');

var {genrateMessage} = require('./message');

describe('Genrate Message', ()=>{
    it("should genrate correct message object", ()=> {
        let from = "Manish",
            text = "Some random message",
            message = genrateMessage(from,text);


        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});

    });



});