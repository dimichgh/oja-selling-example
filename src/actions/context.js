'use strict';

const Action = require('oja').Action;

module.exports = class Context extends Action {
    constructor(req, res) {
        super();

        this.request = req;
        this.response = res;
    }

    execute() {
        this.define('itemId', this.get('itemId'));
    }

    write(content) {
        this.response.write(content);
    }

    end() {
        this.response.end();
    }

    get(name) {
        return this.request.query[name] || this.request.params[name];
    }

};
