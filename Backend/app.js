const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const userRoutes = require("./routes/users.routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
 

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);

module.exports = app;
