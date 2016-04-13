/**
 * Created by Administrator on 2016/3/27 0027.
 */
'use strict';

angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        var routes, setRoutes;

        routes = [
            'cards', 'typography', 'buttons', 'icons', 'grids', 'widgets', 'components', 'timeline', 'lists', 'pricing-tables'
        ]

        setRoutes = function(route) {
            var config, url;
            url = '/' + route;
            config = {
                url: url,
                templateUrl: 'views/' + route + '.html'
            };
            $stateProvider.state(route, config);
            return $stateProvider;
        };

        routes.forEach(function(route) {
            return setRoutes(route);
        });

        $urlRouterProvider
            .when('/', '/dashboard')
            .otherwise('/dashboard');


        $stateProvider.state('dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html'
        });

    }]
);