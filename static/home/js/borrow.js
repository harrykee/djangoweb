$(document).ready(function() {
    $('#column').click(function() {
        window.location.href = "../column";
    });
    $('#rate').click(function() {
        window.location.href = "../rate";
    });
    $('#index').click(function() {
        window.location.href = "../";
    });
    $('#cloud').click(function() {
        window.location.href = "../cloud";
    });
    $('#chart').click(function() {
        window.location.href = "../chart";
    });
    $.ajax({
        url: "../line",
        dataType: "JSON",
        async: false,
        data: {
            ac: 'fff'
        },
        success: function(data) {
            var datacity = data.citylist
            var datapub = data.publist

            var borrowChart = echarts.init(document.getElementById('borrowChart'));

            var option = {
                title: {
                    text: '近一年被借次数超过500次书所属出版社以及出版社所在地',
                    subtext: '数据来自集美大学图书馆',
                    textStyle: {
                        color: '#ccc'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                series: [{
                    name: '出版社所在地',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: datacity
                }, {
                    name: '近一年被借次数',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },

                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: datapub
                }]
            };
            borrowChart.setOption(option);
        }
    });
});