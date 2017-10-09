'use strict';

const sellerInfoSvc = require('../services/seller-info-svc');
const Action = require('oja').Action;

class SellerInfoAction extends Action {
    execute() {
        this.consume('sellerId', sellerId => {
            sellerInfoSvc.getSellerInfo(sellerId)
                .then(data => this.define('seller-info', data))
                .catch(err => this.define('seller-info', {
                    error: err
                }));
        });
    }
}

module.exports = SellerInfoAction;
