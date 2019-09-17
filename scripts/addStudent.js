exports.addStudent = function(req,res) {
    
    var fs = require('fs'); 
    //console.log(student)
    var student;
    req.on('data',function(data){
       student = JSON.parse(data);
         console.log(student.name);

         fs.appendFile('./class/'+student.subject + '.csv', student.name + "," + student.course + "," + student.gmail + ",", function(err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });
    

   
   //console.log(student.Class);
    //var temp = (student.subject)

    ;
    

};