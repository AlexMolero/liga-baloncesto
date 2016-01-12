'use strict';

angular.module('ligaBaloncestoApp')
	.controller('LigaDeleteController', function($scope, $modalInstance, entity, Liga) {

        $scope.liga = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Liga.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });