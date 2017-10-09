'use strict';

const request = require('request');

module.exports.getShippingInfo = function(zipOrig, zipDest) {
    return new Promise((resolve, reject) => {
        request.get(`http://shipping.info.service.com/v1/shipping-info?zipOrig=${zipOrig}&zipDest=${zipDest}`, function(err, response) {
            if (err) {
                return reject(err);
            }
            if (response.statusCode >= 400) {
                err = new Error('Http Error');
                err.statusCode = response.statusCode;
                return reject(err);
            }
            resolve(response.body);
        });
    });
};
