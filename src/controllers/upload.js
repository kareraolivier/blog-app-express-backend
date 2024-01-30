import multerUpload from "../middleware/multer";
import uploadImage from "../services/uploadImage";
 
export const uploadFile = async (req, res) => {
  try {
    multerUpload.single("image")(req, res, async (error) => {
      if (req.fileValidationError) {
        console.error(req.fileValidationError);
        return res.status(400).json({ message: req.fileValidationError });
      }
      if (!req.file) {
        return res.status(400).json({ message: "No image file provided." });
      }
      if (error) {
        console.error(error);
        return res.status(500).send(`500 Internal error: ${error}`);
      }

      const profileUrl = await uploadImage(req.file);
      if (profileUrl) {
        res.status(200).json({
          message: "Image uploaded successfully",
          profileUrl,
        });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(`500 Internal error: ${error}`);
  }
};
