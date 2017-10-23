'use strict';

const itemDetailsSvc = require('./service');
const Action = require('oja').Action;

class ItemDetailsAction extends Action {
    async execute() {
        try {
            const itemId = await this.consume('itemId');
            const details = await itemDetailsSvc.getItemDetails(itemId);
            this.define('sellerId', details.sellerId);
            this.define('item-details', details);
        }
        catch (err) {
            this.define('item-details', {
                error: err
            });
        }
    }
}

module.exports = ItemDetailsAction;
