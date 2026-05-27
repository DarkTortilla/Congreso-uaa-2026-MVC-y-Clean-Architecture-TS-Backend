import bcript from "bcrypt";

import User from "../models/User.ts";

export const getUserByEmail = async (email: string): Promise<boolean> => {
  const user = await User.findOne({ email });
  return !!user;
};

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcript.genSalt(10);
  const hashPassword = await bcript.hash(password, salt);

  return hashPassword;
};
