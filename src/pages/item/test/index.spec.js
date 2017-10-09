'use strict';

require('marko/node-require').install();
const Assert = require('assert');
const PageAction = require('..');

describe('page controller', () => {
    it('should render page with mock data', next => {
        const out = [];

        const page = new PageAction();
        page.define('seller-info', {})
        .define('user-info', {})
        .define('shipping-info', {})
        .define('item-details', {})
        .define('context', {
            write(content) {
                out.push(content);
            },

            end() {
                Assert.equal('<!DOCTYPE html><html></html>', out.join());
                page.define('render', 'ok');
                next();
            }
        })
        .timeout('render', 1000)
        .activate();
    });
});
