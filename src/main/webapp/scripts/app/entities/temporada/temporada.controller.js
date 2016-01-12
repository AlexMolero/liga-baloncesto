'use strict';

angular.module('ligaBaloncestoApp')
    .controller('TemporadaController', function ($scope, $state, $modal, Temporada, ParseLinks) {
      
        $scope.temporadas = [];
        $scope.page = 0;
        $scope.loadAll = function() {
            Temporada.query({page: $scope.page, size: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.temporadas = result;
            });
        };
        $scope.loadPage = function(page) {
            $scope.page = page;
            $scope.loadAll();
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.temporada = {
                year: null,
                id: null
            };
        };
    });
