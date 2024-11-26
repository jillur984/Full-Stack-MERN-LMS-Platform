const User = require("../../models/User");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  const { userName, userEmail, password, role } = req.body;

  const existingUser = await User.findOne({
    $or: [{ userName }, { userEmail }],
  });

  if (existingUser) {
    return res.status(400).json({
      success: true,
      message: "Email and Password Already Exits",
    });
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    userEmail,
    userName,
    role,
    password: hashPassword,
  });
  await newUser.save();

  return res.status(201).json({
    status: true,
    message: "User registered SuccesFully",
  });
};

module.exports = { registerUser };
