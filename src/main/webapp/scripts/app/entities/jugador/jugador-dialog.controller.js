'use strict';

angular.module('ligaBaloncestoApp').controller('JugadorDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Jugador', 'Equipo',
        function($scope, $stateParams, $modalInstance, entity, Jugador, Equipo) {

        $scope.jugador = entity;
        $scope.equipos = Equipo.query();
        $scope.load = function(id) {
            Jugador.get({id : id}, function(result) {
                $scope.jugador = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('ligaBaloncestoApp:jugadorUpdate', result);
            $modalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.jugador.id != null) {
                Jugador.update($scope.jugador, onSaveSuccess, onSaveError);
            } else {
                Jugador.save($scope.jugador, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
