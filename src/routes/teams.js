import { Router } from "express";

import {
  createMember,
  getMembers,
  getMemberById,
  getMemberByMemberType,
  updateMember,
  deleteMember,
} from "../controllers/teams";
 
import { uploadFile } from "../controllers/upload";

import authUser from "../middleware/auth";

const teamRouter = Router();

teamRouter.post("/team", authUser, createMember);
teamRouter.get("/team", getMembers);
teamRouter.get("/team/:id", getMemberById);
teamRouter.get("/team/memberType/:memberType", getMemberByMemberType);
teamRouter.put("/team/:id", authUser, updateMember);
teamRouter.delete("/team/:id", authUser, deleteMember);
teamRouter.post("/team/upload", authUser, uploadFile);

export default teamRouter;