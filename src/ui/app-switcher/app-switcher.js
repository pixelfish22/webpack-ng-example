
module.exports =

require('spsui')
    .directive('appSwitcher', AppSwitcherDirective);

/**
 * App Switcher Component
 *
 * @returns Angular Directive
 */
function AppSwitcherDirective() {
    return {
        scope: {},
        restrict: 'E',
        controller: require('./app-switcher.cont.js'),
        templateUrl: require('./app-switcher.html'),
        controllerAs: 'appSwitcher',
        link: function (scope, element, attrs, controller) {

            element.on('click', controller.toggle.bind(controller));

        }
    };
}

