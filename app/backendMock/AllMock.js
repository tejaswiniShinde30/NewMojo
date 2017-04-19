(function () {
    var allMock = angular.module("allMock", ["ngMockE2E", "ngResource"]);
    allMock.constant("API", {
        'login': '/api/login',
        'userDetails': '/api/userDetails'
    });
    allMock.run(function ($httpBackend, $resource, API) {
        var token = {
            'jwt_token': 'thisiisdummytoken'
        };
        var users = [{
                "id": 1,
                "role": "user",
                "firstName": "Jon",
                "lastName": "Taylor",
                "username": "jon@rocketmail.com",
                "password": "jon",
                "initiativesFollowed": []
            },
            {
                "id": 2,
                "role": "user",
                "firstName": "Micky",
                "lastName": "Crasta",
                "username": "mickyc@hotmail.com",
                "password": "micky",
                "initiativesFollowed": []
            },
            {
                "id": 3,
                "role": "administrator",
                "firstName": "Sunil",
                "lastName": "Jadhav",
                "username": "sunil@melinator.com",
                "password": "sunil",
                "initiativesFollowed": []
            }
        ];
        console.log("http backend called");
        $httpBackend.whenPOST(API.login).respond(function (method, url, data) {
            var authenticatedUser = [];
            var keepGoing = true;
            var param = JSON.parse(data);
            var authenticationFlag = false;
            var token = {

                Authorization: "Bearer dummytoken123"

            }
            angular.forEach(users, function (user, key) {
                console.log(key + ': ' + user);
                if (keepGoing) {
                    if (param.username == user.username && param.password == user.password) {
                        authenticatedUser.push(user);
                        authenticationFlag = true;
                        keepGoing = false;
                        debugger
                    } else {
                        authenticationFlag = false;
                        debugger
                    }
                }
            });

            if (authenticationFlag) {
                debugger
                return [200,authenticatedUser, token];
            } else {
                return [401, "", token];
            }

        });
        //$httpBackend.whenGET(API.userDetails).respond(user);


        // Passthrough everything
        $httpBackend.whenGET(/[\s\S]*/).passThrough();
    });
})();
