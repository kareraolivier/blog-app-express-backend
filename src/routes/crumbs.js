import { Router } from "express";
 
import {
  createCrumb,
  getCrumb,
  getCrumbById,
  updateCrumb,
  deleteCrumb,
} from "../controllers/crumb";
import { uploadFile } from "../controllers/upload";

import authUser from "../middleware/auth";

const crumbRouter = Router();

crumbRouter.post("/crumb", authUser, createCrumb);
crumbRouter.get("/crumb", getCrumb);
crumbRouter.get("/crumb/:id", getCrumbById);
crumbRouter.put("/crumb/:id", authUser, updateCrumb);
crumbRouter.delete("/crumb/:id", authUser, deleteCrumb);
crumbRouter.post("/crumb/upload", authUser, uploadFile);

export default crumbRouter;
