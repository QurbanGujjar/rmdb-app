const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const NomineeD = require("../models/NomineeD");
const { body, validationResult } = require("express-validator");
const e = require("cors");
// Route - 1: get all the  using:Get 'api/auth/fetchNomineeDetails' login required
router.get("/fetchNomineeDetails", fetchuser, async(req, res) => {
    try {
        const nomineeD = await NomineeD.find({ user: req.user.id });
        res.json(nomineeD);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error ");
    }
});

// Add new basic details using :Post 'api/notes/addBasicDetails

router.post("/addNomineeDetails", fetchuser, async(req, res) => {
    try {
        const { rName, relation, uinType, uin, uinExpiry, mobile, maddress } =
        req.body;

        // if there is an error return bad request and error message
        const contact = new NomineeD({
            rName,
            relation,
            uinType,
            uin,
            uinExpiry,
            mobile,
            maddress,
            user: req.user.id,
        });
        const savedNominee = await contact.save();
        res.json(savedNominee);
    } catch (error) {
        // console.error(error.message);
        res.status(500).send("Internal server error ");
    }
});

//Route - 3: Update a notes using:put 'api/notes/updateBasicDetails' login required
router.put("/updateNomineeDetails/:id", fetchuser, async(req, res) => {
    const { id, rName, relation, uinType, uin, uinExpiry, mobile, maddress } =
    req.body;
    // console.log(req.params.id)

    try {
        // create a new object
        const newNominee = {};
        if (maddress) {
            newNominee.maddress = maddress;
        }
        if (rName) {
            newNominee.rName = rName;
        }
        if (relation) {
            newNominee.relation = relation;
        }

        if (uinType) {
            newNominee.uinType = uinType;
        }
        if (uin) {
            newNominee.uin = uin;
        }
        if (uinExpiry) {
            newNominee.uinExpiry = uinExpiry;
        }
        if (mobile) {
            newNominee.mobile = mobile;
        }



        // Find the note to be updated and update it
        let Nominee = await NomineeD.findById(req.params.id);
        // console.log(note.user);
        if (!Nominee) {
            return res.status(404).send("Not Found");
        }
        if (Nominee.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        Nominee = await NomineeD.findByIdAndUpdate(
            req.params.id, { $set: newNominee }, { new: true }
        );
        res.json({ Nominee });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error ");
    }
});

module.exports = router;