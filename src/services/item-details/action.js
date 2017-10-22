'use strict';

const itemDetailsSvc = require('./service');
const Action = require('oja').Action;

class ItemDetailsAction extends Action {
    execute() {
        this.consume('itemId', itemId => {
            itemDetailsSvc.getItemDetails(itemId)
                .then(data => {
                    this.define('sellerId', data.sellerId);
                    this.define('item-details', data);
                })
                .catch(err => this.define('item-details', {
                    error: err
                }));
        });
    }
}

module.exports = ItemDetailsAction;
