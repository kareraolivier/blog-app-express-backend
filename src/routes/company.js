import { Router } from "express";

import { createCompany, updateCompany, getCompany } from "../controllers/company";
import { uploadFile } from "../controllers/upload";
 
import authUser from "../middleware/auth";

const companyRouter = Router();

companyRouter.post("/company", authUser, createCompany);
companyRouter.get("/company", getCompany);
companyRouter.put("/company/:id", authUser, updateCompany);
companyRouter.post("/company/logo", authUser, uploadFile);

export default companyRouter;
