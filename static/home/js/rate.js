$(document).ready(function() {
    $.ajax({
        url: "../line",
        dataType: "JSON",
        async: false,
        data:{ac:'bbb'},
        success: function(data) {
            var datalist = data;
            var postChart = echarts.init(document.getElementById('postChart'));

            var option = {
                title: {
                    text: '评分人数超过3000人评分情况分布',
                    subtext: '数据来自豆瓣图书'
                },
                grid: {
                    left: '3%',
                    right: '7%',
                    bottom: '3%',
                    containLabel: true
                },
                tooltip: {
                    // trigger: 'axis',
                    showDelay: 0,
                    formatter: function(params) {
                        if (params.value.length > 1) {
                            return params.seriesName + ' :<br/>' +
                                params.value[0] + '人 ' +
                                params.value[1] + '分 '+
                                params.value[2];
                        } else {
                            return params.seriesName + ' :<br/>' +
                                params.name + ' : ' +
                                params.value + '分 ';
                        }
                    },
                    axisPointer: {
                        show: true,
                        type: 'cross',
                        lineStyle: {
                            type: 'dashed',
                            width: 1
                        }
                    }
                },
                toolbox: {
                    feature: {
                        dataZoom: {},
                        brush: {
                            type: ['rect', 'polygon', 'clear']
                        }
                    }
                },
                brush: {},
                legend: {
                    data: ['评分'],
                    left: 'center'
                },
                xAxis: [{
                    type: 'value',
                    scale: true,
                    axisLabel: {
                        formatter: '{value} 人'
                    },
                    splitLine: {
                        show: false
                    }
                }],
                yAxis: [{
                    type: 'value',
                    scale: true,
                    axisLabel: {
                        formatter: '{value} 分'
                    },
                    splitLine: {
                        show: false
                    }
                }],
                series: [{
                    name: '评分情况',
                    type: 'scatter',
                    data: datalist,
                    markArea: {
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                borderWidth: 1,
                                borderType: 'dashed'
                            }
                        },
                        data: [
                            [{
                                name: '评分区间分布',
                                xAxis: 'min',
                                yAxis: 'min'
                            }, {
                                xAxis: 'max',
                                yAxis: 'max'
                            }]
                        ]
                    },
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        lineStyle: {
                            normal: {
                                type: 'solid'
                            }
                        },
                        data: [
                            { type: 'average', name: '平均值' },
                            { xAxis: 13702 }
                        ]
                    }
                }]
            };

            postChart.setOption(option)
        }
    });
});