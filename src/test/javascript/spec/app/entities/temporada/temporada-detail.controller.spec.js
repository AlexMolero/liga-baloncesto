'use strict';

describe('Temporada Detail Controller', function() {
    var $scope, $rootScope;
    var MockEntity, MockTemporada, MockLiga, MockEquipo;
    var createController;

    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        MockEntity = jasmine.createSpy('MockEntity');
        MockTemporada = jasmine.createSpy('MockTemporada');
        MockLiga = jasmine.createSpy('MockLiga');
        MockEquipo = jasmine.createSpy('MockEquipo');
        

        var locals = {
            '$scope': $scope,
            '$rootScope': $rootScope,
            'entity': MockEntity ,
            'Temporada': MockTemporada,
            'Liga': MockLiga,
            'Equipo': MockEquipo
        };
        createController = function() {
            $injector.get('$controller')("TemporadaDetailController", locals);
        };
    }));


    describe('Root Scope Listening', function() {
        it('Unregisters root scope listener upon scope destruction', function() {
            var eventType = 'ligaBaloncestoApp:temporadaUpdate';

            createController();
            expect($rootScope.$$listenerCount[eventType]).toEqual(1);

            $scope.$destroy();
            expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
        });
    });
});
