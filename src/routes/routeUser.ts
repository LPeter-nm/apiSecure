import { Router } from "express";
import { registerController } from "../controllers/registerController";
import { singInController } from "../controllers/singinController";


const router = Router();

router.post('/register', registerController);
router.post('/login', singInController);

export {router as RouterUser}