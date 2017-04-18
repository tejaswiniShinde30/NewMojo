(function() {

    'use strict';

    angular.module('omniseq')
        .controller('PreviewController', PreviewControllerFunction);

    PreviewControllerFunction.$inject = ['$scope', '$state','$stateParams'];

    function PreviewControllerFunction($scope, $state,$stateParams) {
        var self = this;
        self.title = $stateParams.title;
        self.desc = $stateParams.desc;
        self.cancel = function(){
            $state.go("App.MyInitiative.Dashboard");
        };
        self.share = function(){
            $state.go("tab3");
        };
         self.gotoPreviousTab = function(){
            $state.go("App.MyInitiative.AddNewInitiative.Advanced",{'title':$stateParams.title ,'desc':$stateParams.desc});
        }
    }
}());