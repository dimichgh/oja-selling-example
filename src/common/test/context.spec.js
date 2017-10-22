'use strict';

const Assert = require('assert');
const Action = require('../context');

describe(__filename, () => {
    it('should activate context', next => {
        new Action({
            query: {
                userId: 'john123'
            },
            params: {
                itemId: 123
            }
        })
        .catch(next)
        .activate()
        .consume(['itemId', 'userId'], data => {
            Assert.equal(123, data.itemId);
            Assert.equal('john123', data.userId);
            next();
        });
    });
});
