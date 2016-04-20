/**
 * Created by 9I on 2016/3/24.
 */
'use strict';

angular.module('app.core')
    .factory('appConfig', [function() {
        var pageTransitionOpts = [
            {
                name: 'Fade up',
                "class": 'animate-fade-up'
            }, {
                name: 'Scale up',
                "class": 'ainmate-scale-up'
            }, {
                name: 'Slide in from right',
                "class": 'ainmate-slide-in-right'
            }, {
                name: 'Flip Y',
                "class": 'animate-flip-y'
            }
        ];
        var date = new Date();
        var year = date.getFullYear();
        var main = {
            brand: 'Material',
            name: 'Lisa',
            year: year,
            layout: 'wide',                                 // 'boxed', 'wide'
            menu: 'vertical',                               // 'horizontal', 'vertical', 'collapsed'
            fixedHeader: true,                              // true, false
            fixedSidebar: true,                             // true, false
            pageTransition: pageTransitionOpts[0],          // 0, 1, 2, 3... and build your own
            skin: '12'                                      // 11,12,13,14,15,16; 21,22,23,24,25,26; 31,32,33,34,35,36
        };
        var color = {
            primary:    '#009688',
            success:    '#8BC34A',
            info:       '#00BCD4',
            infoAlt:    '#7E57C2',
            warning:    '#FFCA28',
            danger:     '#F44336',
            gray:       '#EDF0F1'
        };

        return {
            pageTransitionOpts: pageTransitionOpts,
            main: main,
            color: color
        }
    }])
    .factory('appMenu',[function(){
        //var coreMenu=[
        //    {
        //        route:'core/Selections',
        //        name:'选择器',
        //        herf:'#/core/Selections',
        //        iconClass:''
        //    },
        //    {
        //        route:'core/transition',
        //        name:'过渡',
        //        herf:'#/core/transition',
        //        iconClass:''
        //    },
        //    {
        //        route:'core/Arrays',
        //        name:'数组操作',
        //        herf:'#/core/Arrays',
        //        iconClass:''
        //    },
        //    {
        //        route:'core/color',
        //        name:'颜色',
        //        herf:'#/core/color',
        //        iconClass:''
        //    },
        //    {
        //        route:'core/scale',
        //        name:'比例尺',
        //        herf:'#/core/scale',
        //        iconClass:''
        //    },
        //    {
        //        route:'core/Math',
        //        name:'Math',
        //        herf:'#/core/Math',
        //        iconClass:''
        //    },
        //    {
        //        route:'core/Request',
        //        name:'数据请求',
        //        herf:'#/core/Request',
        //        iconClass:''
        //    },
        //    {
        //        route:'core/Formatting',
        //        name:'格式化',
        //        herf:'#/core/Formatting',
        //        iconClass:''
        //    },
        //    {
        //        route:'core/others',
        //        name:'其他',
        //        herf:'#/core/others',
        //        iconClass:''
        //    }
        //];
        //var core={
        //    route:'core',
        //    name:'核心',
        //    herf:'#/core',
        //    iconClass:'zmdi zmdi-flag',
        //    menu:coreMenu
        //};
        return{
            core:core,
            SVG:SVG,
            scales:scales,
            layout:layout
        }

    }])
    .config(['$mdThemingProvider', function ($mdThemingProvider) {
        var cyanAlt = $mdThemingProvider.extendPalette('cyan', {
            'contrastLightColors': '500 600 700 800 900',
            'contrastStrongLightColors': '500 600 700 800 900'
        })
        var lightGreenAlt = $mdThemingProvider.extendPalette('light-green', {
            'contrastLightColors': '500 600 700 800 900',
            'contrastStrongLightColors': '500 600 700 800 900'
        })

        $mdThemingProvider
            .definePalette('cyanAlt', cyanAlt)
            .definePalette('lightGreenAlt', lightGreenAlt);


        $mdThemingProvider.theme('default')
            .primaryPalette('teal', {
                'default': '500'
            })
            .accentPalette('cyanAlt', {
                'default': '500'
            })
            .warnPalette('red', {
                'default': '500'
            })
            .backgroundPalette('grey');
    }]);



