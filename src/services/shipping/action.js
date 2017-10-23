'use strict';

const shippingInfoSvc = require('./service');
const Action = require('oja').Action;

class ShippingInfoAction extends Action {
    async execute() {
        const data = await this.consume(['seller-info', 'user-info']);
        try {
            const info = shippingInfoSvc.getShippingInfo(data['seller-info'].zip,
                data['user-info'].zip);
            this.define('shipping-info', info);
        }
        catch (err) {
            this.define('shipping-info', {
                error: err
            });
        }
    }
}

module.exports = ShippingInfoAction;
