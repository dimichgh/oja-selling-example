'use strict';

const request = require('request');

module.exports.getItemDetails = function(itemId) {
    return new Promise((resolve, reject) => {
        // use mock data, no item id needed
        request({
            url: 'https://dimichgh.github.io/oja-selling-example/mock-data/item-details.json'
        },
        function(err, response) {
            if (err) {
                return reject(err);
            }
            if (response.statusCode >= 400) {
                err = new Error(`Http Error, status:${response.statusCode}`);
                err.statusCode = response.statusCode;
                err.body = response.body.toString();
                return reject(err);
            }
            resolve(JSON.parse(response.body));
        });
    });
};
