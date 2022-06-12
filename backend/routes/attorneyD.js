const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const AttorneyD = require("../models/AttorneyD");
const { body, validationResult } = require("express-validator");
const e = require("cors");
// Route - 1: get all the  using:Get 'api/auth/fetchallnotes' login required
router.get("/fetchAttorneyDetails", fetchuser, async(req, res) => {
    try {
        const attorneyD = await AttorneyD.find({ user: req.user.id });
        res.json(attorneyD);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error ");
    }
});



// Add new basic details using :Post 'api/notes/addBasicDetails

router.post("/addAttorneyDetails", fetchuser, async(req, res) => {
    try {
        const {
            cName,
            uinType,
            uin,
            uinExpiry,
            mobile,
            email,
            maddress,
            mcity,
            mprovince,
            mcountry,
            mphoneRes,
            mfax,
        } = req.body;

        // if there is an error return bad request and error message
        const attorney = new AttorneyD({
            cName,
            uinType,
            uin,
            uinExpiry,
            mobile,
            email,
            maddress,
            mcity,
            mprovince,
            mcountry,
            mphoneRes,
            mfax,
            user: req.user.id,
        });
        const savedAttorney = await attorney.save();
        res.json(savedAttorney);
    } catch (error) {
        // console.error(error.message);
        res.status(500).send("Internal server error ");
    }
});

//Route - 3: Update a notes using:put 'api/notes/updateBasicDetails' login required
router.put("/updateAttorneyDetails/:id", fetchuser, async(req, res) => {
    const {
        id,
        cName,
        uinType,
        uin,
        uinExpiry,
        mobile,
        email,
        maddress,
        mcity,
        mprovince,
        mcountry,
        mphoneRes,
        mfax,
    } = req.body;
    // console.log(req.params.id)

    try {
        // create a new object
        const newAttorney = {};
        if (maddress) {
            newAttorney.maddress = maddress;
        }
        if (mcity) {
            newAttorney.mcity = mcity;
        }
        if (mprovince) {
            newAttorney.mprovince = mprovince;
        }

        if (mcountry) {
            newAttorney.mcountry = mcountry;
        }
        if (mobile) {
            newAttorney.mobile = mobile;
        }
        if (mphoneRes) {
            newAttorney.mphoneRes = mphoneRes;
        }
        if (mfax) {
            newAttorney.mfax = mfax;
        }
        if (cName) {
            newAttorney.cName = cName;
        }
        if (uinType) {
            newAttorney.uinType = uinType;
        }

        if (uin) {
            newAttorney.uin = uin;
        }
        if (uinExpiry) {
            newAttorney.uinExpiry = uinExpiry;
        }
        if (email) {
            newAttorney.email = email;
        }


        // Find the note to be updated and update it
        let Attorney = await AttorneyD.findById(req.params.id);
        // console.log(note.user);
        if (!Attorney) {
            return res.status(404).send("Not Found");
        }
        if (Attorney.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        Attorney = await AttorneyD.findByIdAndUpdate(
            req.params.id, { $set: newAttorney }, { new: true }
        );
        res.json({ Attorney });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error ");
    }
});




module.exports = router;