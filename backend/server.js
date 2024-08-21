require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const usersRoutes = require("./routes/users");
const mailRoutes = require("./routes/mail");

app.use(cors());

app.use(express.json());

app.use(mailRoutes);
app.use(usersRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(4000, () => {
      console.log("Listening to port 4000");
    });
  })
  .catch((error) => console.log(error));
