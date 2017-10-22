'use strict';

const Assert = require('assert');
const Service = require('../service');

describe(__filename, () => {
    it('should make a real service call', next => {
        Service.getShippingInfo()
        .then(data => {
            Assert.deepEqual(require('../../../../mock-data/shipping-info.json'), data);
            next();
        })
        .catch(err => {
            next(err);
        });
    });
});
