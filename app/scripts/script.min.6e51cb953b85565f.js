angular.module("config", []).constant("ROLES", {
    user: {
        name: "user",
        id: 1,
        showNPI: false,
        value: "ROLE_USER"
    },
    admin: {
        name: "Admin",
        id: 3,
        showNPI: false,
        value: "ROLE_ADMIN"
    }
}).constant("AUTH", {
    authUrl: "/api/login",
    tokenKey: "x-access-token",
    bearer: "Bearer",
    authEvent: {
        loginSuccess: "auth-login-success",
        loginFailed: "auth-login-failed",
        logoutSuccess: "auth-logout-success",
        logoutFailed: "auth-logout-failed",
        sessionTimeout: "auth-session-timeout",
        notAuthenticated: "auth-not-authenticated",
        notAuthorized: "auth-not-authorized",
        tokenCheckSuccess: "tokenCheckSuccess",
        loginSuccessDefaultState: "login-success-default-state",
        fetchUserDetails: "fetch-user-details",
        fetchUserDetailsFail: "fetch-user-details-fail",
        somethingWrong: "something-wrong",
        alreadyLoggedInDeafultState: "already-logged-in-deafult-state",
        userInformationUpdate: "user-information-update"
    }
}).constant("CONFIG", {
    url: {
        base: "/api",
        login: "/login",
        userInitiativesList: "/userInitiativesList"
    },
    mainDashboard: {
        defaultPageSize: 10,
        defaultOrderBy: "orderId",
        defaultReportType: "ReadyToView"
    },
    userDashboard: {
        defaultPageSize: 10,
        defaultOrderBy: "lastName"
    },
    typeahead: {
        limit: 10
    }
}).constant("NOTIFICATION", {
    messages: {
        loginSuccess: "Login Success",
        loginFailed: "Login Failed",
        logoutSuccess: "Logout Success",
        logoutFailed: "Logout Failed",
        notAuthorized: "Unauthorized Access",
        somethingWrong: "Something Went Wrong",
        notAuthenticated: "Please Log In ",
        createUserSuccess: "User Creation Successful"
    },
    state: {
        success: "success",
        fail: "fail"
    }
}).constant("API", {
    userList: {
        param: {
            facility: "facility",
            lastName: "lastName",
            type: "type",
            status: "status",
            order: "order",
            sort: "sort",
            size: "size",
            page: "page"
        },
        order: {
            asc: "asc",
            desc: "desc"
        },
        sort: {
            email: "email",
            firstName: "firstName",
            lastName: "lastName",
            status: "status",
            role: "role",
            facility: "facility"
        },
        total: {
            count: "x-total-count",
            page: "x-total-pages"
        }
    },
    orderList: {
        param: {
            order: "order",
            sort: "sort",
            size: "size",
            page: "page"
        },
        sortOrder: {
            asc: "asc",
            desc: "desc"
        },
        sort: {
            orderId: "orderId",
            patient: "patient",
            mrn: "mrn",
            facility: "facility",
            orderingProvider: "orderingProvider",
            orderDate: "orderDate",
            status: "status"
        },
        total: {
            count: "x-total-count",
            page: "x-total-pages"
        }
    },
    patientList: {
        param: {
            searchString: "searchString",
            order: "order",
            sort: "sort",
            size: "size",
            page: "page"
        },
        sortOrder: {
            asc: "asc",
            desc: "desc"
        },
        sort: {
            firstName: "firstName",
            mrn: "mrn",
            facility: "facility",
            dob: "dob"
        },
        total: {
            count: "x-total-count",
            page: "x-total-pages"
        }
    },
    dashboardOrderList: {
        param: {
            reportType: "reportType",
            order: "order",
            sort: "sort",
            size: "size",
            page: "page"
        },
        sortOrder: {
            asc: "asc",
            desc: "desc"
        },
        sort: {
            orderId: "orderId",
            reportType: "reportType",
            reportDate: "reportDate",
            patientName: "firstName",
            mrn: "mrn",
            orderingProvider: "orderingProvider",
            testName: "testName",
            orderDate: "orderDate",
            orderStatus: "orderStatus"
        },
        total: {
            count: "x-total-count",
            page: "x-total-pages"
        }
    },
    search: {
        param: {
            searchString: "orderSearchString",
            searchType: "searchType",
            size: "size",
            page: "page"
        },
        total: {
            count: "x-total-count",
            page: "x-total-pages",
            currentPage: "x-current-page"
        }
    }
}).constant("POPUP", {
    deactivate: {
        modal_header: "Confirmation",
        modal_body: "Are you sure you want to deactivate the user?",
        showOk: true,
        showDisplay: "Yes",
        showCancel: true
    },
    activate: {
        modal_header: "Confirmation",
        modal_body: "Are you sure you want to activate the user?",
        showOk: true,
        showDisplay: "Yes",
        showCancel: true
    },
    resend_activation: {
        modal_header: "Confirmation",
        modal_body: "Activation link is sent to your registered Email ID.",
        showOk: true,
        showDisplay: "Ok",
        showCancel: false
    },
    registartion_success: {
        modal_header: "Confirmation",
        modal_body: "You have registered successfully.",
        showOk: true,
        showDisplay: "Ok",
        showCancel: false
    },
    registartion_failure: {
        modal_header: "Failure",
        modal_body: "Link is not valid.",
        showOk: true,
        showDisplay: "Ok",
        showCancel: false
    },
    changePassword_success: {
        modal_header: "Confirmation",
        modal_body: "Password changed successfully.",
        showOk: true,
        showDisplay: "Ok",
        showCancel: false
    },
    failure: {
        modal_header: "Failure",
        modal_body: "Please try again later.",
        showOk: true,
        showDisplay: "Ok",
        showCancel: false
    },
    user_success: {
        modal_header: "Confirmation",
        modal_body: "User details saved successfully.",
        showOk: true,
        showDisplay: "Ok",
        showCancel: false
    }
}).constant("MESSAGES", {
    login: {
        failed: "The email address or password you entered is not valid."
    },
    validation: {
        required: "This field is required",
        minLength: "This field is too short",
        maxLength: "This field is too long",
        email: "This needs to be a valid email",
        passwordPattern: "This is not a valid Password",
        match: "New Password and Confirm New Password should be same",
        unmatch: "Old password and New Password should not be same"
    }
}).value("debug", true);

(function() {
    angular.module("common.services", [ "ngResource", "config", "ngStorage", "cgNotify", "ngProgress", "base64", "angular-md5" ]);
})();

(function() {
    var services = angular.module("common.services");
    services.factory("authenticationFactory", [ "$injector", "loginResource", "libFactory", "$rootScope", "$q", "CONFIG", "AUTH", authenticationService ]);
    function authenticationService($injector, loginResource, libFactory, $rootScope) {
        function login(username, password) {
            console.log(loginResource);
            return loginResource.save({
                username: username,
                password: password
            }, function success(response, headers) {
                debugger;
            }, function error(response) {
                debugger;
            }).$promise;
        }
        function logout() {
            try {
                authTokenFactory.reset();
                $rootScope.$broadcast(AUTH.authEvent.logoutSuccess);
            } catch (error) {
                $rootScope.$broadcast(AUTH.authEvent.logoutFailed);
            }
        }
        function isLoggedIn() {
            try {
                var token = authTokenFactory.getToken();
                var user = authTokenFactory.getUserDetails();
                if (token && isTokenValid(token) && user && !libFactory._.isEmpty(user)) {
                    $rootScope.$broadcast(AUTH.authEvent.userInformationUpdate, user);
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                return false;
            }
        }
        function getUserDetails() {
            return authTokenFactory.getUserDetails();
        }
        function getUserAuthorizedRole() {
            try {
                var user = authTokenFactory.getUserDetails();
                return user.role;
            } catch (error) {
                return undefined;
            }
        }
        function isAuthorized(authorizedRoles) {
            var isAuthorized = false;
            try {
                var userRole = getUserAuthorizedRole();
                if (userRole) {
                    isAuthorized = authorizedRoles.some(function(role) {
                        return role.toLowerCase() == userRole.toLowerCase();
                    });
                } else {
                    $rootScope.$broadcast(AUTH.authEvent.fetchUserDetailsFail);
                }
                return isAuthorized;
            } catch (error) {
                $rootScope.$broadcast(AUTH.authEvent.somethingWrong);
                return false;
            }
        }
        function hasToken() {
            try {
                var token = authTokenFactory.getToken();
                if (token) {
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                return false;
            }
        }
        function extractToken(token) {
            if (token.includes(AUTH.bearer)) {
                var splitArray = token.split(" ");
                token = splitArray[1];
            }
            return token;
        }
        function manageRefreshToken(token) {
            var currentToken = authTokenFactory.getToken();
            token = extractToken(token);
            if (currentToken) {
                if (currentToken != token) {
                    authTokenFactory.setToken(token);
                }
            }
        }
        function blackListToken(token) {
            debugger;
            token = extractToken(token);
            if (!$rootScope.blackListToken) {
                $rootScope.blackListToken = [];
            }
            $rootScope.blackListToken.push(token);
        }
        function isTokenValid(token) {
            debugger;
            token = extractToken(token);
            var isTokenValid = true;
            if ($rootScope.blackListToken) {
                var index = libFactory._.indexOf($rootScope.blackListToken, token);
                if (index > -1) {
                    isTokenValid = false;
                }
            }
            return isTokenValid;
        }
        function isExternalUrl(url) {
            var isExternalUrl = false;
            if (url.includes(CONFIG.url.base)) {
                isExternalUrl = true;
            }
            return isExternalUrl;
        }
        function resetLocalStorage() {
            try {
                authTokenFactory.reset();
            } catch (error) {}
        }
        return {
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn,
            getUserDetails: getUserDetails,
            getUserAuthorizedRole: getUserAuthorizedRole,
            isAuthorized: isAuthorized,
            hasToken: hasToken,
            manageRefreshToken: manageRefreshToken,
            blackListToken: blackListToken,
            isTokenValid: isTokenValid,
            isExternalUrl: isExternalUrl,
            resetLocalStorage: resetLocalStorage
        };
    }
})();

(function() {
    var services = angular.module("common.services");
    services.factory("libFactory", [ "$window", "notify", "ngProgressFactory", function($window, notify, ngProgressFactory) {
        var progressBar = ngProgressFactory.createInstance();
        progressBar.setHeight("3px");
        progressBar.setColor("#8b1b3f");
        function notification(message, type) {
            var cssClass = "";
            if (type == "success") {
                cssClass = "alert-success";
            } else if (type == "fail") {
                cssClass = "alert-danger";
            }
            notify({
                message: message,
                classes: cssClass,
                duration: 2e3
            });
        }
        return {
            _: $window._,
            notification: notification,
            progressBar: progressBar
        };
    } ]);
})();

(function() {
    angular.module("common.services").factory("loginResource", [ "$resource", "CONFIG", loginResourceFunc ]);
    function loginResourceFunc($resource, CONFIG) {
        return $resource(CONFIG.url.base + CONFIG.url.login, {}, {
            save: {
                method: "POST",
                isArray: true
            }
        });
    }
})();

(function() {
    angular.module("common.services").factory("UserResource", UserResource);
    UserResource.$inject = [ "$q", "$filter", "$timeout" ];
    function UserResource($q, $filter, $timeout) {
        var randomsItems = [];
        function createRandomItem(id) {
            var title = [ "Batman", "Superman", "Robin", "Thor", "Hulk", "Niki Larson", "Stark", "Bob Leponge" ];
            var desc = [ "Batman", "Superman", "Robin", "Thor", "Hulk", "Niki Larson", "Stark", "Bob Leponge" ];
            var img = [ "Batman", "Superman", "Robin", "Thor", "Hulk", "Niki Larson", "Stark", "Bob Leponge" ];
            return {
                id: id,
                title: title[Math.floor(Math.random() * 7)],
                desc: desc[Math.floor(Math.random() * 7)],
                img: img[Math.floor(Math.random() * 7)],
                noOfUsersFollowing: Math.floor(Math.random() * 1e4)
            };
        }
        for (var i = 0; i < 1e3; i++) {
            randomsItems.push(createRandomItem(i));
        }
        debugger;
        function getPage(start, number, params) {
            var deferred = $q.defer();
            var filtered = params.search.predicateObject ? $filter("filter")(randomsItems, params.search.predicateObject) : randomsItems;
            if (params.sort.predicate) {
                filtered = $filter("orderBy")(filtered, params.sort.predicate, params.sort.reverse);
            }
            var result = filtered.slice(start, start + number);
            $timeout(function() {
                deferred.resolve({
                    data: result,
                    numberOfPages: Math.ceil(filtered.length / number)
                });
            }, 1500);
            return deferred.promise;
        }
        return {
            getPage: getPage
        };
    }
})();

(function() {
    "use strict";
    var commonServices = angular.module("common.services");
    var directiveId = "ngMatch";
    commonServices.directive(directiveId, [ "$parse", function($parse) {
        var directive = {
            link: link,
            restrict: "A",
            require: "?ngModel",
            scope: {
                flag: "=flag",
                matchingString: "=ngMatch"
            }
        };
        return directive;
        function link(scope, elem, attrs, ctrl) {
            if (!ctrl) return;
            if (!attrs[directiveId]) return;
            var firstPassword = $parse(attrs[directiveId]);
            var validator = function(value) {
                if (scope.flag) {
                    var v = value === scope.matchingString;
                    ctrl.$setValidity("match", v);
                } else {
                    var v1 = value !== scope.matchingString;
                    ctrl.$setValidity("unmatch", v1);
                }
                return value;
            };
            ctrl.$parsers.unshift(validator);
            ctrl.$formatters.push(validator);
            attrs.$observe(directiveId, function() {
                validator(ctrl.$viewValue);
            });
        }
    } ]);
})();

(function() {
    var omniseq = angular.module("omniseq", [ "ngAnimate", "ui.bootstrap", "ui.router", "ngMessages", "ngResource", "common.services", "config", "smart-table", "ngSanitize", "ui.mask", "allMock" ]);
    omniseq.config(function($stateProvider, $urlRouterProvider, $httpProvider, $compileProvider, $sceDelegateProvider, $qProvider) {
        $urlRouterProvider.otherwise("/login");
        $stateProvider.state("Login", {
            url: "/login",
            templateUrl: "views/login.html"
        }).state("App", {
            url: "/app",
            templateUrl: "views/master.html"
        }).state("App.UsersInitiative", {
            url: "/userInitiative",
            templateUrl: "/components/users/userInitiatives.html"
        }).state("App.MyInitiative", {
            url: "/myInitiative",
            template: "<div ui-view></div>"
        }).state("App.MyInitiative.AddNewInitiative", {
            url: "/addNewInitiative",
            templateUrl: "/components/users/addNewInitiative.html"
        }).state("App.MyInitiative.AddNewInitiative.Basic", {
            url: "/basic",
            templateUrl: "/components/users/basic.html"
        }).state("App.MyInitiative.AddNewInitiative.Advanced", {
            url: "/advanced",
            templateUrl: "/components/users/advanced.html"
        }).state("App.MyInitiative.AddNewInitiative.Preview", {
            url: "/preview",
            templateUrl: "/components/users/preview.html"
        }).state("App.MyInitiative.Dashboard", {
            url: "/dashboard",
            templateUrl: "/components/users/myInitiatives.html"
        });
        $qProvider.errorOnUnhandledRejections(false);
    });
    omniseq.run(function($rootScope) {
        $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {});
    });
})();

(function() {
    "use strict";
    angular.module("omniseq").controller("DashboardController", DashboardControllerFunction);
    DashboardControllerFunction.$inject = [ "$scope", "$state", "authenticationFactory", "libFactory" ];
    function DashboardControllerFunction($scope, $state, authenticationFactory, libFactory) {
        debugger;
        var self = this;
        function login() {}
    }
})();

(function() {
    "use strict";
    angular.module("omniseq").controller("headerController", HerderControllerFunction);
    HerderControllerFunction.$inject = [ "$scope", "$state", "authenticationFactory", "libFactory" ];
    function HerderControllerFunction($scope, $state, authenticationFactory, libFactory) {
        debugger;
        var self = this;
        $(function() {
            $(".dropdown-toggle").dropdown();
            $(".dropdown input, .dropdown-menu label").click(function(e) {
                e.stopPropagation();
            });
        });
        function login() {}
    }
})();

(function() {
    "use strict";
    angular.module("omniseq").controller("LoginController", LoginControllerFunction);
    LoginControllerFunction.$inject = [ "$scope", "$state", "authenticationFactory", "libFactory" ];
    function LoginControllerFunction($scope, $state, authenticationFactory, libFactory) {
        debugger;
        var self = this;
        self.login = login;
        function login() {
            debugger;
            self.isSigningIn = true;
            self.loginFailed = false;
            libFactory.progressBar.start();
            authenticationFactory.login(self.credentials.username, self.credentials.password).then(function success() {
                self.isSigningIn = false;
                libFactory.progressBar.complete();
                $state.go("App");
            }, function error() {
                debugger;
                libFactory.progressBar.complete();
                self.isSigningIn = false;
                self.loginFailed = true;
            });
        }
    }
})();

(function() {
    "use strict";
    angular.module("omniseq").controller("MainController", MainControllerFunction);
    MainControllerFunction.$inject = [ "$scope", "$state" ];
    function MainControllerFunction($scope, $state) {}
})();

(function() {
    angular.module("common.services").directive("errorMsg", ErrorMsgDirective);
    function ErrorMsgDirective() {
        return {
            restrict: "AE",
            templateUrl: "common/error/ErrorMsgView.html",
            controller: function() {},
            scope: {
                formElement: "<",
                customMsg: "<"
            }
        };
    }
})();

(function() {
    var allMock = angular.module("allMock", [ "ngMockE2E", "ngResource" ]);
    allMock.constant("API", {
        login: "/api/login",
        userDetails: "/api/userDetails"
    });
    allMock.run(function($httpBackend, $resource, API) {
        var token = {
            jwt_token: "thisiisdummytoken"
        };
        console.log("http backend called");
        $httpBackend.whenPOST(API.login).respond(function(method, url, data) {
            debugger;
            var param = JSON.parse(data);
            var token = {
                Authorization: "Bearer dummytoken123"
            };
            if (param.username == "jon@melinator.com" && param.password == "jon@123") {
                return [ 200, "", token ];
            } else {
                return [ 401, "", token ];
            }
        });
        var user = {
            id: 123,
            role: "ordering provider",
            firstName: "abc",
            lastName: "xyz",
            npi: "",
            facility: [ {
                id: 1,
                name: "facility1",
                shortName: "f1"
            }, {
                id: 2,
                name: "facility2",
                shortName: "f2"
            } ],
            email: "demo@gmail.com",
            address: {
                addressLine1: "address1",
                addressLine2: "address2",
                city: "city",
                state: "state",
                zipCode: "zipcode"
            },
            phone: "9094023949",
            fax: "894182989199"
        };
        $httpBackend.whenGET(API.userDetails).respond(user);
        $httpBackend.whenGET(/[\s\S]*/).passThrough();
    });
})();

(function() {
    "use strict";
    angular.module("omniseq").controller("myInitiativesController", myInitiativesController);
    myInitiativesController.$inject = [ "$scope", "$state", "UserResource", "API", "CONFIG" ];
    function myInitiativesController($scope, $state, UserResource, API, CONFIG) {
        var myInitiativesCtrl = this;
        myInitiativesCtrl.displayed = [];
        myInitiativesCtrl.callServer = callServer;
        function callServer(tableState) {
            debugger;
            myInitiativesCtrl.stState = tableState;
            myInitiativesCtrl.isLoading = true;
            myInitiativesCtrl.noRecords = false;
            var pagination = tableState.pagination;
            var start = pagination.start || 0;
            var number = pagination.number || 10;
            UserResource.getPage(start, number, tableState).then(function(result) {
                myInitiativesCtrl.displayed = result.data;
                debugger;
                if (myInitiativesCtrl.displayed.length) {
                    debugger;
                    tableState.pagination.numberOfPages = result.numberOfPages;
                    myInitiativesCtrl.isLoading = false;
                } else {
                    debugger;
                    myInitiativesCtrl.noRecords = true;
                    myInitiativesCtrl.isLoading = false;
                }
            });
        }
    }
})();

(function() {
    "use strict";
    angular.module("omniseq").controller("userInitiativesController", userInitiativesController);
    userInitiativesController.$inject = [ "$scope", "$state", "UserResource", "API", "CONFIG", "$http" ];
    function userInitiativesController($scope, $state, UserResource, API, CONFIG, $http) {
        var userInitiativesCtrl = this;
        userInitiativesCtrl.displayed = [];
        userInitiativesCtrl.callServer = callServer;
        function callServer(tableState) {
            debugger;
            userInitiativesCtrl.stState = tableState;
            userInitiativesCtrl.isLoading = true;
            userInitiativesCtrl.noRecords = false;
            var pagination = tableState.pagination;
            var start = pagination.start || 0;
            var number = pagination.number || 10;
            UserResource.getPage(start, number, tableState).then(function(result) {
                userInitiativesCtrl.displayed = result.data;
                debugger;
                if (userInitiativesCtrl.displayed.length) {
                    debugger;
                    tableState.pagination.numberOfPages = result.numberOfPages;
                    userInitiativesCtrl.isLoading = false;
                } else {
                    debugger;
                    userInitiativesCtrl.noRecords = true;
                    userInitiativesCtrl.isLoading = false;
                }
            });
        }
    }
})();