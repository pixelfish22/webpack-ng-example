
module.exports =

require('angular')
    .module('app-switcher', [])
    .directive('appSwitcher', AppSwitcherDirective)
    .service('usersApi', require('users.api'));

/**
 * App Switcher Component
 *
 * @returns Angular Directive
 */
function AppSwitcherDirective() {
    return {
        scope: {},
        restrict: 'E',
        controller: AppSwitcherController,
        templateUrl: require('./app-switcher.html'),
        controllerAs: 'appSwitcher',
        link: function (scope, element, attrs, controller) {

            element.on('click', controller.toggle.bind(controller));

        }
    };
}

/**
 * This is the controller for the App Switcher
 *
 * @param $scope
 * @param usersApi
 * @constructor
 * @ngInject
 */
function AppSwitcherController($scope, usersApi) {

    console.log('usersApi from app switcher', usersApi.publicMethod());

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

