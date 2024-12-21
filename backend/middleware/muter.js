import multer from "multer";

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    console.log(file, "form the multer");
    return cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

export default upload;
