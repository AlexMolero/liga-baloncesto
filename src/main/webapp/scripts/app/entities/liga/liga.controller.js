'use strict';

angular.module('ligaBaloncestoApp')
    .controller('LigaController', function ($scope, $state, $modal, Liga, ParseLinks) {
      
        $scope.ligas = [];
        $scope.page = 0;
        $scope.loadAll = function() {
            Liga.query({page: $scope.page, size: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.ligas = result;
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
            $scope.liga = {
                nombre: null,
                id: null
            };
        };
    });
