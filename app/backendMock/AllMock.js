(function () {
    var allMock = angular.module("allMock", ["ngMockE2E", "ngResource"]);
    allMock.constant("API", {
        'login': '/api/login',
        'users': '/api/users',
        'action': '/api/action'
    });
    allMock.run(function ($httpBackend, $resource, $filter, API) {
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
                "status": "Active",
                "action": "Block",
                "initiativesFollowed": []
            },
            {
                "id": 2,
                "role": "user",
                "firstName": "Micky",
                "lastName": "Crasta",
                "username": "mickyc@hotmail.com",
                "password": "micky",
                "status": "Active",
                "action": "Block",
                "initiativesFollowed": []
            },
            {
                "id": 3,
                "role": "administrator",
                "firstName": "Sunil",
                "lastName": "Jadhav",
                "username": "sunil@melinator.com",
                "password": "sunil",
                "status": "Active",
                "action": "Block",
                "initiativesFollowed": []
            },
            {
                "id": 4,
                "role": "user",
                "firstName": "Jony",
                "lastName": "Crasta",
                "username": "Jony@hotmail.com",
                "password": "Jony",
                "status": "Inactive",
                "action": "Unblock",
                "initiativesFollowed": []
            },
            {
                "id": 5,
                "role": "user",
                "firstName": "abs",
                "lastName": "Crasta",
                "username": "abs@hotmail.com",
                "password": "abs",
                "status": "Active",
                "action": "Block",
                "initiativesFollowed": []
            },
            {
                "id": 6,
                "role": "user",
                "firstName": "Jake",
                "lastName": "Crasta",
                "username": "Jake@hotmail.com",
                "password": "Jake",
                "status": "Active",
                "action": "Block",
                "initiativesFollowed": []
            },
            {
                "id": 7,
                "role": "user",
                "firstName": "Mice",
                "lastName": "Crasta",
                "username": "Mice@hotmail.com",
                "password": "Mice",
                "status": "Active",
                "action": "Block",
                "initiativesFollowed": []
            },
            {
                "id": 8,
                "role": "user",
                "firstName": "Milky",
                "lastName": "Crasta",
                "username": "Milky@hotmail.com",
                "password": "Milky",
                "status": "Active",
                "action": "Block",
                "initiativesFollowed": []
            },
            {
                "id": 9,
                "role": "user",
                "firstName": "Nick",
                "lastName": "Crasta",
                "username": "Nick@hotmail.com",
                "password": "Nick",
                "status": "Active",
                "action": "Block",
                "initiativesFollowed": []
            },
            {
                "id": 10,
                "role": "user",
                "firstName": "Micky",
                "lastName": "Crasta",
                "username": "mickyc@hotmail.com",
                "password": "micky",
                "status": "Active",
                "action": "Block",
                "initiativesFollowed": []
            },
            {
                "id": 11,
                "role": "user",
                "firstName": "abc",
                "lastName": "Crasta",
                "username": "abc@hotmail.com",
                "password": "abc",
                "status": "Active",
                "action": "Block",
                "initiativesFollowed": []
            },
            {
                "id": 12,
                "role": "user",
                "firstName": "Pqr",
                "lastName": "Crasta",
                "username": "Pqr@hotmail.com",
                "password": "Pqr",
                "status": "Active",
                "action": "Block",
                "initiativesFollowed": []
            },
            {
                "id": 13,
                "role": "user",
                "firstName": "Xyz",
                "lastName": "Crasta",
                "username": "Xyz@hotmail.com",
                "password": "Xyz",
                "status": "Active",
                "action": "Block",
                "initiativesFollowed": []
            },
            {
                "id": 14,
                "role": "user",
                "firstName": "Uvx",
                "lastName": "Crasta",
                "username": "Uvx@hotmail.com",
                "password": "Uvx",
                "status": "Active",
                "action": "Block",
                "initiativesFollowed": []
            },
            {
                "id": 15,
                "role": "user",
                "firstName": "Pratik",
                "lastName": "Crasta",
                "username": "pratik@gmail.com",
                "password": "pratik",
                "status": "Inactive",
                "action": "Unblock",
                "initiativesFollowed": []
            },
            {
                "id": 16,
                "role": "user",
                "firstName": "Micky",
                "lastName": "Crasta",
                "username": "mickyc@hotmail.com",
                "password": "micky",
                "status": "Active",
                "action": "Block",
                "initiativesFollowed": []
            },
            {
                "id": 17,
                "role": "user",
                "firstName": "Miy",
                "lastName": "Crasta",
                "username": "Miy@hotmail.com",
                "password": "Miy",
                "status": "Active",
                "action": "Block",
                "initiativesFollowed": []
            }
        ];

        $httpBackend.whenPOST(API.login).respond(function (method, url, data) {
            var authenticatedUser = [];
            var keepGoing = true;
            var param = JSON.parse(data);
            var authenticationFlag = false;
            var activeFlag = true;
            var token = {

                Authorization: "Bearer dummytoken123"

            }
            debugger
            angular.forEach(users, function (user, key) {
                if (keepGoing) {

                    if (param.username == user.username && param.password == user.password) {

                        if (user.status == 'Active') {
                            authenticatedUser.push(user);
                            authenticationFlag = true;
                            activeFlag = true;
                            keepGoing = false;
                            debugger
                        } else {
                            activeFlag = false;
                            authenticationFlag = true;
                        }
                    } else {
                        authenticationFlag = false;
                        debugger
                    }

                }
            });

            if (authenticationFlag) {
                debugger
                return [200, authenticatedUser, token];
            } else {
                return [401, [{
                    "authenticationFlag": authenticationFlag,
                    "activeFlag": activeFlag
                }], token];
            }

        });

        $httpBackend.whenPOST(API.users).respond(function (method, url, data) {

            var param = JSON.parse(data);
            var filtered = param.tableState.search.predicateObject ? $filter('filter')(users, param.tableState.search.predicateObject) : users;

            if (param.tableState.sort.predicate) {
                filtered = $filter('orderBy')(filtered, param.tableState.sort.predicate, param.tableState.sort.reverse);
            }

            var result = filtered.slice(param.start, param.start + param.number);
            debugger
            var response = [{
                "data": result,
                "numberOfPages": Math.ceil(filtered.length / param.number)
                }];

            debugger
            return [200, response, ""];

        });

        $httpBackend.whenPOST(API.action).respond(function (method, url, data, headers, params) {

            var keepGoing = true;
            var updateFlag = false;
            var param = JSON.parse(data);
            debugger
            angular.forEach(users, function (user, key) {
                if (keepGoing) {
                    if (param.id == user.id) {
                        debugger
                        if (user.action == "Unblock") {
                            user.action = "Block";
                            user.status = "Active";
                        } else if (user.action == "Block") {
                            user.action = "Unblock";
                            user.status = "Inactive";
                        }
                        updateFlag = true;
                        keepGoing = false;
                        debugger
                    } else {
                        updateFlag = false;
                        debugger
                    }
                }
            });

            if (updateFlag == false) {
                return [404, undefined, {}];
            }

            return [200, "", {}];
        });

        // Passthrough everything
        $httpBackend.whenGET(/[\s\S]*/).passThrough();
    });
})();
