import type { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import type { Request } from "express-validator/lib/base.js";
import { comparePassword, getUserByEmail } from "../utils/auth.ts";
import dotenv from "dotenv";
import  UserModel from "../models/User.ts";
dotenv.config();

export class Auth {
  private static generateToken = (userId: string, name: string, role: string) => {
    const jwtSecret = process.env.JWT_SECRET!;
    return jwt.sign({ userId, name, role }, jwtSecret, {
      expiresIn: "1h",
    });
  };

  static login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      const userExist = await getUserByEmail(email);

      if (!userExist) {
        return res.status(404).json({message: 'user not found'});
      }
      const user = await UserModel.findOne({email});

      const isMatch =await comparePassword(user?.password.toString()!, password);
      if(!isMatch){
        return res.sendStatus(401).json(
           { message:'invalid credentials'})
      }
      const token = Auth.generateToken( user?.id!, user?.name.toString()!, user?.role! );

      res.status(200).json({token})

    } catch (error) {}
  };
}
