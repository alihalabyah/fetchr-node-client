# fetchr-node-client
A NodeJS module to access Fetchr API

## Installation
```js
  npm install fetchr-api --save
```
## Usage

    var Fetchr = require('fetchr-node-client')({
        username: 'dummy',
        password: '123456789',
        serviceType: 'delivery',
        accountType: 'live'
    });

    Fetchr.getStatus('150915976090', function(data) {
        res.send(data );
    });

    Fetchr.createOrders({
        pickupLocation: 'dubai',
        orders: [
            {
                order_reference: 'order_ref_1',
                name: 'customer name',
                email: 'customer@email.com',
                phone_number: '+987654321',
                address: 'Dubai, Dubai',
                city: 'Dubai',
                payment_type: 'CCOD',
                amount: '123',
                description: 'test',
                comments: 'test',
            },
            {
                order_reference: 'order_ref_2',
                name: 'customer name',
                email: 'customer@email.com',
                phone_number: '+987654321',
                address: 'Dubai, Dubai',
                city: 'Dubai',
                payment_type: 'CCOD',
                amount: '123',
                description: 'test',
                comments: 'test',
            }
        ]
    }, function(data) {
        res.send(data);
    });

## Tests
```
  npm test
```
## Contributing

## Release History
```
* 1.0.0 Initial release
```