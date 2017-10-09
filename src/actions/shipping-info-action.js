'use strict';

const shippingInfoSvc = require('../services/shipping-svc');
const Action = require('oja').Action;

class SellerInfoAction extends Action {
    execute() {
        this.consume(['seller-info', 'user-info'], data => {
            shippingInfoSvc.getShippingInfo(data['seller-info'].zip,
            data['user-info'].zip)
                .then(data => this.define('shipping-info', data))
                .catch(err => this.define('shipping-info', {
                    error: err
                }));
        });
    }
}

module.exports = SellerInfoAction;
