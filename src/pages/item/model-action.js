'use strict';

const Action = require('oja').Action;

module.exports = class ModelAction extends Action {
    execute() {
        this.consume([
            'shipping-info',
            'user-info',
            'seller-info',
            'item-details'
        ], data => {
            // massage a data for for rendering
            const model = {};

            if (data['shipping-info'].error) {
                model['shipping-info'] = {
                    error: 'Shipping is temporary not available'
                };
            }
            else {
                model['shipping-info'] = data['shipping-info'];
            }

            model['item-details'] = data['item-details'];
            model['user-info'] = data['user-info'];
            model['seller-info'] = data['seller-info'];

            this.define('model', model);
        });
    }
};
