"use strict";

function Service($location){            //allows us to access the routing information
    const contact = this;
    contact.items =
        {
            name: "Rufus",
            email: "naked.mole.rat@sidekick.com",
            bio: "Hiyahh! I like to help my best friend, Ron Stoppable, fight crime and save the world. "
        };

    contact.getInfo = () => {
        return contact.items;
    }
    contact.saveInfo = (edit) => {
        console.log(edit);
        contact.items = edit;
    }
    contact.loadEdit = () => {
        $location.path("/editprofile");            //pulls from the route
    }

}





angular
    .module("App")
    .service("Service", Service);