import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: process.env.CLOUDINARY_DUKATAZE_UPLOADS,
    resource_type: "image",
  },
});

const multerUpload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
      req.fileValidationError = "Only image files are allowed.";
      return cb(null, false);
    }
    cb(null, true);
  },
});

export default multerUpload;
