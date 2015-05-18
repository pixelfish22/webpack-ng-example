var angular = require('angular');

var sidebar = require('sidebar').name;
var banner = require('brand-banner').name;
var switcher = require('app-switcher').name;

module.exports =

angular
    .module('spscp.layout', [sidebar, banner, switcher]);
