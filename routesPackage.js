const express = require('express');
const multer = require('multer');
const userDetails = require('./controller/Student')

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.get('/student/findAll', userDetails.findAll);
router.get('/student/:id', userDetails.findById);
router.post('/students/save-csv-file',upload.single('csvFile'), userDetails.fileUpload);

module.exports = router;

