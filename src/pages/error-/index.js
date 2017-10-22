'use strict';

const Action = require('oja').Action;

const RenderAction = require('../../common/render-action.js');

const template = require('./index.marko');

// compose the whole flow
module.exports = class PageAction extends Action {
    constructor() {
        super();
        // register these actions
        this.define('model', {
            error: 'Failed to handle your command'
        });
    }

    execute() {
        // we separated render and template action to
        // have more control during unit testing
        this.add(new RenderAction(template));
    }
};
