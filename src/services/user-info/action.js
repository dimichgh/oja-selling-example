'use strict';

const userInfoSvc = require('./service');
const Action = require('oja').Action;

class UserInfoAction extends Action {
    execute() {
        this.consume('userId', userId => {
            userInfoSvc.getUserInfo(userId)
                .then(data => this.define('user-info', data))
                .catch(err => this.define('user-info', {
                    error: err
                }));
        });
    }
}

module.exports = UserInfoAction;
