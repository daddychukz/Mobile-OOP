"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mobile = function () {
    function Mobile(number, IMEI, simslot, RAM) {
        _classCallCheck(this, Mobile);

        this.number = number;
        this.IMEI = IMEI;
        this.simslot = simslot;
        this.RAM = RAM;
    }

    // make a call method


    _createClass(Mobile, [{
        key: "dial",
        value: function dial(phoneNumber) {
            if (typeof phoneNumber !== "string") {
                return "Calling" + ' ' + 0 + phoneNumber;
            } else {
                return "invalid input";
            }
        }

        // starts the phone method

    }, {
        key: "receive",


        // receive call method
        value: function receive(phoneNumber) {
            if (typeof phoneNumber !== "string") {
                return phoneNumber + " Call Received";
            } else {
                return "invalid input";
            }
        }

        // send sms method

    }, {
        key: "sendMessage",
        value: function sendMessage(message, number) {
            if (typeof number !== "string") {
                return "Message Sent To: " + number;
            } else {
                return "invalid input";
            }
        }

        // save contact method

    }, {
        key: "saveContact",
        value: function saveContact(name, number) {
            if (typeof phoneNumber !== "string") {
                return "The contact: " + name + " " + number + " Has been saved";
            } else {
                return "invalid input";
            }
        }
    }], [{
        key: "start",
        value: function start() {
            return "Welcome...";
        }
    }]);

    return Mobile;
}();

// Inherited Mobile class


var Nokia = function (_Mobile) {
    _inherits(Nokia, _Mobile);

    function Nokia(number, IMEI, simslot, RAM, color, brand) {
        _classCallCheck(this, Nokia);

        var _this = _possibleConstructorReturn(this, (Nokia.__proto__ || Object.getPrototypeOf(Nokia)).call(this, number, IMEI, simslot, RAM));

        _this.color = color;
        _this.brand = brand;
        return _this;
    }

    _createClass(Nokia, [{
        key: "model",
        value: function model() {
            return "N-Series";
        }
    }, {
        key: "cameraPixel",
        value: function cameraPixel() {
            return "13px";
        }
    }, {
        key: "phoneColor",
        value: function phoneColor() {
            return this.color;
        }
    }, {
        key: "phoneBrand",
        value: function phoneBrand() {
            return this.brand;
        }
    }]);

    return Nokia;
}(Mobile);

module.exports = {
    Mobile: Mobile, Nokia: Nokia
};