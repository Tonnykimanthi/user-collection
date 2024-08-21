const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  deleteUser,
  getSingleUser,
  updateUser,
} = require("../controllers/userController");

router.get("/", getAllUsers);

router.get("/:id", getSingleUser);

router.post("/", createUser);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
