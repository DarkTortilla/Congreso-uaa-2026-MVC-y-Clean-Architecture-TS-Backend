import { Router } from "express";

import { Major } from "../controllers/majorController.ts";

const majorRoutes = Router();

majorRoutes.post("/", Major.createMajor);
majorRoutes.get("/", Major.getAllMajors);
majorRoutes.get("/:id", Major.getMajorById);
majorRoutes.put("/:id", Major.updateMajor);
majorRoutes.delete("/:id", Major.deleteMajor);

export default majorRoutes;