import Team from "../models/teams";
import reportJoiError from "../utils/functions/reportErrors";
import { teamSchema } from "../utils/validation";
 
const createMember = async (req, res) => {
  try {
    const prepareValidation = teamSchema.validate(req.body);
    if (prepareValidation.error) return reportJoiError(prepareValidation, res);

    const team = await Team.create(req.body);
    return res.status(201).json({ message: "Member created successfully", team });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const getMembers = async (req, res) => {
  try {
    const team = await Team.findAll();
    return res.status(200).json({ message: "Members fetched successfully", team });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const getMemberById = async (req, res) => {
  try {
    const id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    const team = await Team.findOne({ where: { id } });
    if (!team) return res.status(404).json({ message: "Team not found" });
    return res.status(200).json({ message: "Member fetched successfully", team });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

// get team by memberType
const getMemberByMemberType = async (req, res) => {
  try {
    const memberType = req.params.memberType;
    const team = await Team.findAll({ where: { memberType } });
    if (!team) return res.status(404).json({ message: "Team not found" });
    return res.status(200).json({ message: "Members fetched successfully", team });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const updateMember = async (req, res) => {
  try {
    const id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);

    const isExist = await Team.findOne({ where: { id } });
    if (!isExist) return res.status(404).json({ message: "Team not found" });

    const prepareValidation = teamSchema.validate(req.body);
    if (prepareValidation.error) return reportJoiError(prepareValidation, res);

    const team = await Team.update(req.body, { where: { id } });
    if (team) return res.status(200).json({ message: "Member updated successfully", team });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const deleteMember = async (req, res) => {
  try {
    const id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    const team = await Team.findOne({ where: { id } });
    if (!team) return res.status(404).json({ message: "Member not found" });

    await Team.destroy({ where: { id } });
    return res.status(200).json({ message: "Member deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export {
  createMember,
  getMembers,
  getMemberById,
  getMemberByMemberType,
  updateMember,
  deleteMember,
};
