var switcher = require('app-switcher').name;

module.exports =

require('angular')
    .module('brand-banner', [switcher])
    .directive('spsBrandBanner', BrandBannerDirective)
    .service('usersApi', require('users.api'));

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

            console.log('brand banner element', element);
            controller.test();

        }
    };
}

/**
 *
 * @param usersApi
 * @constructor
 * @ngInject
 */
function BrandBannerController(usersApi) {

    this.test = function() {
        console.log('usersApi from brand-banner', usersApi.publicMethod());
    }

}


