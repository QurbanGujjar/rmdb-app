const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const JWT_secret = "qurbanisagoodb$oy";
const multer = require("multer");


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./../public/upload");
    },
    filename: function(req, file, cb) {
        // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const uniqueSuffix = Date.now();
        // console.log(file, this.fieldname)
        // cb(null, file.originalname + '-' + uniqueSuffix)
        cb(null, uniqueSuffix + file.originalname);
    },
});
const upload = multer({
    storage: storage,
});

// upload single file
let singleFile = upload.single("upload")
    // upload multiple files
let multipleFile = upload.fields([{ name: "relative_affidavit", maxCount: 1 }, { name: "proof_iban", maxCount: 1 }, { name: "cnic_front", maxCount: 1 }, { name: "cnic_back", maxCount: 1 }])

//  Route-1: Create a user using:Post 'api/auth/createuser' does not required auth
router.post(
    "/createuser",
    async(req, res) => {
        let success = false;
        try {
            // check wether the user with this email exits already
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res
                    .status(400)
                    .json({ success, error: "Sorry a user with this email already exits" });
            }
            // destructuring
            const { username, email, password, } = req.body
                // change  password to hash by using salt
            const salt = await bcrypt.genSaltSync(10);
            const secPass = await bcrypt.hashSync(password, salt);
            // create a new user
            user = await User.create({
                username: username,
                email: email,
                password: secPass,
            });
            // return token to the user
            const data = {
                user: {
                    id: user.id,
                },
            };
            // console.log(data)
            const authtoken = jwt.sign(data, JWT_secret);
            // console.log(authtoken)
            success = true
            res.json({ success, authtoken });
            // success = true
            // res.json({ success, error: "nice" })
        } catch (error) {
            // console.log(error.message)
            res.status(500).send("Some Error occured")
        }
    }
);

//Route - 2: Authenticate a user using:Post 'api/auth/login' does not required auth
router.post(
    "/login",
    async(req, res) => {
        let success = false;
        // if there is an error return bad request and error message
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }
        // destructure email and password from the body
        const { email, password } = req.body;

        try {
            // console.log(email, password)
            let user = await User.findOne({ email });
            if (!user) {
                return res
                    .status(400)
                    .json({ success, error: "Please try to login with correct credentials" });
            }
            // compare password user paswword
            const passwordCompare = await bcrypt.compare(password, user.password);

            if (!passwordCompare) {

                return res
                    .status(400)
                    .json({ success, error: "Please try to login with correct credentials p" });
            }

            // return token to the user
            const data = {
                user: {
                    id: user.id,
                },
            };
            const authtoken = jwt.sign(data, JWT_secret);
            // sending token
            success = true
            res.json({ success, authtoken });
        } catch (error) {
            // console.error(error.message);
            res.status(500).send("Internal server error ");
        }
    }
);

//Route - 3: GetLoggedin a user using:Post 'api/auth/getuser' login required


router.post("/getuser", fetchuser, async(req, res) => {


    try {

        userID = req.user.id
        const user = await User.findById(userID).select("-password")
        res.send(user)


    } catch (error) {
        // console.error(error.message);
        res.status(500).send("Internal server error ");
    }
})

module.exports = router;