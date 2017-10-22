'use strict';

const Assert = require('assert');
const Action = require('../render-action');

describe(__filename, () => {
    it('should activate render action', next => {
        let endCalled;
        let _model;
        new Action({
            render: function (model, out) {
                _model = model;
                out.end();
            }
        })
        .catch(next)
        .activate()
        .consume('render', data => {
            Assert.deepEqual('foo', _model);
            Assert.ok(endCalled);
            next();
        })
        .define('model', 'foo')
        .define('context', {
            end: function() {
                endCalled = true;
            }
        })
        .activate();
    });
});
