var http = require('http');
var url = require('url');
var fs = require('fs');
var newFile = require('./addStudent');
var table = require('./table');

http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if (q.pathname == "/") {
        filename = "index.html";
    } else if (q.pathname.includes("/enroll")) {
        var student = "";
        req.on('data', function(data) {
            student = data;
        });
        req.on('end', function() {
            newFile.addStudent(student, res);
        });
    } else if (q.pathname.includes("/class")) {
        table.makeTable(q.pathname, res);
    }
    if (!q.pathname.includes("/enroll")) {
        fs.readFile(filename, function(err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("404 ambot");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }
}).listen(8080);