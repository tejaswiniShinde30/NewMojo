(function() {
    var allMock = angular.module("allMock", ["ngMockE2E", "ngResource"]);
    allMock.constant("API", {
        'login': '/api/login',
        'userDetails': '/api/userDetails'
    });
    allMock.run(function($httpBackend, $resource, API) {
        var token = {
            'jwt_token': 'thisiisdummytoken'
        };

        console.log("http backend called");
        $httpBackend.whenPOST(API.login).respond(function(method, url, data) {
            debugger;
            var param = JSON.parse(data);
            var token = {

                Authorization: "Bearer dummytoken123"

            }
            if (param.username == "jon@melinator.com" && param.password == "jon@123") {
                return [200, "", token];
            } else {
                return [401, "", token];
            }
        });


        var user = {
            "id": 123,
            "role": "ordering provider",
            "firstName": "abc",
            "lastName": "xyz",
            "npi": "",
            "facility": [{
                "id": 1,
                "name": "facility1",
                "shortName": "f1"
            }, {
                "id": 2,
                "name": "facility2",
                "shortName": "f2"
            }],
            "email": "demo@gmail.com",
            "address": {
                "addressLine1": "address1",
                "addressLine2": "address2",
                "city": "city",
                "state": "state",
                "zipCode": "zipcode"
            },
            "phone": "9094023949",
            "fax": "894182989199"
        };
        $httpBackend.whenGET(API.userDetails).respond(user);


        // Passthrough everything
        $httpBackend.whenGET(/[\s\S]*/).passThrough();
    });
})();
