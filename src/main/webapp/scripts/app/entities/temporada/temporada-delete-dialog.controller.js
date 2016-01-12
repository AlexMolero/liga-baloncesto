'use strict';

angular.module('ligaBaloncestoApp')
	.controller('TemporadaDeleteController', function($scope, $modalInstance, entity, Temporada) {

        $scope.temporada = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Temporada.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });