import {Router} from "express";
import userRoutes from "./user.routes.ts";
import majorRoutes from "./major.routes.ts";


const router = Router();

router.use('/users', userRoutes);
router.use('/majors', majorRoutes);

export default router;