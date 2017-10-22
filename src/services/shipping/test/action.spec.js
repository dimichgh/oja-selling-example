'use strict';

const Assert = require('assert');
const Action = require('../action');

describe(__filename, () => {
    it('should activate action with real service', next => {
        new Action()
        .define(['seller-info', 'user-info'], {})
        .consume('shipping-info', data => {
            Assert.deepEqual(require('../../../../mock-data/shipping-info.json'), data);
            next();
        })
        .catch(err => {
            next(err);
        })
        .activate();
    });
});
