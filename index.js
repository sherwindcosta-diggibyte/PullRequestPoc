const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to -----  application." });
});

const db = require("./app/model");

// db.sequelize.sync({})
//   .then(() => {
//     console.log("Synced db.");
//     // initial();
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

console.log("hello diggibyte");
console.log("hello world");