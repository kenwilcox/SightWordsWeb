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

    this.getCard = function () {
      var index = Math.floor(Math.random() * words.prek.length);
      var card = words.prek[index];
      //console.log(card);
      words.word = card.word;
    };
  }]);
 }());