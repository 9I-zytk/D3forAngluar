/**
 * Created by 9I on 2016/4/19.
 */
var coreMenu=[
    {
        route:'core/Selections',
        name:'选择器',
        herf:'#/core/Selections',
        iconClass:''
    },
    {
        route:'core/transition',
        name:'过渡',
        herf:'#/core/transition',
        iconClass:''
    },
    {
        route:'core/Arrays',
        name:'数组操作',
        herf:'#/core/Arrays',
        iconClass:''
    },
    {
        route:'core/color',
        name:'颜色',
        herf:'#/core/color',
        iconClass:''
    },
    {
        route:'core/Math',
        name:'Math',
        herf:'#/core/Math',
        iconClass:''
    },
    {
        route:'core/Request',
        name:'数据请求',
        herf:'#/core/Request',
        iconClass:''
    },
    {
        route:'core/Formatting',
        name:'格式化',
        herf:'#/core/Formatting',
        iconClass:''
    },
    {
        route:'core/others',
        name:'其他',
        herf:'#/core/others',
        iconClass:''
    }
];
var core={
    route:'core',
    name:'核心',
    herf:'#/core',
    iconClass:'zmdi zmdi-flag',
    menu:coreMenu
};
var scalesMenu=[
    {
        route:'scale/Quantitative',
        name:'数值比例尺',
        herf:'#/scale/Quantitative',
        iconClass:''
    },
    {
        route:'scale/Quantile',
        name:'Quantile',
        herf:'#/scale/Quantile',
        iconClass:''
    },
    {
        route:'scale/Quantize',
        name:'Quantize ',
        herf:'#/scale/Quantize',
        iconClass:''
    },
    {
        route:'scale/Log',
        name:'Log',
        herf:'#/scale/Log',
        iconClass:''
    },
    {
        route:'scale/Power',
        name:'Power',
        herf:'#/scale/Power',
        iconClass:''
    },
    {
        route:'scale/Identity',
        name:'Identity',
        herf:'#/scale/Identity',
        iconClass:''
    },
    {
        route:'scale/Linear',
        name:'Linear',
        herf:'#/scale/Linear',
        iconClass:''
    },
    {
        route:'scale/Threshold',
        name:'Threshold',
        herf:'#/scale/Threshold',
        iconClass:''
    },
    {
        route:'scale/Ordinal',
        name:'Ordinal',
        herf:'#/scale/Ordinal',
        iconClass:''
    },
    {
        route:'scale/Categorical',
        name:'Categorical',
        herf:'#/scale/Categorical',
        iconClass:''
    },
    {
        route:'scale/colorBrewer',
        name:'colorBrewer',
        herf:'#/scale/colorBrewer',
        iconClass:''
    },
    {
        route:'scale/timeScales',
        name:'timeScales',
        herf:'#/scale/timeScales',
        iconClass:''
    },
    {
        route:'scale/others',
        name:'其他',
        herf:'#/scale/others',
        iconClass:''
    }
];
var scales= {
    route:'scale',
    name:'比例尺',
    herf:'#/scale',
    iconClass:'zmdi zmdi-view-list',
    menu:scalesMenu
};
var SVGMenu=[
    {
        route:'svg/Shapes',
        name:'形状',
        herf:'#/svg/Shapes',
        iconClass:''
    },
    {
        route:'svg/Elements',
        name:'Elements',
        herf:'#/svg/Elements',
        iconClass:''
    },
    {
        route:'svg/pathDataGenerators',
        name:'pathDataGenerators',
        herf:'#/svg/pathDataGenerators',
        iconClass:''
    },
    {
        route:'svg/Axes',
        name:'轴',
        herf:'#/svg/Axes',
        iconClass:''
    },
    {
        route:'svg/Controls',
        name:'Controls',
        herf:'#/svg/Controls',
        iconClass:''
    },
    {
        route:'svg/Brush',
        name:'刷子',
        herf:'#/svg/Brush',
        iconClass:''
    },
    {
        route:'svg/others',
        name:'其他',
        herf:'#/svg/others',
        iconClass:''
    }
];
var SVG= {
    route:'svg',
    name:'SVG',
    herf:'#/svg',
    iconClass:'zmdi zmdi-pages',
    menu:SVGMenu
};
var layoutMenu=[
    {
        route:'layout/Bundle',
        name:'捆布局',
        herf:'#/layout/Bundle',
        iconClass:''
    },
    {
        route:'layout/Chord',
        name:'弦布局',
        herf:'#/layout/Chord',
        iconClass:''
    },
    {
        route:'layout/cluster',
        name:'簇布局',
        herf:'#/layout/cluster',
        iconClass:''
    },
    {
        route:'layout/force',
        name:'力导图',
        herf:'#/layout/force',
        iconClass:''
    },
    {
        route:'layout/hierarchy',
        name:'层次布局',
        herf:'#/layout/hierarchy',
        iconClass:''
    },
    {
        route:'layout/histogram',
        name:'直方图布局',
        herf:'#/layout/histogram',
        iconClass:''
    },
    {
        route:'layout/pack',
        name:'包布局',
        herf:'#/layout/pack',
        iconClass:''
    },
    {
        route:'layout/partition',
        name:'分区图',
        herf:'#/layout/partition',
        iconClass:''
    },
    {
        route:'layout/stack',
        name:'堆叠图',
        herf:'#/layout/stack',
        iconClass:''
    },
    {
        route:'layout/pie',
        name:'饼状图',
        herf:'#/layout/pie',
        iconClass:''
    },
    {
        route:'layout/tree',
        name:'树图',
        herf:'#/layout/tree',
        iconClass:''
    },
    {
        route:'layout/treeMap',
        name:'矩形柱树图',
        herf:'#/layout/treeMap',
        iconClass:''
    },
    {
        route:'layout/others',
        name:'其他',
        herf:'#/layout/others',
        iconClass:''
    }
];
var layout={
    route:'layout',
    name:'布局',
    herf:'#/layout',
    iconClass:'zmdi zmdi-chart',
    menu:layoutMenu
};