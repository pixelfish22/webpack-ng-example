var angular = require('angular');
var chassis = require('chassis').name;
var router = require('angular-ui-router');

angular
    .module('spscp', [chassis, router])
    .factory('$exceptionHandler', require('exceptionHandler'))
    .controller('testCont', function(){

      this.publicMethod = function() {
        console.log('running test controller public method');
      }

    });
