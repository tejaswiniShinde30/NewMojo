(function () {

    'use strict';

    angular.module('omniseq')
        .controller('myInitiativesController', myInitiativesController);

    myInitiativesController.$inject = ['$scope', '$state','UserResource','API', 'CONFIG'];

    function myInitiativesController($scope, $state, UserResource, API, CONFIG) {

        var myInitiativesCtrl = this;
        myInitiativesCtrl.displayed = [];
        myInitiativesCtrl.callServer = callServer;


        function callServer(tableState) {

            debugger
            myInitiativesCtrl.stState = tableState;
            myInitiativesCtrl.isLoading = true;
            myInitiativesCtrl.noRecords = false;
            var pagination = tableState.pagination;
            var start = pagination.start || 0;
            var number = pagination.number || 10;

            UserResource.getPage(start, number, tableState).then(function (result) {
                myInitiativesCtrl.displayed = result.data;
                debugger
                if (myInitiativesCtrl.displayed.length) {
                    debugger
                    tableState.pagination.numberOfPages = result.numberOfPages;
                    myInitiativesCtrl.isLoading = false;
                } else {
                    debugger
                    myInitiativesCtrl.noRecords = true;
                    myInitiativesCtrl.isLoading = false;
                }
            });
        }

    }
}());