"use strict";
const profile = {
    templateUrl: "userprofile/profile.html",
    controller: ["Service", function(Service) {
        const vm = this;
        vm.profile = Service.getInfo();
        console.log(vm.profile)
    }]
};





angular
    .module("App")
    .component("profile", profile);