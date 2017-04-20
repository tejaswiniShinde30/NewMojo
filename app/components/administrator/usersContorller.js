(function () {

    'use strict';

    angular.module('omniseq')
        .controller('usersController', usersController);

    usersController.$inject = ['$scope', '$state', 'UserResource'];

    function usersController($scope, $state, UserResource) {

        var usersCtrl = this;
        usersCtrl.displayed = [];

        usersCtrl.callServer = function callServer(tableState) {
            usersCtrl.stState = tableState;
            usersCtrl.isLoading = true;
            usersCtrl.noRecords = false;
            var pagination = tableState.pagination;
            var start = pagination.start || 0;
            var number = pagination.number || 10;
            usersCtrl.stState.sort.predicate = "id";
            
            UserResource.userList.getUsers({
                start: start,
                number: number,
                tableState: tableState
            }, function success(response, headers) {

                usersCtrl.displayed = response[0].data;
                if (usersCtrl.displayed.length) {
                    tableState.pagination.numberOfPages = response[0].numberOfPages;
                    usersCtrl.isLoading = false;
                    usersCtrl.noRecords = false;
                } else {
                    debugger
                    usersCtrl.noRecords = true;
                    usersCtrl.isLoading = false;
                }

            }, function error(response) {

            })

        }

        usersCtrl.adminAction = function (id) {

            UserResource.adminAction.updateAction({
                id: id
            }, function success(response) {
                usersCtrl.callServer(usersCtrl.stState);

            }, function error(response) {
                debugger
            })

        }


    }

}());
