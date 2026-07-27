import { Request, Response } from "express";
import User from "../model/User.js";
import jwt from "jsonwebtoken";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, name, picture } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      user = await new User({
        email,
        name,
        image: picture,
      });
      user.save();
    }
    const token = jwt.sign({ user }, process.env.JWT_SEC as string, {
      expiresIn: "15d",
    });

    res.status(200).json({
      message: "Looged Success",
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
