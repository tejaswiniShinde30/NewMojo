(function () {

    'use strict';

    angular.module('omniseq')
        .controller('initiativesController', initiativesController);

    initiativesController.$inject = ['$scope', '$state', 'AllInititivesResource'];

    function initiativesController($scope, $state, AllInititivesResource) {

        var initiativesCtrl = this;
        initiativesCtrl.displayed = [];

        initiativesCtrl.callServer = function (tableState) {
            initiativesCtrl.stState = tableState;
            initiativesCtrl.isLoading = true;
            initiativesCtrl.noRecords = false;
            var pagination = tableState.pagination;
            var start = pagination.start || 0;
            var number = pagination.number || 10;
            initiativesCtrl.stState.sort.predicate = "id";


            AllInititivesResource.getPage(start, number, tableState).then(function (result) {
                initiativesCtrl.displayed = result.data;
                if (initiativesCtrl.displayed.length) {
                    tableState.pagination.numberOfPages = result.numberOfPages;
                    initiativesCtrl.isLoading = false;
                } else {
                    initiativesCtrl.noRecords = true;
                    initiativesCtrl.isLoading = false;
                }
            });
        }

        initiativesCtrl.deleteInitiative = function (id) {
            AllInititivesResource.deleteInitiative(id).then(function (result) {
                
                 alert("record deleted successfully");
                initiativesCtrl.callServer(initiativesCtrl.stState);

            });

        }

    }
}());
