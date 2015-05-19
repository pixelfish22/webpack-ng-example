var constants = require('users-constants');

module.exports = require('serviceFactory')(UsersAPI);

/**
 *
 * @constructor
 */
function UsersAPI() {

    this.rand = Math.random();

    this.publicMethod = function() {
        return this.rand;
    }

}
