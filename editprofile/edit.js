"use strict";
const edit = {
    templateUrl:"editprofile/edit.html",
    controller: [ "Service", function(Service){
        const vm = this;
        vm.edit = Service.getInfo();
        vm.saveProfile = (edit) => {
            console.log(edit);
            Service.angular.copy(saveInfo(edit));               //this edits a duplicate so that we do not have it updated if we hit the back button
        };
    }]
}


angular
    .module("App")
    .component("edit", edit)