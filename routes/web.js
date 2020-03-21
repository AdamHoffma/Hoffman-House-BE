
const path = require('path');
const express = require('express');
const multer  = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "")
    },
    filename: function (req, file, cb) {
        // You could rename the file name
        // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))

        // You could use the original name
        cb(null, file.originalname)
    }
});

var upload = multer({dest: 'uploads/'})

const router = express.Router();

// Upload Image
router.post("/photo", upload.single('products'), (req, res, next) => {
    console.log(req.body)
    return res.json({
        image: req.body
    });
});

router.get("/photo", (req, res) => {
    return res.json({
        image: req.body
    })
})

module.exports = router;