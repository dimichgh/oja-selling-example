'use strict';

const userInfoSvc = require('./service');
const Action = require('oja').Action;

class UserInfoAction extends Action {
    async execute() {
        const userId = await this.consume('userId');
        try {
            const info = await userInfoSvc.getUserInfo(userId);
            this.define('user-info', info);
        }
        catch (err) {
            this.define('user-info', {
                error: err
            });
        }
    }
}

module.exports = UserInfoAction;
