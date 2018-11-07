"use strict";
angular
    .module("App")
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/profile",{
                template: "<profile></profile>"
            })
            .when("/editprofile",{
                template: "<edit></edit>"
            })
            .otherwise({ redirectTo: "/profile" });
    }]);