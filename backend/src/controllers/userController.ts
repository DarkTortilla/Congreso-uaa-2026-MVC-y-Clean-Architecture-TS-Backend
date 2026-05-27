import { type Request, type Response } from "express";
import UserModel from "../models/User.ts";
import { getUserByEmail, hashPassword } from "../utils/auth.ts";
import { getMajorById } from "../utils/major.ts";

export class User {
  static createUser = async (req: Request, res: Response) => {
    //const name = req.body.name;
    const { name, lastName, email, password, semester, major } = req.body;
    try {
      // const userExist = await getUserByEmail(email);
      // const majorExist = await getMajorById(major);

      const [userExist, majorExist] = await Promise.all([
        getMajorById(major),
        getUserByEmail(email),
      ]);

      if (userExist) {
        return res.status(409).json({ error: "user already exist" });
      }
      if (!majorExist) {
        return res.status(404).json({ error: "major not found" });
      }
      const hashedPassword = await hashPassword(password);

      const user = new UserModel({
        name,
        lastName,
        password: hashedPassword,
        semester,
        major,
      });

      await user.save();

      return res.status(201).json({ message: "user created" });
    } catch (error) {
      console.error(error);
      }
  };
  static getUsers = async (req: Request, res: Response) => {
    try {
      const users = await UserModel.find().populate("major");
      return res.status(200).json(users);
    } catch (error) {
      console.error(error);
    }
  };

  static getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await UserModel.findById(id).populate("major");
      if (!user) {
        return res.status(404).json({ error: "user not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
    }
  };
}
