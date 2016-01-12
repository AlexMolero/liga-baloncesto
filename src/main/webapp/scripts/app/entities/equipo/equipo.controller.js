'use strict';

angular.module('ligaBaloncestoApp')
    .controller('EquipoController', function ($scope, $state, $modal, Equipo, ParseLinks) {
      
        $scope.equipos = [];
        $scope.page = 0;
        $scope.loadAll = function() {
            Equipo.query({page: $scope.page, size: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.equipos = result;
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
            $scope.equipo = {
                nombre: null,
                localidad: null,
                fechaCreacion: null,
                id: null
            };
        };
    });
