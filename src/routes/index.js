import { Router } from "express";

import userRouter from "./user";
import companyRouter from "./company";
import crumbRouter from "./crumbs";
import sectionRouter from "./sections";
import blogRouter from "./blogs";
import eventRouter from "./events";
import teamRouter from "./teams";
 
const routes = Router();

routes.use(userRouter);
routes.use(companyRouter);
routes.use(crumbRouter);
routes.use(sectionRouter);
routes.use(blogRouter);
routes.use(eventRouter);
routes.use(teamRouter);

export default routes;
