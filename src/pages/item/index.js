'use strict';

const Action = require('oja').Action;

const ItemDetailsAction = require('./item-details-action.js');
const SellerInfoAction = require('./seller-info-action.js');
const UserInfoAction = require('./user-info-action.js');
const ShippingAction = require('./shipping-action.js');
const RenderAction = require('./render-action.js');

// compose the whole flow
module.exports = class PageAction extends Action {
    constructor() {
        super();
        this.add(
            new ItemDetailsAction(),
            new SellerInfoAction(),
            new UserInfoAction(),
            new ShippingAction(),
            new RenderAction()
        );
    }
};
