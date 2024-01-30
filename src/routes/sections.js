import { Router } from "express";

import {
  createSection,
  getSection,
  getSectionById,
  updateSection,
  deleteSection,
} from "../controllers/sections.js";
import { uploadFile } from "../controllers/upload.js";
 
import authUser from "../middleware/auth.js";

const sectionRouter = Router();

sectionRouter.post("/section", authUser, createSection);
sectionRouter.get("/section", getSection);
sectionRouter.get("/section/:id", getSectionById);
sectionRouter.put("/section/:id", authUser, updateSection);
sectionRouter.delete("/section/:id", authUser, deleteSection);
sectionRouter.post("/section/upload", authUser, uploadFile);

export default sectionRouter;
