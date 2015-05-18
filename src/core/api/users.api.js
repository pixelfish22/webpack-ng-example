var constants = require('users.constants');

module.exports = UsersAPI;


/**
 *
 * @constructor
 */
function UsersAPI() {

    this.rand = Math.random();

    var _private = true;

    this.publicMethod = function() {
        console.log('where am i?', this.rand);

        console.log('heres the constants', constants);
        return 'PUBLIC METHOD';
    }

}
