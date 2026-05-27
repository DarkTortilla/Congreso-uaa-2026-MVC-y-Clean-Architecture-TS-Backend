import { Router } from "express";
import {body} from 'express-validator';

import { User } from "../controllers/userController.ts";
const userRoutes = Router();
//post, put, delete, get, patch
// post crear
// put modificar todo el registro
// patch actualizacion parcial,
// delete eliminar 
// get obtener / buscar

userRoutes.get('/', User.getUsers);
userRoutes.post('/',[
    body('major').isMongoId().withMessage('invalid id'),
    body('semester').isInt({min: 1, max:10}).withMessage('semester must be an integer'),
    body('email').isEmail()
], User.createUser);


export default userRoutes;