const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const DashboardRoute = require('./routes/dashboard')
const AuthRoute = require('./routes/auth')




const { ESRCH } = require("constants")
const path = require("path");
const PORT = process.env.PORT || 3001
const collections = ['releases']
const db = mongojs(databaseUrl, collections)

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/logins', express.static('logins'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}')
})



app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

db.on('error', error => {
  console.log('Database Error:', error);
});

app.post('/submit', ({ body }, res) => {
  const release = body;

  release.read = false;

  db.favorites.save(release, (error, saved) => {
    if (error) {
      console.log(error);
    } else {
      res.send(saved);
    }
  });
});

app.get('/read', (req, res) => {
  db.favorites.find({ read: true }, (error, found) => {
    if (error)
  })
}
)
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


app.use('/api/employee", DashboardRoute')