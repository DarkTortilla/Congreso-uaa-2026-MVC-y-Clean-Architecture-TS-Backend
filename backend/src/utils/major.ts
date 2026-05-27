import Major from "../models/Major.ts";

export const getMajorById = async (id: string): Promise<boolean> => {
  const major = await Major.findById(id);
  return !!major;
};