'use strict';

const Assert = require('assert');
const Action = require('../action');

describe(__filename, () => {
    it('should activate action with real service', next => {
        new Action()
        .define('userId', '123')
        .consume('user-info', data => {
            Assert.deepEqual(require('../../../../mock-data/user-info.json'), data);
            next();
        })
        .catch(err => {
            next(err);
        })
        .activate();
    });
});
