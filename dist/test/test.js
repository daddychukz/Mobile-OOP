'use strict';

var _chai = require('chai');

var _app = require('../app');

describe("OOP Mobile", function () {
    describe("Failing Operations", function () {
        it("should return invalid input if phone number is a string", function () {
            var nokia = new _app.Nokia(8088017115, 35842906450063980, 2, "2GB", "Black");
            _chai.assert.equal(nokia.dial('08088017115'), "invalid input");
        });
    });

    describe("Dials number", function () {
        it("should call the number", function () {
            var nokia = new _app.Nokia(8088017115, 35842906450063980, 2, "2GB", "Black");
            _chai.assert.equal(nokia.dial(8088017115), "Calling" + ' ' + 0 + 8088017115);
        });
    });

    describe("Put on the phone", function () {
        it("Show a welcome message", function () {
            _chai.assert.equal(_app.Mobile.start(), "Welcome...");
        });
    });

    describe("Receive a call", function () {
        it("Should receive a call", function () {
            var nokia = new _app.Nokia(8088017115, 35842906450063980, 2, "2GB", "Black");
            _chai.assert.equal(nokia.receive(8088017115), 8088017115 + " Call Received");
        });
    });

    describe("Send a Message", function () {
        it("Should send a Message", function () {
            var nokia = new _app.Nokia(8088017115, 35842906450063980, 2, "2GB", "Black");
            _chai.assert.equal(nokia.sendMessage("Hello", 8088017115), "Message Sent To: " + 8088017115);
        });
    });

    describe("save contact", function () {
        it("Should save a contact", function () {
            var nokia = new _app.Nokia(8088017115, 35842906450063980, 2, "2GB", "Black");
            _chai.assert.equal(nokia.saveContact("John", 8088017115), "The contact: John 8088017115 Has been saved");
        });
    });

    describe("show phone model", function () {
        it("Show phone model", function () {
            var nokia = new _app.Nokia(8088017115, 35842906450063980, 2, "2GB", "Black");
            _chai.assert.equal(nokia.model(), "N-Series");
        });
    });

    describe("show camera pixels", function () {
        it("should show camera pixels", function () {
            var nokia = new _app.Nokia(8088017115, 35842906450063980, 2, "2GB", "Black");
            _chai.assert.equal(nokia.cameraPixel(), "13px");
        });
    });

    describe("returns the color of the phone", function () {
        it("should show camera pixels", function () {
            var nokia = new _app.Nokia(8088017115, 35842906450063980, 2, "2GB", "Black");
            _chai.assert.equal(nokia.phoneColor(), "Black");
        });
    });

    describe("returns the brand of the phone", function () {
        it("should show camera pixels", function () {
            var nokia = new _app.Nokia(8088017115, 35842906450063980, 2, "2GB", "Black", "Nokia");
            _chai.assert.equal(nokia.phoneBrand(), "Nokia");
        });
    });
});