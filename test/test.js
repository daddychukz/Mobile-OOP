import { assert } from 'chai';
import { Mobile } from '../src/mobile';
import { Nokia } from '../src/mobile';

describe("OOP Mobile", ()=>{
    describe("Failing Operations", ()=>{
        it("should return invalid input if phone number is a string", function(){
            let nokia = new Nokia(08088017115, 35842906450063980, 2, "2GB", "Black");
            assert.equal(nokia.dial('08088017115'), "invalid input");
        });
    })

    describe("Dials number", ()=>{
        it("should call the number", function(){
            let nokia = new Nokia(08088017115, 35842906450063980, 2, "2GB", "Black");
            assert.equal(nokia.dial(08088017115), "Calling" + ' ' + 0 + 8088017115);
        });
    })

    