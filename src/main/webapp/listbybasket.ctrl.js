/**
 * Created by AlexMolero on 2/24/16.
 */

'use strict'
angular.module('ligaBaloncestoApp')
    .controller('listJugadorCtrl', function($scope, Jugador, entity) {

        entity.$promise.then(function (data){
            $scope.jugadores = data;

        } );
    })
    .factory("Jugador",function($resource){
        return $resource('api/jugadors/:id', {}, {
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    return angular.toJson(data);
                }
            }
        });
    });
