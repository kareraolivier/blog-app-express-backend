import { Router } from "express";

import {
  createUser,
  userLogin,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user";
 
import authUser from "../middleware/auth";

const userRouter = Router();

userRouter.post("/users", authUser, createUser);
userRouter.post("/users/auth", userLogin);
userRouter.get("/users", authUser, getUsers);
userRouter.get("/users/:id", authUser, getUser);
userRouter.put("/users/:id", authUser, updateUser);
userRouter.delete("/users/:id", authUser, deleteUser);

export default userRouter;
