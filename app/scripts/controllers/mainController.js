
 (function() {

    'use strict';

    angular.module('omniseq')
        .controller('MainController', MainControllerFunction);

    MainControllerFunction.$inject = ['$scope', '$state'];

    function MainControllerFunction($scope, $state) {
        var self = this;
        self.logout = function(){
            $state.go("Login");
        }
        
        
        
        
    }
}());
