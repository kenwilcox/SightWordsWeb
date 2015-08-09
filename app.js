/*global angular */
(function () {
  'use strict';
  var app = angular.module('words', []);
  app.controller('WordController', ['$http', function ($http) {
    var words = this;
    words.prek = [ ];
    $http.get('/prek.json').success(function (data) {
      words.prek = data;
    });
  }]);
 }());