var request = require('request');

module.exports = function (config) {
    var module = {};
    module.getStatus = function(trackingNumber, callback) {

        require('request').debug = true;

        var params = {
            'username': config.username,
            'password': config.password,
            'method': 'get_status',
            'data': trackingNumber
        };

        var dataParams = 'args=' + JSON.stringify(params);

        request.post(
            {
                headers: {'content-type' : 'application/x-www-form-urlencoded'},
                url: 'http://menavip.com/api/',
                body: dataParams
            },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    // console.log(body);
                    callback(body);
                } else {
                    return error;
                }
            }
        );
    };
    module.createOrders = function(data, callback) {

        require('request').debug = true;

        var params = {
            'username': config.username,
            'password': config.password,
            'method': 'create_orders',
            'pickup_location': data.pickupLocation,
            'data': data.orders
        };

        var dataParams = 'args=' + JSON.stringify(params);

        request.post(
            {
                headers: {'content-type' : 'application/x-www-form-urlencoded'},
                url: 'http://menavip.com/api/',
                body: dataParams
            },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    // console.log(body);
                    callback(response);
                } else {
                    // return error;
                    // console.log(error);
                    callback(response);
                }
            }
        );
    };
    return module;
}