//require testing modules
const mocha = require('mocha');

const expect = require('chai').expect 
//require the module that we are putting to the test 

//prove all the things 
describe('My comprehension of the JS basics is solid', () => {
 // use it here to prove statements that support the "describe"
    it('and this proves my awesomeness with JS', () => {
        expect('Started with a string now we are here').to.be.a('string');
        expect({}).to.be.an('object');
        expect(null).to.be.a('null');
        expect(undefined).to.be.an('undefined');
        expect([]).to.be.an('array').that.is.empty;
        expect([1,2,3,4,5]).to.be.an('array').that.includes(5);
        expect('This isnt an array').to.not.be.an('array')
        expect({model:'Toyota'}).to.have.a.property('model');
        expect({make:'tesla', model: 'cybertruck' }).to.include({make: 'tesla', model: 'cybertruck'});

    })
})
       
