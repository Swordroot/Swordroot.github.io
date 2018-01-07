var today = new Date();

var month = today.getMonth()+1;
var day = today.getDate();

var md = month * 100 + day;

$(function(){
    showClasses();
});

function showClasses(){
    for(var i = 1;i<=10;i++){
        var filterredArray = classesData.filter(function(element){
            return element.学科番号 == i && element.月日 > md;
        }).sort(function(a,b){
            if(a.月日 > b.月日){
                return 1;
            }else{
                return -1;
            }
        }).slice(0,5);
        var element = $("<div></div>");
        var table = $('<table class="table table-striped"></table>');
        for(var j=0;j<filterredArray.length;j++){
            var tableRow = $("<tr></tr>");
            tableRow.append("<td>" + filterredArray[j].学科番号 + "</td>");
            tableRow.append("<td>" + filterredArray[j].月 + "月" + filterredArray[j].日 + "日</td>")
            tableRow.append("<td>" + filterredArray[j].時限 + "限</td>");
            table.append(tableRow);
        }
        element.append(table);
        $("body").append(element);
    }
}