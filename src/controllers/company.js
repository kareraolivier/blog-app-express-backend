import Company from "../models/company";
import reportJoiError from "../utils/functions/reportErrors";
import { companySchema } from "../utils/validation";
 
const createCompany = async (req, res) => {
  try {
    const prepareValidation = companySchema.validate(req.body);
    if (prepareValidation.error) return reportJoiError(prepareValidation, res);

    const company = await Company.create(req.body);
    return res.status(201).json({ message: "Company created successfully", company });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const getCompany = async (req, res) => {
  try {
    const company = await Company.findOne();
    return res.status(200).json({ message: "Company fetched successfully", company });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const updateCompany = async (req, res) => {
  try {
    const prepareValidation = companySchema.validate(req.body);
    if (prepareValidation.error) return reportJoiError(prepareValidation, res);

    const company = await Company.update(req.body, { where: { id: req.params.id } });
    return res.status(201).json({ message: "Company updated successfully", company });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export { createCompany, getCompany, updateCompany };
