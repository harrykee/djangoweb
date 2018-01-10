$(document).ready(function() {
     $('#column').click(function () {
                window.location.href = "../column";
            });
    $('#chart').click(function () {
        window.location.href = "../chart";
    });
    $('#index').click(function () {
        window.location.href = "../";
    });
    $('#rate').click(function () {
        window.location.href = "../rate";
    });
    $('#borrow').click(function() {
        window.location.href = "../borrow";
    });
    $.ajax({
        url: "../line",
        dataType: "JSON",
        async: false,
        data: {
            ac: 'eee'
        },
        success: function(data) {
            var wordata = data
            var cloudchart = echarts.init(document.getElementById('cloud'));
            var option = {
                tooltip: {},
                series: [{
                    type: 'wordCloud',
                    gridSize: 8,
                    sizeRange: [11, 40],
                    rotationRange: [-40, 80],
                    shape: 'circle',
                    width: 1000,
                    height: 600,
                    drawOutOfBound: false,
                    textStyle: {
                        normal: {
                            color: function() {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: wordata
                }]
            };

            cloudchart.setOption(option);

            window.onresize = cloudchart.resize;
        }
    });
});