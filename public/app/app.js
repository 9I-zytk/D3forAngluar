/**
 * Created by 9I on 2016/3/24.
 */
'use strict';
angular.module('app', [
    // Core modules
    'app.core'
]);
angular.module('app.core', [
    // Angular modules
    'ngAnimate',
    'ngAria',
    'ngMessages',

    // Custom modules
    'app.layout',

    // 3rd Party Modules
    'ngMaterial',
    'ui.router'
]);
angular.module('app.layout',[])
