(function () {

    'use strict';

    angular.module('omniseq')
        .controller('userInitiativesController', userInitiativesController);

    userInitiativesController.$inject = ['$scope', '$state', 'UserInitiativesResource'];

    function userInitiativesController($scope, $state, UserInitiativesResource) {

        var userInitiativesCtrl = this;
        userInitiativesCtrl.displayed = [];

        userInitiativesCtrl.callServer = function (tableState) {
            userInitiativesCtrl.stState = tableState;
            userInitiativesCtrl.isLoading = true;
            userInitiativesCtrl.noRecords = false;
            var pagination = tableState.pagination;
            var start = pagination.start || 0;
            var number = pagination.number || 10;
            userInitiativesCtrl.stState.sort.predicate = "id";


            UserInitiativesResource.getPage(start, number, tableState).then(function (result) {
                userInitiativesCtrl.displayed = result.data;
                if (userInitiativesCtrl.displayed.length) {
                    tableState.pagination.numberOfPages = result.numberOfPages;
                    userInitiativesCtrl.isLoading = false;
                } else {
                    userInitiativesCtrl.noRecords = true;
                    userInitiativesCtrl.isLoading = false;
                }
            });
        }

        userInitiativesCtrl.followInitiative = function (id) {

            UserInitiativesResource.followInitiative(id).then(function (result) {});

        }

    }

}());
