'use strict';

angular.module('ligaBaloncestoApp').controller('EquipoDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Equipo', 'Temporada', 'Estadio', 'Jugador',
        function($scope, $stateParams, $modalInstance, entity, Equipo, Temporada, Estadio, Jugador) {

        $scope.equipo = entity;
        $scope.temporadas = Temporada.query();
        $scope.estadios = Estadio.query();
        $scope.jugadors = Jugador.query();
        $scope.load = function(id) {
            Equipo.get({id : id}, function(result) {
                $scope.equipo = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('ligaBaloncestoApp:equipoUpdate', result);
            $modalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.equipo.id != null) {
                Equipo.update($scope.equipo, onSaveSuccess, onSaveError);
            } else {
                Equipo.save($scope.equipo, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
