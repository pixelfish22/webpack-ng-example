var angular = require('angular');
var layout = require('layout').name;

angular
    .module('spscp', [layout])
    .factory('$exceptionHandler', require('exceptionHandler'))
    .controller('testCont', function(){

      this.publicMethod = function() {
        console.log('running test controller public method');
      }

    });
