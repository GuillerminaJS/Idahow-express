import * as usersController from '../controllers/usersController.js';

import {verifyToken} from "./../middleware/auth.js";
import express from "express";

const router = express.Router();

// Register user
router.post("/register", usersController.registerUser);

// User login function
router.post("/login", usersController.loginUser);

router.get("/user/:id", verifyToken , usersController.getUserById);
router.get("/users", usersController.showAllUsers);
router.put("/users", usersController.updateUser);
router.delete("/users/:idUser", usersController.deleteUser);
export default router;
