"use strict";
const edit = {
    templateUrl:"editprofile/edit.html",
    controller: [ "Service", function(Service){
        const vm = this;
        vm.edit = Service.getInfo();
        vm.saveProfile = (edit) => {
            console.log(edit);
            Service.saveInfo(edit);
        };
    }]
}


angular
    .module("App")
    .component("edit", edit)