"use strict";
const edit = {
    templateUrl:"editprofile/edit.html",                                      //grab html template from the edit.html file
    controller: [ "Service", function(Service){                               // connect the controller with our service data
        const vm = this;                                                      // "this" has a new name
        vm.profile = angular.copy(Service.getInfo());                         //calling on service for the getInfo which returns our contact object
        vm.saveProfile = (updatedItems) => {                                  //defining a method with a parameter
            console.log(updatedItems);                                         
            Service.setInfo(updatedItems);                                    //calls the set method which sets our parameter equal to the contact object and redirects us to the home page
        };
    }]
}


angular
    .module("App")
    .component("edit", edit);

