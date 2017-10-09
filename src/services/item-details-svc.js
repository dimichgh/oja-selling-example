'use strict';

const request = require('request');

module.exports.getItemDetails = function(itemId) {
    return new Promise((resolve, reject) => {
        request.get(`http://items.info.service.com/v1/item-details?itemId=${itemId}`,
        function(err, response) {
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
