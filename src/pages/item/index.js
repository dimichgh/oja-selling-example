'use strict';

const Action = require('oja').Action;

const ItemDetailsAction = require('../../actions/item-details-action.js');
const SellerInfoAction = require('../../actions/seller-info-action.js');
const UserInfoAction = require('../../actions/user-info-action.js');
const ShippingAction = require('../../actions/shipping-info-action.js');
const RenderAction = require('../../actions/render-action.js');

const template = require('./index.marko');

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
        )
        .define('template', template);
    }
};
