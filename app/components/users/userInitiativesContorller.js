(function () {

    'use strict';

    angular.module('omniseq')
        .controller('userInitiativesController', userInitiativesController);

    userInitiativesController.$inject = ['$scope', '$state', 'UserResource', 'API', 'CONFIG', '$http'];

    function userInitiativesController($scope, $state, UserResource, API, CONFIG, $http) {

        var userInitiativesCtrl = this;
        userInitiativesCtrl.displayed = [];
        userInitiativesCtrl.callServer = callServer;


        function callServer(tableState) {

            debugger
            userInitiativesCtrl.stState = tableState;
            userInitiativesCtrl.isLoading = true;
            userInitiativesCtrl.noRecords = false;
            var pagination = tableState.pagination;
            var start = pagination.start || 0;
            var number = pagination.number || 10;

            UserResource.getPage(start, number, tableState).then(function (result) {
                userInitiativesCtrl.displayed = result.data;
                debugger
                if (userInitiativesCtrl.displayed.length) {
                    debugger
                    tableState.pagination.numberOfPages = result.numberOfPages;
                    userInitiativesCtrl.isLoading = false;
                } else {
                    debugger
                    userInitiativesCtrl.noRecords = true;
                    userInitiativesCtrl.isLoading = false;
                }
            });
        }

    }

}());
