'use strict';

const Action = require('oja').Action;

const ItemDetailsAction = require('../../services/item-details/action.js');
const SellerInfoAction = require('../../services/seller-info/action.js');
const UserInfoAction = require('../../services/user-info/action.js');
const ShippingAction = require('../../services/shipping/action.js');
const RenderAction = require('../../common/render-action.js');
const ModelAction = require('./model-action.js');

const template = require('./index.marko');

// compose the whole flow
module.exports = class PageAction extends Action {
    constructor() {
        super();
        // register these actions
        this.add(
            new ItemDetailsAction(),
            new SellerInfoAction(),
            new UserInfoAction(),
            new ShippingAction(),
            new ModelAction()
        );
    }

    execute() {
        // we separated render and template action to
        // have more control during unit testing
        this.add(new RenderAction(template));
    }
};
