var angular = require('angular');
var router = require('angular-ui-router');
var chassis = require('chassis').name;

angular
    .module('spscp', [chassis, router])
    .factory('$exceptionHandler', require('exceptionHandler'))
    .controller('testCont', function(){

      this.publicMethod = function() {
        console.log('running test controller public method');
      }

    });
