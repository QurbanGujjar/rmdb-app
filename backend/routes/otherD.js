const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const OtherD = require("../models/OtherD");
const { body, validationResult } = require("express-validator");
const e = require("cors");
// Route - 1: get all the  using:Get 'api/auth/fetchallnotes' login required
router.get("/fetchOtherDetails", fetchuser, async(req, res) => {
    try {
        const otherD = await OtherD.find({ user: req.user.id });
        res.json(otherD);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error ");
    }
});

// Add new basic details using :Post 'api/notes/addBasicDetails

router.post("/addOtherDetails", fetchuser, async(req, res) => {
    try {
        const {
            annualIncome,
            incomeSource,
            occupation,
            jobTitle,
            jobDepartment,
            employerName,
            employerAdd,
            bank,
            iban,
            zakatStatus,
            remittance,
        } = req.body;

        // if there is an error return bad request and error message
        const other = new OtherD({
            annualIncome,
            incomeSource,
            occupation,
            jobTitle,
            jobDepartment,
            employerName,
            employerAdd,
            bank,
            iban,
            zakatStatus,
            remittance,
            user: req.user.id,
        });
        const savedother = await other.save();
        res.json(savedother);
    } catch (error) {
        // console.error(error.message);
        res.status(500).send("Internal server error ");
    }
});

//Route - 3: Update a notes using:put 'api/notes/updateBasicDetails' login required
router.put("/updateOtherDetails/:id", fetchuser, async(req, res) => {
    const {
        id,
        annualIncome,
        incomeSource,
        occupation,
        jobTitle,
        jobDepartment,
        employerName,
        employerAdd,
        bank,
        iban,
        zakatStatus,
        remittance,
    } = req.body;
    // console.log(req.params.id)

    try {
        // create a new object
        const newOther = {};
        if (annualIncome) {
            newOther.annualIncome = annualIncome;
        }
        if (incomeSource) {
            newOther.incomeSource = incomeSource;
        }
        if (occupation) {
            newOther.occupation = occupation;
        }

        if (jobTitle) {
            newOther.jobTitle = jobTitle;
        }
        if (jobDepartment) {
            newOther.jobDepartment = jobDepartment;
        }
        if (employerName) {
            newOther.employerName = employerName;
        }
        if (employerAdd) {
            newOther.employerAdd = employerAdd;
        }

        if (bank) {
            newOther.bank = bank;
        }
        if (iban) {
            newOther.iban = iban;
        }

        if (zakatStatus) {
            newOther.zakatStatus = zakatStatus;
        }
        if (remittance) {
            newOther.remittance = remittance;
        }

        // Find the note to be updated and update it
        let Other = await OtherD.findById(req.params.id);
        // console.log(note.user);
        if (!Other) {
            return res.status(404).send("Not Found");
        }
        if (Other.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        Other = await OtherD.findByIdAndUpdate(
            req.params.id, { $set: newOther }, { new: true }
        );
        res.json({ Other });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error ");
    }
});

module.exports = router;