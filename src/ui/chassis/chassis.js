var angular = require('angular');
var spsui = require('spsui').name;
var sidebar = require('sidebar').name;
var banner = require('brand-banner').name;
var switcher = require('app-switcher').name;

module.exports = angular
    .module('chassis', [spsui])
    .directive('spsChassis', ChassisDirective);

/**
 *
 * @returns Directive
 * @constructor
 */
function ChassisDirective() {
    return {
        restrict: 'E',
        transclude: true,
        controllerAs: 'chassis',
        controller: ChassisController,
        templateUrl: require('./chassis.html'),
        link: function (scope, element, attrs, controller) {

        }
    };
}

/**
 *
 * @constructor
 * @ngInject
 */
function ChassisController() {

}
