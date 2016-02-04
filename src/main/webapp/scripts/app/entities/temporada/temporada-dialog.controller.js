'use strict';

angular.module('ligaBaloncestoApp').controller('TemporadaDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Temporada', 'Liga', 'Equipo',
        function($scope, $stateParams, $modalInstance, entity, Temporada, Liga, Equipo) {

        $scope.temporada = entity;
        $scope.ligas = Liga.query();
        $scope.equipos = Equipo.query();
        $scope.load = function(id) {
            Temporada.get({id : id}, function(result) {
                $scope.temporada = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('ligaBaloncestoApp:temporadaUpdate', result);
            $modalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.temporada.id != null) {
                Temporada.update($scope.temporada, onSaveSuccess, onSaveError);
            } else {
                Temporada.save($scope.temporada, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
