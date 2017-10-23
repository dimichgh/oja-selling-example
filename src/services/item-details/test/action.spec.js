'use strict';

const Assert = require('assert');
const Action = require('../action');

describe(__filename, () => {
    it('should activate action with real service call', next => {
        new Action()
        .define('itemId', 123)
        .consume('item-details', data => {
            Assert.deepEqual(require('../../../../mock-data/item-details.json'), data);
            next();
        })
        .catch(err => {
            next(err);
        })
        .activate();
    });
});
