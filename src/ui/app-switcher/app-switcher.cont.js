module.exports = AppSwitcherController;

var Users = require('users-api').getInstance();

/**
 * This is the controller for the App Switcher
 *
 * @param $scope
 * @constructor
 * @ngInject
 */
function AppSwitcherController($scope) {

    console.log('UsersAPI from app switcher', Users.publicMethod());

    this.isOpen = false;

    this.open = function() {
        this.isOpen = true;
        $scope.$apply();
        console.log('open app switcher');
        throw new Error('this is a forced error from the app switcher');
    };

    this.close = function() {
        console.log('close app switcher');
        this.isOpen = false;
        $scope.$apply();
    };

    this.toggle = function() {
        (this.isOpen) ? this.close() : this.open();
    }

}
