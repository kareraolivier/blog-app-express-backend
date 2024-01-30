import Blog from "../models/blogs";
import reportJoiError from "../utils/functions/reportErrors";
import { blogSchema } from "../utils/validation";
 
const createBlog = async (req, res) => {
  try {
    const {title} = req.body;
    const prepareValidation = blogSchema.validate(req.body);
    if (prepareValidation.error) return reportJoiError(prepareValidation, res);

    const isExist = await Blog.findOne({ where: { title } });
    if (isExist) return res.status(400).json({ message: "Blog already exists" });

    const blog = await Blog.create(req.body);
    if (blog) res.status(201).json({ message: "Blog created successfully", blog });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findAll();
    return res.status(200).json({ message: "Blogs fetched successfully", blog });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const getBlogById = async (req, res) => {
  try {
    const id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    const blog = await Blog.findOne({ where: { id } });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    return res.status(200).json({ message: "Blog fetched successfully", blog });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const updateBlog = async (req, res) => {
  try {
    const id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    const isExist = await Blog.findOne({ where: { id } });
    if (!isExist) return res.status(404).json({ message: "Blog not found" });
    
    const prepareValidation = blogSchema.validate(req.body);
    if (prepareValidation.error) return reportJoiError(prepareValidation, res);

    const blog = await Blog.update(req.body, { where: { id } });
    if (blog) return res.status(200).json({ message: "Blog updated successfully", blog });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    const isExist = await Blog.findOne({ where: { id } });
    if (!isExist) return res.status(404).json({ message: "Blog not found" });

    const blog = await Blog.destroy({ where: { id } });
    return res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export { createBlog, getBlog, getBlogById, updateBlog, deleteBlog };
