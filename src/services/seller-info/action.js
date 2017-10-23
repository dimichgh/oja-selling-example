'use strict';

const sellerInfoSvc = require('./service');
const Action = require('oja').Action;

class SellerInfoAction extends Action {
    async execute() {
        const sellerId = await this.consume('sellerId');
        try {
            const info = await sellerInfoSvc.getSellerInfo(sellerId);
            this.define('seller-info', info);
        }
        catch (err) {
            this.define('seller-info', {
                error: err
            });
        }
    }
}

module.exports = SellerInfoAction;
