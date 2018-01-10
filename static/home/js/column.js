$(document).ready(function() {
    $('#rate').click(function () {
                window.location.href = "../rate";
            });
    $('#chart').click(function () {
        window.location.href = "../chart";
    });
    $('#index').click(function () {
        window.location.href = "../";
    });
    $('#cloud').click(function () {
        window.location.href = "../cloud";
    });
    $('#borrow').click(function() {
        window.location.href = "../borrow";
    });
    $.ajax({
        url: "../line",
        dataType: "JSON",
        async: false,
        data: { ac: 'ccc' },
        success: function(data) {
            var dataAxis = [];
            var data2 = [];
            for (var i = 0; i < data.length; i++) {
                dataAxis[i] = data[i].yy;
                data2[i] = data[i].num;
            }

            var columnChart = echarts.init(document.getElementById('columnChart'));
            var yMax = 250;
            var dataShadow = [];

            for (var i = 0; i < data.length; i++) {
                dataShadow.push(yMax);
            }

            var option = {
                title: {
                    text: '各出版年份的图书数量',
                    subtext: '数据来自豆瓣'
                },
                xAxis: {
                    data: dataAxis,
                    axisLabel: {
                        inside: true,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    z: 10
                },
                yAxis: {
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#999'
                        }
                    }
                },
                dataZoom: [{
                    type: 'inside'
                }],
                series: [{ // For shadow
                        type: 'bar',
                        itemStyle: {
                            normal: { color: 'rgba(0,0,0,0.05)' }
                        },
                        barGap: '-100%',
                        barCategoryGap: '40%',
                        data: dataShadow,
                        animation: false
                    },
                    {
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1, [
                                        { offset: 0, color: '#83bff6' },
                                        { offset: 0.5, color: '#188df0' },
                                        { offset: 1, color: '#188df0' }
                                    ]
                                )
                            },
                            emphasis: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1, [
                                        { offset: 0, color: '#2378f7' },
                                        { offset: 0.7, color: '#2378f7' },
                                        { offset: 1, color: '#83bff6' }
                                    ]
                                )
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data2
                    }
                ]
            };

            // Enable data zoom when user click bar.
            var zoomSize = 6;
            columnChart.on('click', function(params) {
                console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
                columnChart.dispatchAction({
                    type: 'dataZoom',
                    startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                    endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
                });
            });
            columnChart.setOption(option)
        }
    });
});