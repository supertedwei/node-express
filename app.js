var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8100,'0.0.0.0',function(){
    console.log('HTTP server running on http://0.0.0.0:8100/ ');
});