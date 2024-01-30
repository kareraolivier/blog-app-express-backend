import { Router } from "express";
 
import {
  createEvent,
  getEvent,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../controllers/events";
import { uploadFile } from "../controllers/upload";

import authUser from "../middleware/auth";

const eventRouter = Router();

eventRouter.post("/event", authUser, createEvent);
eventRouter.get("/event", getEvent);
eventRouter.get("/event/:id", getEventById);
eventRouter.put("/event/:id", authUser, updateEvent);
eventRouter.delete("/event/:id", authUser, deleteEvent);
eventRouter.post("/event/upload", authUser, uploadFile);

export default eventRouter;
