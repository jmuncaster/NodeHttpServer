var http = require('http')
var fs = require('fs')


http.createServer(function(request, response) {

  console.log('Got request, method = ' + request.method)


  // GET
  if (request.method == 'GET') {
    response.writeHead(200, {'Content-Type': 'html'});
    fs.readFile('page.html', function(err, contents) {
      response.end(contents);
    });
  }

  // POST
  if (request.method == 'POST') {
    request.on('data', function(chunk) {
      console.log("Received body data:");
      console.log(chunk.toString());
    });

    request.on('end', function() {
      response.writeHead(200, "OK", {'Content-Type': 'text/html'});
      response.end("<html>OK</html>");
    });
  }


}).listen(8080);

