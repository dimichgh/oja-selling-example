'use strict';

module.exports = class Context {
    constructor(req, res) {
        this.request = req;
        this.response = res;
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
