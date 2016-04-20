/**
 * Created by Administrator on 2016/3/27 0027.
 */
'use strict';

angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
        var routes, setRoutes,setMenuRoutes;

        routes = [
            'core/cards', 'core/typography', 'core/buttons', 'core/icons', 'core/grids', 'core/widgets', 'core/components', 'core/timeline', 'core/lists', 'core/pricing-tables'
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
        //构造route
        var routeCores=[];
        routeCores=_.union(routeCores,coreMenu,scalesMenu,SVGMenu,layoutMenu);
        setMenuRoutes = function(route) {
            var config, url;
            url = '/' + route.route;
            config = {
                url: url,
                templateUrl: 'views/' + route.route + '.html'
            };
            //console.log(config);
            $stateProvider.state(route.route, config);
            return $stateProvider;
        };
        routeCores.forEach(function(route) {
            return setMenuRoutes(route);
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