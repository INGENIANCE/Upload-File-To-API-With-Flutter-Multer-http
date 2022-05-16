const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage })

app.use(cors());
app.use(express.json());

app.post("/api/saveimg", upload.single("picture"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }

  res.status(200).send(file);
});

app.listen(8000, () => {
  console.log("server listening on port 8000");
});
