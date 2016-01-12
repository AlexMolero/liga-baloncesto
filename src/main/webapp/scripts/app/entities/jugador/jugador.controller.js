'use strict';

angular.module('ligaBaloncestoApp')
    .controller('JugadorController', function ($scope, $state, $modal, Jugador, ParseLinks) {
      
        $scope.jugadors = [];
        $scope.page = 0;
        $scope.loadAll = function() {
            Jugador.query({page: $scope.page, size: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.jugadors = result;
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
            $scope.jugador = {
                nombre: null,
                fechaNacimiento: null,
                numCanastas: null,
                numAsistencias: null,
                rebotesTotales: null,
                posicionCampo: null,
                dorsal: null,
                id: null
            };
        };
    });
