/*global angular */
(function () {
  'use strict';
  var app = angular.module('words', []);
  app.controller('WordController', ['$http', function ($http) {
    var vm = this;
    vm.prek = [ ];
    vm.prekCache = [ ];
    vm.word = "Are you ready to play?";
    vm.count = 0;
    vm.wordNo = 0;
    vm.caption = "Yes";

    this.loadData = function() {
      $http.get('/prek.json').success(function (data) {
        vm.prek = data;
        vm.prekCache = data;
        vm.count = data.length;
      });     
    };
 
    this.getCard = function () {
      if (vm.caption === "Start Over") {
        this.loadData();
        vm.word = "Are you ready to play?";
        vm.caption = "Yes";
        vm.wordNo = 0;
      }

      var index = Math.floor(Math.random() * vm.prekCache.length);
      var card = vm.prekCache[index];
      vm.prekCache.splice(index, 1);
      vm.word = card.word;
      vm.wordNo = vm.count - vm.prekCache.length;
      
      if (vm.wordNo === vm.count) {
        vm.caption = "Start Over";
      } else {
        vm.caption = "Next";
      }
    };

    this.loadData();
  }]);
 }());