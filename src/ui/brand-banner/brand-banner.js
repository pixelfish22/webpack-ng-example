var switcher = require('app-switcher').name;
var usersApi = require('users-api');

module.exports =

require('spsui')
    .directive('spsBrandBanner', BrandBannerDirective)
    .service('usersService', usersApi.getService());

/**
 * Brand Banner
 * A panel in the UI that houses the SPS global branding and a variety
 * of other application navigation features.
 *
 * @returns Angular Directive
 */
function BrandBannerDirective() {
    return {
        restrict: 'E',
        transclude: true,
        controller: BrandBannerController,
        templateUrl: require('./brand-banner.html'),
        link: function (scope, element, attrs, controller) {

            controller.test();

        }
    };
}

/**
 *
 * @constructor
 * @ngInject
 */
function BrandBannerController(usersService) {

    var usersInstance = usersApi.getInstance();

    this.test = function() {
        console.log('Calling usersService from brand-banner', usersService.publicMethod());
        console.log('Calling usersInstance from brand-banner', usersInstance.publicMethod());
    }

}


