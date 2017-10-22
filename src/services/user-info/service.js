'use strict';

const request = require('request');

module.exports.getUserInfo = function(userId) {
    return new Promise((resolve, reject) => {
        request({
            url: 'https://api.github.com/repos/dimichgh/oja-selling-example/contents/mock-data/user-info.json',
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
                return reject(err);
            }
            resolve(JSON.parse(response.body));
        });
    });
};
