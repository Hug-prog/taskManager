import Users from "../models/Users.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import uid from "uid-safe";
import { createRefreshToken } from "./Token.js";

export const createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.create({
      email,
      password: await bcrypt.hash(password, 12),
    });
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "this email has not a account" });
    }
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      return res.status(400).json({ messag: "password not valid " });
    }

    const xsrfToken = uid.sync(18); //generate random xrsf token
    //create jwt token
    const jwtToken = jwt.sign({ id: user._id, xsrfToken }, process.env.JWTKEY);
    //create refresh token
    const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESHKEY);
    //store refresh token in db
    res.cookie("access_token", jwtToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    createRefreshToken(refreshToken, user._id);
    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      //secure: false,
    });
    res.status(200).json({ xsrfToken, user });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const refreshUserToken = async (req, res) => {
  const refreshToken = req.cookies["refresh_token"];
  const xsrfToken = req.headers["x-xsrf-token"];
  try {
    if (refreshToken != undefined) {
      if (getToken(refreshToken)) {
        jwt.verify(refreshToken, process.env.REFRESHKEY, (error, user) => {
          if (error) return res.status(403).json(error);
          //create JWT token
          const jwtToken = jwt.sign(
            { id: user.id, xsrfToken }, //data stored in the token
            process.env.JWTKEY //jwt's private key
          );
          res.cookie("access_token", jwtToken, {
            httpOnly: true,
            //TODO: passer le site https
            //secure: true, // true to force https
          });
          res.status(200).json({ message: "token has been refreshed" });
        });
      } else {
        res.status(404).json({ message: "refresh token isn't available" });
      }
    }
  } catch (error) {}
};

export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ messag: "this user doens't exist" });
    }
    const user = await Users.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: "request want wrong" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ message: "this user doens't exist" });
    await Users.findByIdAndRemove(id);
    res.status(200).json({ message: "User has been deleted" });
  } catch (error) {
    res.status(404).json({ message: "request want wrong" });
  }
};
