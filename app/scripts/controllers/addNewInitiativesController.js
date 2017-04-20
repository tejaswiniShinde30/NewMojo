
 (function() {

    'use strict';

    angular.module('omniseq')
        .controller('AddNewInitiativesController', AddNewInitiativesController);

    AddNewInitiativesController.$inject = ['$scope', '$state','MyInititivesResource'];

    function AddNewInitiativesController($scope, $state,MyInititivesResource) {
        var self = this;   
        
    }
}());
