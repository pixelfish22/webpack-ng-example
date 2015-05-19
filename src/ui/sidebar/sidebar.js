
module.exports =

require('spsui').directive('spsSidebar', SidebarDirective);

/**
 *
 * @returns Directive
 * @constructor
 */
function SidebarDirective() {
    return {
        restrict: 'E',
        controllerAs: 'sidebar',
        controller: SidebarController,
        scope: {hookTo: '=', hookAs: '@'},
        templateUrl: require('./sidebar.html'),
        link: function (scope, element, attrs, controller) {

            if (scope.hookTo) {
                var ns = scope.hookAs || 'sidebar';
                scope.hookTo[ns] = controller;
            }

            controller.items = [
                {id: 1, label: 'one'},
                {id: 2, label: 'two'},
                {id: 3, label: 'three'},
                {id: 4, label: 'four'}
            ];
        }
    };
}

/**
 *
 * @param $scope
 * @constructor
 * @ngInject
 */
function SidebarController($scope) {

    this.update = function(items) {
        this.items = items;
        $scope.apply();
    };

    this.navigateTo = function(id) {
        console.log('sidebar navigate to', id);
    };

    this.toggle = function() {
        console.log('toggle sidebar');
    };

}


