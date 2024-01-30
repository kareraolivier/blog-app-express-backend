import Event from "../models/events";
import reportJoiError from "../utils/functions/reportErrors";
import { eventSchema } from "../utils/validation";
 
const createEvent = async (req, res) => {
  try {
    const {title} = req.body;

    const prepareValidation = eventSchema.validate(req.body);
    if (prepareValidation.error) return reportJoiError(prepareValidation, res);

    const isExist = await Event.findOne({ where: { title } });
    if (isExist) return res.status(400).json({ message: "Event already exists" });

    const event = await Event.create(req.body);
    if (event) res.status(201).json({ message: "Event created successfully", event });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const getEvent = async (req, res) => {
  try {
    const event = await Event.findAll();
    return res.status(200).json({ message: "events fetched successfully", event });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const getEventById = async (req, res) => {
  try {
    const id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    const event = await Event.findOne({ where: { id } });
    if (!event) return res.status(404).json({ message: "event not found" });
    return res.status(200).json({ message: "event fetched successfully", event });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const updateEvent = async (req, res) => {
  try {
    const id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    const isExist = await Event.findOne({ where: { id } });
    if (!isExist) return res.status(404).json({ message: "Event not found" });

    const prepareValidation = eventSchema.validate(req.body);
    if (prepareValidation.error) return reportJoiError(prepareValidation, res);

    const event = await Event.update(req.body, { where: { id } });
    if (event) return res.status(200).json({ message: "Event updated successfully", blog: event });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    const isExist = await Event.findOne({ where: { id } });
    if (!isExist) return res.status(404).json({ message: "Event not found" });

    const event = await Event.destroy({ where: { id } });
    return res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export { createEvent, getEvent, getEventById, updateEvent, deleteEvent };
