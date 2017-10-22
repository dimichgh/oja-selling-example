'use strict';

const request = require('request');

module.exports.getItemDetails = function(itemId) {
    return new Promise((resolve, reject) => {
        // use mock data, no item id needed
        request({
            url: 'https://api.github.com/repos/dimichgh/oja-selling-example/contents/mock-data/item-details.json',
            headers: {
                'Accept': 'application/vnd.github.VERSION.raw',
                'User-Agent': 'service-agent/1.0.0'
            }
        },
        function(err, response) {
            if (err) {
                return reject(err);
            }
            if (response.statusCode >= 400) {
                err = new Error('Http Error');
                err.statusCode = response.statusCode;
                err.body = response.body.toString();
                return reject(err);
            }
            resolve(JSON.parse(response.body));
        });
    });
};
