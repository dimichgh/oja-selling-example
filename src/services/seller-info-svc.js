'use strict';

const request = require('request');

module.exports.getSellerInfo = function(sellerId) {
    return new Promise((resolve, reject) => {
        request.get('http://seller.info.service.com/v1/seller-info', function(err, response) {
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
