'use strict';

const Action = require('oja').Action;

// assume here we had one template only, though in other cases it can be communicated or injected into the constructor if needed
const template = require('./page-template.marko');

module.exports = class RenderAction extends Action {
    execute() {
        this.consume(['context', 'shipping-info', 'user-info', 'seller-info'], data => {
            template.render(data, data.context);
        });
    }
};
