const express = require("express");
cont morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()


const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();

// Define API routes here
const authRoutes = require('./routes/auth')

//app middlewares
app.use(morgan('dev'))

// middleware
app.use('/api', authRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
