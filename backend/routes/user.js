import express from "express";
import asyncHandler from "express-async-handler";
import { registerValidation, loginValidation } from "../validation.js";
import bcrypt from "bcryptjs";
import * as data from "../data.js";
import User from "../models/user.js";
import { generateToken, isAdmin, isAuth, isAuthWithCookie, setCookie } from "./../utils.js";
import cookie from "cookie";

const router = express.Router();

router.get(
  "/seed",
  // isAuth,
  // isAdmin,
  asyncHandler(async (req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

router.post(
  "/signup",
  asyncHandler(async (req, res) => {
    // validate user data
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    // checking if the user is already in the data base :
    const emailExist = await User.findOne({ email: req.body.email });
    const phoneNumberExist = await User.findOne({
      phoneNumber: req.body.phoneNumber,
    });

    if (emailExist) return res.status(200).json({ success: false, message: "این ایمیل در حال حاضر وجود دارد" });
    if (phoneNumberExist) return res.status(200).json({ success: false, message: "این شماره موبایل وجود دارد" });

    // HASH PASSWORD :
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt);

    const user = new User({
      name: req.body.name,
      email: req.body.email.toLowerCase(),
      phoneNumber: req.body.phoneNumber,
      password: hashedPassword,
    });

    try {
      //? set the httpOnly cookie from back-end
      setCookie(user, res);

      const savedUser = await user.save();
      res.json({ success: true, user: {
        _id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        isAdmin: savedUser.isAdmin,
        phoneNumber: savedUser.phoneNumber,
        profile: ""
      }});
    } catch (error) {
      res.status(400).send(error);
    }
  })
);

router.post(
  "/signin",
  asyncHandler(async (req, res) => {
    // validate user data
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    // checking if the email exists :
    const user = await User.findOne({ email: req.body.email.toLowerCase() });
    if (!user) return res.status(200).json({ success: false, message: "ایمیل وجود ندارد" });

    // PASSWORD IS CORRECT :
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(200).json({ success: false, message: "ایمیل یا رمز عبور اشتباه است" });

    //? set the httpOnly cookie from back-end
    setCookie(user, res);

    res.send({ success: true, user: {
      _id: user._id,
      name: user.name,
      phoneNumber: user.phoneNumber,
      email: user.email,
      isAdmin: user.isAdmin,
      profile: user.profile
    } });
  })
);

router.get(
  "/logout",
  asyncHandler(async (req, res) => {
    const cookieOptions = {
      maxAge: 1,
      httpOnly: true,
      signed: true,
      sameSite: "Lax",
      secure: true,
      path: "/",
      domain: process.env.NODE_ENV === "development" ? "localhost" : ".fronthooks.ir",
    };
    // Set cookie
    res.cookie("userToken", null, cookieOptions); //
    return res.status(200).json({ roles: null, auth: false });
  })
);

router.get(
  "/load",
  isAuthWithCookie,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select("name email phoneNumber profile");
    if (user) {
      return res.status(200).send({ success: true, user });
    }
    return res.status(400).json({ message: "user no found" });
  })
);

export default router;
