'use strict';

const Action = require('oja').Action;

module.exports = class RenderAction extends Action {
    constructor(template) {
        super();
        this.template = template;
    }

    async execute() {
        const _this = this;
        const data = await this.consume([
            'model',
            'context'
        ]);

        this.template.render(data.model, {
            write(content) {
                data.context.write(content);
            },

            end() {
                data.context.end();
                _this.define('render',  {
                    status: 'end'
                });
            }
        });
    }
};
