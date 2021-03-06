'use strict';

const request = require('request');

module.exports.getShippingInfo = function(zipOrig, zipDest) {
    return new Promise((resolve, reject) => {
        request({
            url: 'https://dimichgh.github.io/oja-selling-example/mock-data/shipping-info.json'
        },
        function(err, response) {
            if (err) {
                return reject(err);
            }
            if (response.statusCode >= 400) {
                err = new Error(`Http Error, status:${response.statusCode}`);
                err.statusCode = response.statusCode;
                return reject(err);
            }
            resolve(JSON.parse(response.body));
        });
    });
};
