/**
 * Created by Administrator on 2016/3/29 0029.
 */
'use strict';
angular.module('app.core')
    .controller('dashboard', [ '$scope', function ($scope) {
        //$scope.init= function () {
        //    setTimeout($scope.drow(),2000);
        //}
        $scope.drow= function() {
            var dBody = d3.select('.page-dashboard .dashboard'),
                width = 400,
                height = 400;
            var svg = dBody.append('svg')
                .attr('width', width)
                .attr('height', height);
            var circle1 = svg.append("circle")
                .attr("cx", 100)
                .attr("cy", 100)
                .attr("r", 45)
                .style("fill", "green");
            //在1秒（1000毫秒）内将圆心坐标由100变为300
            circle1.transition()
                .duration(1000)
                .attr("cx", 300);
            var circle2 = svg.append("circle")
                .attr("cx", 100)
                .attr("cy", 200)
                .attr("r", 45)
                .style("fill", "green");
            //在1.5秒（1500毫秒）内将圆心坐标由100变为300
            circle2.transition()
                .duration(1500)
                .attr("cx", 300)
                .style('fill', 'red');
            var circle3 = svg.append("circle")
                .attr("cx", 100)
                .attr("cy", 300)
                .attr("r", 45)
                .style("fill", "green");
            //在2秒（2000毫秒）内将圆心坐标由100变为300
            circle3.transition()
                .duration(2000)
                .attr("cx", 300)
                .style('fill', 'red')
                .attr('r', 25);
        }
    }]);