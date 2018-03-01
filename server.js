var express = require('express');
var app = express();




app.use(express.static('public'));


app.use("/auth-success", function(req, res) {
  res.status(200);
  res.send("OK");
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
