"use strict";

function Service(){
    const contact = this;
    contact.items =
        {
            name: "Karissa",
            email: "kpdevelopment313@gmail.com",
            bio: "Hello"
        };

    contact.getInfo = () => {
        return contact.items;
    }
    contact.saveInfo = (edit) => {
        console.log(edit);
        contact.items = edit;
    }

}





angular
    .module("App")
    .service("Service", Service);