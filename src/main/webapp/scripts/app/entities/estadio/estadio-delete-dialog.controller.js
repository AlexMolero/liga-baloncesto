'use strict';

angular.module('ligaBaloncestoApp')
	.controller('EstadioDeleteController', function($scope, $modalInstance, entity, Estadio) {

        $scope.estadio = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Estadio.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });