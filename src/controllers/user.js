import User from "../models/user";
import reportJoiError from "../utils/functions/reportErrors";
import { encode, getDecodedPassword } from "../utils/functions/encodePassword";
import jwt from "jsonwebtoken";
 
import { userSchema, loginSchema, updateUserSchema } from "../utils/validation";

const createUser = async (req, res) => {
  try {
    const { email } = req.body;

    const prepareValidation = userSchema.validate(req.body);
    if (prepareValidation.error) return reportJoiError(prepareValidation, res);

    req.body.password = await encode(req.body.password);
    const isExist = await User.findOne({ where: { email } });
    if (isExist) return res.status(409).json({ message: "User already exist" });

    const user = await User.create(req.body);
    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const prepareValidation = loginSchema.validate(req.body);
    if (prepareValidation.error) return reportJoiError(prepareValidation, res);

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "Invalid credentials" });

    const decodedPassword = await getDecodedPassword(password, user.password);
    if (password != decodedPassword)
      return res.status(401).json({ message: "Invalid credentials" });

    let userObj = {
      names: user.names,
      username: user.username,
      email: user.email,
    };

    jwt.sign({ userObj }, process.env.JWT_SECRET, { expiresIn: "1h" }, (err, token) => {
      if (err) return res.status(500).json({ message: "Internal server error", err });
      return res.status(200).json({ message: "User logged in successfully", token });
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json({ message: "Users fetched successfully", users });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const getUser = async (req, res) => {
  try {
    const userid = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    const user = await User.findOne({ where: { userid } });
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.status(200).json({ message: "User fetched successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const updateUser = async (req, res) => {
  try {
    const userid = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    const { names, username, email } = req.body;
    const data = { names, username, email };

    const prepareValidation = updateUserSchema.validate(data);
    if (prepareValidation.error) return reportJoiError(prepareValidation, res);

    const user = await User.findOne({ where: { userid } });
    if (!user) return res.status(404).json({ message: "User not found" });
    const updatedUser = await User.update(data, { where: { userid } });
    return res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userid = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    const user = await User.findOne({ where: { userid } });
    if (!user) return res.status(404).json({ message: "User not found" });
    const deletedUser = await User.destroy({ where: { userid } });
    if (deletedUser) return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export { createUser, userLogin, getUsers, getUser, updateUser, deleteUser };
