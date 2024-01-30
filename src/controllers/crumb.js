import Breadcrumb from "../models/breadcrumbs";
import { crumbSchema } from "../utils/validation";
import reportJoiError from "../utils/functions/reportErrors";
 
const createCrumb = async (req, res) => {
  try {
    const prepareValidation = crumbSchema.validate(req.body);
    if (prepareValidation.error) return reportJoiError(prepareValidation, res);

    const isExist = await Breadcrumb.findOne({ where: { pageTitle: req.body.pageTitle } });
    if (isExist) return res.status(409).json({ message: "Crumb already exist" });

    const crumb = await Breadcrumb.create(req.body);
    return res.status(201).json({ message: "Crumb created successfully", crumb });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const getCrumb = async (req, res) => {
  try {
    const crumb = await Breadcrumb.findAll();
    return res.status(200).json({ message: "Crumb fetched successfully", crumb });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const getCrumbById = async (req, res) => {
  try {
    const id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    const crumb = await Breadcrumb.findOne({ where: { id } });
    if (!crumb) return res.status(404).json({ message: "Crumb not found" });
    return res.status(200).json({ message: "Crumb fetched successfully", crumb });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const updateCrumb = async (req, res) => {
  try {
    const id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    const prepareValidation = crumbSchema.validate(req.body);
    if (prepareValidation.error) return reportJoiError(prepareValidation, res);

    const isExist = await Breadcrumb.findOne({ where: { id } });
    if (!isExist) return res.status(404).json({ message: "Crumb not found" });

    const crumb = await Breadcrumb.update(req.body, { where: { id } });
    if (crumb) return res.status(200).json({ message: "Crumb updated successfully", crumb });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const deleteCrumb = async (req, res) => {
  try {
    const id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    const crumb = await Breadcrumb.findOne({ where: { id } });
    if (!crumb) return res.status(404).json({ message: "Crumb not found" });
    const deletedCrumb = await Breadcrumb.destroy({ where: { id } });
    if (deletedCrumb) return res.status(200).json({ message: "Crumb deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export { createCrumb, getCrumb, getCrumbById, updateCrumb, deleteCrumb };
