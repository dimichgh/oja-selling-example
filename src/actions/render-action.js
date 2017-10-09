'use strict';

const Action = require('oja').Action;

module.exports = class RenderAction extends Action {
    execute() {

        this.consume([
            'context',
            'template',
            'shipping-info',
            'user-info',
            'seller-info',
            'item-details'], data => {

            data.template.render(data, {
                write(content) {
                    data.context.write(content);
                },

                end() {
                    data.context.end();
                    this.define('render',  'complete');
                }
            });
        });
    }
};
