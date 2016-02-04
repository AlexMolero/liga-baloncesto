'use strict';

describe('Equipo Detail Controller', function() {
    var $scope, $rootScope;
    var MockEntity, MockEquipo, MockTemporada, MockEstadio, MockJugador;
    var createController;

    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        MockEntity = jasmine.createSpy('MockEntity');
        MockEquipo = jasmine.createSpy('MockEquipo');
        MockTemporada = jasmine.createSpy('MockTemporada');
        MockEstadio = jasmine.createSpy('MockEstadio');
        MockJugador = jasmine.createSpy('MockJugador');
        

        var locals = {
            '$scope': $scope,
            '$rootScope': $rootScope,
            'entity': MockEntity ,
            'Equipo': MockEquipo,
            'Temporada': MockTemporada,
            'Estadio': MockEstadio,
            'Jugador': MockJugador
        };
        createController = function() {
            $injector.get('$controller')("EquipoDetailController", locals);
        };
    }));


    describe('Root Scope Listening', function() {
        it('Unregisters root scope listener upon scope destruction', function() {
            var eventType = 'ligaBaloncestoApp:equipoUpdate';

            createController();
            expect($rootScope.$$listenerCount[eventType]).toEqual(1);

            $scope.$destroy();
            expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
        });
    });
});
