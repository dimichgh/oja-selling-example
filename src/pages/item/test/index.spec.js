'use strict';

require('marko/node-require').install();
const Assert = require('assert');
const PageAction = require('..');

class TestPageAction extends PageAction {
    execute() {}
}

describe(__filename, () => {
    it('should render page with mock data', next => {
        new TestPageAction()
        .define('seller-info', {})
        .define('user-info', {})
        .define('shipping-info', {})
        .define('item-details', {})
        .consume('model', model => {
            Assert.deepEqual({
                'seller-info': {},
                'user-info': {},
                'shipping-info': {},
                'item-details': {}
            }, model);
            next();
        })
        .timeout('model', 1000)
        .activate();
    });

    it('should render page', next => {
        const data = [];

        new PageAction()
        .define('model', {
            'seller-info': require('../../../../mock-data/seller-info'),
            'user-info': require('../../../../mock-data/user-info'),
            'shipping-info': require('../../../../mock-data/shipping-info'),
            'item-details': require('../../../../mock-data/item-details')
        })
        .define('context', {
            write(content) {
                data.push(content);
            },

            end() {
                Assert.equal(require('fs')
                .readFileSync(require.resolve('./expected.html')).toString().trim(),
                data.join());
                next();
            }
        })
        .activate();
    });

    it('should handle failed shipping service', next => {
        new TestPageAction()
        .define('seller-info', {})
        .define('user-info', {})
        .define('shipping-info', {
            'error': new Error('Boom')
        })
        .define('item-details', {})
        .consume('model', model => {
            Assert.deepEqual({
                'seller-info': {},
                'user-info': {},
                'shipping-info': {
                    "error": "Shipping is temporary not available"
                },
                'item-details': {}
            }, model);
            next();
        })
        .timeout('model', 1000)
        .activate();
    });

});
