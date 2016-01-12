'use strict';

angular.module('ligaBaloncestoApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


