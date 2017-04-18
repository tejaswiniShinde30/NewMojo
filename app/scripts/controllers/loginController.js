
 (function() {

    'use strict';

    angular.module('omniseq')
        .controller('LoginController', LoginControllerFunction);

    LoginControllerFunction.$inject = ['$scope', '$state','authenticationFactory','libFactory'];

    function LoginControllerFunction($scope,$state,authenticationFactory,libFactory) {
                debugger
                var self = this;
                self.login = login;
                function login() {
                    debugger
                    self.isSigningIn = true;
                    self.loginFailed = false;
                    libFactory.progressBar.start();
                    authenticationFactory.login(self.credentials.username, self.credentials.password).then(function success() {
                        self.isSigningIn = false;
                        libFactory.progressBar.complete();
                       /* $state.go("App.dashboard");*/
                        $state.go("App.UsersInitiative");
                    }, function error() {
                        debugger;
                        libFactory.progressBar.complete();
                        self.isSigningIn = false;
                        self.loginFailed = true;
                    });
                }
        }
}());
