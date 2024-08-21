const express = require("express");
const router = express.Router();
const receiveMail = require("../controllers/mailController");

router.post("/contact", receiveMail);
