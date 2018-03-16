var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/timestamp/:date_string?', (req, res) => {
  let dateParam = req.params.date_string;
  if(!isNaN(req.params.date_string)) {
    dateParam = parseInt(dateParam);
  }
  const date = !dateParam ? new Date() : new Date(dateParam);
  const unixDate = date.getTime();
  const utcDate = date.toUTCString();
  if(utcDate === 'Invalid Date') {
    res.json({
      error: "Invalid Date"
    })
  } else {
    res.json({
      unix: unixDate,
      utc: utcDate
    });
  }
});


var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});