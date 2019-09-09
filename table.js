exports.makeTable = function(file){
    var fs = require("fs");
    var temp = file.split("/")[2] + ".csv";
    var content ="";
    var x = false;
    try {
        var data = fs.readFileSync(temp, 'utf8');
        content = data;
    } catch(e) {
        x = true;
        content = 'No such class named '+temp+' created yet!';
    }
    if (x == false) {
        var table = "<table style = 'text-align : center'><tr><th>Name</th><th>Course</th><th>Gmail</th></tr></tr>";
        content = content.split(",");
        for (var i=0;i<content.length;++i) {
            if (i%3 == 0) {
                table += "</tr><tr>";
            }
            table += "<td>"+content[i]+"</td>";
        }
        table += "</tr></table>";
        console.log(content);
    }
    return table;
}