$(document).ready(function() {
    $('#column').click(function () {
                window.location.href = "../column";
            });
    $('#chart').click(function () {
        window.location.href = "../chart";
    });
    $('#rate').click(function () {
        window.location.href = "../rate";
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
        data:{ac:'ddd'},
        success: function(data) {
            var html="";
            var html1="";
            for(var i =0;i<data.list.length;i++){
                html+=" <div class='ratescore' > <div class='xh'>["+(i+1)+"]</div><div class='reatee' >";
                html+="<div class='ratedd' ><div>书名：</div><div>"+data.list[i]['bookn']+"</div>";
                html+="</div><div class='ratedd' ><div>作者：</div><div>"+data.list[i]['author']+"</div></div></div>";
                html+="<div class='ratekk' > <div>评分</div><div>"+data.list[i]['rate']+"</div></div></div>"
            }
            for(var i =0;i<data.sclist.length;i++){
                html1+=" <div class='ratescore' > <div class='xh'>["+(i+1)+"]</div><div class='reatee' >";
                html1+="<div class='ratedd' ><div>书名：</div><div>"+data.sclist[i]['bookn']+"</div>";
                html1+="</div><div class='ratedd' ><div>作者：</div><div>"+data.sclist[i]['author']+"</div></div></div>";
                html1+="<div class='ratekk' > <div>评分人数</div><div>"+data.sclist[i]['score']+"</div></div></div>"
            }
            $('#ratelist').html(html);
            $('#scorelist').html(html1);
        }
    });
});