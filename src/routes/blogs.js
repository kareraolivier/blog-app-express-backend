import { Router } from "express";

import { createBlog, getBlog, getBlogById, updateBlog, deleteBlog } from "../controllers/blogs";
import { uploadFile } from "../controllers/upload";
 
import authUser from "../middleware/auth";

const blogRouter = Router();

blogRouter.post("/blog", authUser, createBlog);
blogRouter.get("/blog", getBlog);
blogRouter.get("/blog/:id", getBlogById);
blogRouter.put("/blog/:id", authUser, updateBlog);
blogRouter.delete("/blog/:id", authUser, deleteBlog);
blogRouter.post("/blog/upload", authUser, uploadFile);

export default blogRouter;
