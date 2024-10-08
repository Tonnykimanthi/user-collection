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
    app.listen(process.env.PORT, () => {
      console.log(`Listening to port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));
