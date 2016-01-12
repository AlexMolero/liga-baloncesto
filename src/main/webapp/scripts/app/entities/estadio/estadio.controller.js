'use strict';

angular.module('ligaBaloncestoApp')
    .controller('EstadioController', function ($scope, $state, $modal, Estadio, ParseLinks) {
      
        $scope.estadios = [];
        $scope.page = 0;
        $scope.loadAll = function() {
            Estadio.query({page: $scope.page, size: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.estadios = result;
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
            $scope.estadio = {
                nombre: null,
                localidad: null,
                id: null
            };
        };
    });
