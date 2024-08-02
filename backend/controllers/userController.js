const { default: mongoose } = require("mongoose");
const User = require("../models/userSchema");

// GET all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: "No user found" });
  }
};

// GET a single user
const getSingleUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "The user not found" });
  }

  try {
    const user = await User.findById({ _id: id });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// CREATE a new user
const createUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;

  try {
    const user = await User.create({ firstName, lastName, email });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE user
const updateUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "The user not found" });
  }

  try {
    const user = await User.findByIdAndUpdate(id, {
      firstName,
      lastName,
      email,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "The user not found" });
  }

  try {
    const user = await User.findOneAndDelete({ _id: id });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.meassage });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  getSingleUser,
  updateUser,
};
