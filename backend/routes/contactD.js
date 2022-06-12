const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const ContactD = require("../models/ContactD");
const { body, validationResult } = require("express-validator");
const e = require("cors");
// Route - 1: get all the  using:Get 'api/auth/fetchallnotes' login required
router.get("/fetchContactDetails", fetchuser, async(req, res) => {
    try {
        const contactD = await ContactD.find({ user: req.user.id });
        res.json(contactD);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error ");
    }
});



// Add new basic details using :Post 'api/notes/addBasicDetails

router.post("/addContactDetails", fetchuser, async(req, res) => {
    try {
        const {
            maddress,
            mcity,
            mprovince,
            mcountry,
            mphoneOff,
            mphoneRes,
            mfax,
            paddress,
            pcity,
            pprovince,
            pcountry,
            pphoneOff,
            pphoneRes,
            pfax
        } = req.body;

        // if there is an error return bad request and error message
        const contact = new ContactD({
            maddress,
            mcity,
            mprovince,
            mcountry,
            mphoneOff,
            mphoneRes,
            mfax,
            paddress,
            pcity,
            pprovince,
            pcountry,
            pphoneOff,
            pphoneRes,
            pfax,
            user: req.user.id,
        });
        const savedContact = await contact.save();
        res.json(savedContact);
    } catch (error) {
        // console.error(error.message);
        res.status(500).send("Internal server error ");
    }
});

//Route - 3: Update a notes using:put 'api/notes/updateBasicDetails' login required
router.put("/updateContactDetails/:id", fetchuser, async(req, res) => {
    const {
        id,
        maddress,
        mcity,
        mprovince,
        mcountry,
        mphoneOff,
        mphoneRes,
        mfax,
        paddress,
        pcity,
        pprovince,
        pcountry,
        pphoneOff,
        pphoneRes,
        pfax
    } = req.body;
    // console.log(req.params.id)

    try {
        // create a new object
        const newContact = {};
        if (maddress) {
            newContact.maddress = maddress;
        }
        if (mcity) {
            newContact.mcity = mcity;
        }
        if (mprovince) {
            newContact.mprovince = mprovince;
        }

        if (mcountry) {
            newContact.mcountry = mcountry;
        }
        if (mphoneOff) {
            newContact.mphoneOff = mphoneOff;
        }
        if (mphoneRes) {
            newContact.mphoneRes = mphoneRes;
        }
        if (mfax) {
            newContact.mfax = mfax;
        }
        if (paddress) {
            newContact.paddress = paddress;
        }
        if (pcity) {
            newContact.pcity = pcity;
        }

        if (pprovince) {
            newContact.pprovince = pprovince;
        }
        if (pcountry) {
            newContact.pcountry = pcountry;
        }
        if (pphoneOff) {
            newContact.pphoneOff = pphoneOff;
        }
        // ------------
        if (pphoneRes) {
            newContact.pphoneRes = pphoneRes;
        }
        if (pfax) {
            newContact.pfax = pfax;
        }

        // Find the note to be updated and update it
        let Contact = await ContactD.findById(req.params.id);
        // console.log(note.user);
        if (!Contact) {
            return res.status(404).send("Not Found");
        }
        if (Contact.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        Contact = await ContactD.findByIdAndUpdate(
            req.params.id, { $set: newContact }, { new: true }
        );
        res.json({ Contact });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error ");
    }
});




module.exports = router;