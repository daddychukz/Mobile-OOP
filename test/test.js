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

    describe("Put on the phone", ()=>{
        it("Show a welcome message", function(){
            assert.equal(Mobile.start(), "Welcome...");
        });
    })

    describe("Receive a call", ()=>{
        it("Should receive a call", function(){
            let nokia = new Nokia(08088017115, 35842906450063980, 2, "2GB", "Black");
            assert.equal(nokia.receive(08088017115), 08088017115 + " Call Received");
        });
    })

    describe("Send a Message", ()=>{
        it("Should send a Message", function(){
            let nokia = new Nokia(08088017115, 35842906450063980, 2, "2GB", "Black");
            assert.equal(nokia.sendMessage("Hello", 08088017115), "Message Sent To: " + 08088017115);
        });
    })

    describe("save contact", ()=>{
        it("Should save a contact", function(){
            let nokia = new Nokia(08088017115, 35842906450063980, 2, "2GB", "Black");
            assert.equal(nokia.saveContact("John", 08088017115), "The contact: John 8088017115 Has been saved");
        });
    })

    describe("show phone model", ()=>{
        it("Show phone model", function(){
            let nokia = new Nokia(08088017115, 35842906450063980, 2, "2GB", "Black");
            assert.equal(nokia.model(), "N-Series");
        });
    })

    describe("show camera pixels", ()=>{
        it("should show camera pixels", function(){
            let nokia = new Nokia(08088017115, 35842906450063980, 2, "2GB", "Black");
            assert.equal(nokia.cameraPixel(), "13px");
        });
    })