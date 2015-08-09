/*global angular */
(function () {
  'use strict';
  var app = angular.module('words', []);
  app.controller('WordController', ['$http', function ($http) {
    var words = this;
    words.prek = [ ];
    words.word = "Are you ready to play?";
    $http.get('/prek.json').success(function (data) {
      words.prek = data;
    });

    function getCard() {
      words.word = words.prek[Math.random() * (words.prek.length)];
    }
  }]);
 }());