exports.addStudent= function(student) {
    var fs = require('fs');
    student = JSON.parse(student);
    var temp = (student.Class).split(" ").join("-");
    fs.appendFile(temp + '.csv', student.name+","+student.course + "," + student.gmail, function (err) {
    if (err) throw err;
    console.log('Saved!');
    });
    return student.name+ " is successfully added";
}