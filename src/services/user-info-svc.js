'use strict';

const request = require('request');

module.exports.getUserInfo = function(userId) {
    return new Promise((resolve, reject) => {
        request.get('http://user.info.service.com/v1/user-info', function(err, response) {
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
