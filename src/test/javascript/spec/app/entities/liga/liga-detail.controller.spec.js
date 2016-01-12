'use strict';

describe('Liga Detail Controller', function() {
    var $scope, $rootScope;
    var MockEntity, MockLiga, MockTemporada;
    var createController;

    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        MockEntity = jasmine.createSpy('MockEntity');
        MockLiga = jasmine.createSpy('MockLiga');
        MockTemporada = jasmine.createSpy('MockTemporada');
        

        var locals = {
            '$scope': $scope,
            '$rootScope': $rootScope,
            'entity': MockEntity ,
            'Liga': MockLiga,
            'Temporada': MockTemporada
        };
        createController = function() {
            $injector.get('$controller')("LigaDetailController", locals);
        };
    }));


    describe('Root Scope Listening', function() {
        it('Unregisters root scope listener upon scope destruction', function() {
            var eventType = 'ligaBaloncestoApp:ligaUpdate';

            createController();
            expect($rootScope.$$listenerCount[eventType]).toEqual(1);

            $scope.$destroy();
            expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
        });
    });
});
