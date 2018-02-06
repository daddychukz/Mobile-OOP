
 class Mobile {
    constructor (number, IMEI, simslot, RAM){
        this.number = number;
        this.IMEI = IMEI;
        this.simslot = simslot;
        this.RAM = RAM;
    }

    // make a call method
    dial(phoneNumber){
        if (typeof phoneNumber !== "string"){
        return "Calling" + ' ' + 0 + phoneNumber;
    }else {
        return "invalid input";
    }
    }

    // starts the phone method
    static start(){
        return "Welcome...";
    }

    // receive call method
    receive(phoneNumber){
        if (typeof phoneNumber !== "string"){
        return phoneNumber + " Call Received";
    }else {
        return "invalid input";
    }
    }

    // send sms method
    sendMessage(message, number){
        if (typeof number !== "string"){
        return "Message Sent To: " + number;
        }else {
            return "invalid input";
        }
    }

    // save contact method
    saveContact(name, number){
        if (typeof phoneNumber !== "string"){
        return "The contact: " + name + " " + number + " Has been saved";
        }else{
            return "invalid input";
        }
    }
}

// Inherited Mobile class
class Nokia extends Mobile{
    constructor(number, IMEI, simslot, RAM, color, brand){
        super(number, IMEI, simslot, RAM);
        this.color = color;
        this.brand = brand;
    }
        model(){
            return "N-Series";
        }

        cameraPixel(){
            return "13px";
        } 

        phoneColor(){
            return this.color;
        }

        phoneBrand(){
            return this.brand;
        }
    } 

    export = {
        Mobile, Nokia
    }            