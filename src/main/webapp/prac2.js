angular.module('ligaBaloncestoApp')
    .config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('prac2_ejercicio1', {
                url: '/prac2_ejercicio1',
                data: {
                    pageTitle: 'listadobasket'
                },
                views: {
                    'content@': {
                        templateUrl: 'listadobasket.html',
                        controller: 'listJugadorCtrl'
                    }
                },
                resolve: {
                    entity: ['Jugador', function(Jugador) {
                        return Jugador.findPlayersByBaskets();
                    }]
                }
            })

    });
