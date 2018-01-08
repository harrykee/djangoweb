$(document).ready(function() {
    $.ajax({
        url: "../line",
        dataType: "JSON",
        async: false,
        data:{ac:'aaa'},
        success: function(data) {            
            var datalist = data
            var angleChart = echarts.init(document.getElementById('angleChart'));
            var option = {
                backgroundColor: '#ddf',

                title: {
                    text: '有超过30本书的出版社情况',
                    left: 'center',
                    top: 20,
                    textStyle: {
                        color: '#ccc'
                    }
                },

                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },

                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series: [{
                    name: '所占比例',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: datalist.sort(function(a, b) {
                        return a.value - b.value;
                    }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 55, 034, 1.0)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 55, 034, 1.0)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function(idx) {
                        return Math.random() * 200;
                    }
                }]
            };
            angleChart.setOption(option)
        }
    });
});