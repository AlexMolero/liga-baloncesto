'use strict';

angular.module('ligaBaloncestoApp')
    .factory('Temporada', function ($resource, DateUtils) {
        return $resource('api/temporadas/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
