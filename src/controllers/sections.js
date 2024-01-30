import Sections from "../models/sections";
import reportJoiError from "../utils/functions/reportErrors";
import { sectionsSchema } from "../utils/validation";
 
const createSection = async (req, res) => {
  try {
    const prepareValidation = sectionsSchema.validate(req.body);
    if (prepareValidation.error) return reportJoiError(prepareValidation, res);

    const section = await Sections.create(req.body);
    return res.status(201).json({ message: "Section created successfully", section });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const getSection = async (req, res) => {
  try {
    const section = await Sections.findAll();
    return res.status(200).json({ message: "Section fetched successfully", section });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const getSectionById = async (req, res) => {
  try {
    const id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    const section = await Sections.findOne({ where: { id } });
    if (!section) return res.status(404).json({ message: "Section not found" });
    return res.status(200).json({ message: "Section fetched successfully", section });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const updateSection = async (req, res) => {
  try {
    const id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    const prepareValidation = sectionsSchema.validate(req.body);
    if (prepareValidation.error) return reportJoiError(prepareValidation, res);

    const isExist = await Sections.findOne({ where: { id } });
    if (!isExist) return res.status(404).json({ message: "Section not found" });

    const section = await Sections.update(req.body, { where: { id } });
    if (section) return res.status(200).json({ message: "Section updated successfully", section });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const deleteSection = async (req, res) => {
  try {
    const id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    const section = await Sections.findOne({ where: { id } });
    if (!section) return res.status(404).json({ message: "Section not found" });

    await Sections.destroy({ where: { id } });
    return res.status(200).json({ message: "Section deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export { createSection, getSection, getSectionById, updateSection, deleteSection };
