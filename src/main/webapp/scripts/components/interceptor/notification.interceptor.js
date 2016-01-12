 'use strict';

angular.module('ligaBaloncestoApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-ligaBaloncestoApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-ligaBaloncestoApp-params')});
                }
                return response;
            }
        };
    });
