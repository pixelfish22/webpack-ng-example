var angular = require('angular');
var normalize = require('normalize.scss/normalize.scss');

var sidebar = require('sidebar').name;
var banner = require('brand-banner').name;
var switcher = require('app-switcher').name;

angular
    .module('spscp', [sidebar, banner, switcher])
    .factory('$exceptionHandler', require('exceptionHandler'))
    .controller('testCont', function(){

      this.publicMethod = function() {
        console.log('running test controller public method');
      }

    });
