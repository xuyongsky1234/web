var connect = require('connect'); 
var http = require('http'); 
var port = process.env.PORT || 3000; 
var static = connect.static('public'); 
 
console.log('xuyongsky1234 on http://localhost:' + port); 
 
http.createServer( connect().use( static ) ).listen( port ); 
