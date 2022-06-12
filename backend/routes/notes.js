const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
const e = require("cors");
//Route - 1: get all the notes using:Get 'api/auth/fetchallnotes' login required
router.get("/fetchallnotes", fetchuser, async(req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error ");
    }
});

router.get("/fetchBasicDetails", fetchuser, async(req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error ");
    }
});

// Add new basic details using :Post 'api/notes/addBasicDetails

router.post("/addBasicDetails", fetchuser, async(req, res) => {
    try {
        const {
            accountCode,
            openDate,
            unkNumber,
            unkIssueDate,
            cName,
            cFName,
            resStatus,
            nationality,
            maritalStatus,
            placeOfBirth,
            uinType,
            uin,
            dateOfIssue,
            uinExpiry,
            email,
            mobile,
            ivrService,
            motherName,
            motherDOB,
        } = req.body;
        console.log(cName);
        // if there is an error return bad request and error message
        const note = new Notes({
            accountCode,
            openDate,
            unkNumber,
            unkIssueDate,
            cName,
            cFName,
            resStatus,
            nationality,
            maritalStatus,
            placeOfBirth,
            uinType,
            uin,
            dateOfIssue,
            uinExpiry,
            email,
            mobile,
            ivrService,
            motherName,
            motherDOB,
            user: req.user.id,
        });
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        // console.error(error.message);
        res.status(500).send("Internal server error ");
    }
});

//Route - 3: Update a notes using:put 'api/notes/updateBasicDetails' login required
router.put("/updateBasicDetails/:id", fetchuser, async(req, res) => {
    const { id, accountCode, openDate, unkNumber, unkIssueDate, cName, cFName, resStatus, nationality, maritalStatus, placeOfBirth, uinType, uin, dateOfIssue, uinExpiry, email, mobile, ivrService, motherName, motherDOB } = req.body;
    // console.log(req.params.id)

    try {
        // create a new object
        const newNote = {};
        if (accountCode) {
            newNote.accountCode = accountCode;
        }
        if (openDate) {
            newNote.openDate = openDate;
        }
        if (unkNumber) {
            newNote.unkNumber = unkNumber;
        }

        if (unkIssueDate) {
            newNote.unkIssueDate = unkIssueDate;
        }
        if (cName) {
            newNote.cName = cName;
        }
        if (cFName) {
            newNote.cFName = cFName;
        }

        //     --------------------\
        if (resStatus) {
            newNote.resStatus = resStatus;
        }
        if (nationality) {
            newNote.nationality = nationality;
        }
        if (maritalStatus) {
            newNote.maritalStatus = maritalStatus;
        }

        if (placeOfBirth) {
            newNote.placeOfBirth = placeOfBirth;
        }
        if (uin) {
            newNote.uin = uin;
        }
        if (uinType) {
            newNote.uinType = uinType;
        }
        // ------------
        if (dateOfIssue) {
            newNote.dateOfIssue = dateOfIssue;
        }
        if (uinExpiry) {
            newNote.uinExpiry = uinExpiry;
        }
        if (email) {
            newNote.email = email;
        }

        if (mobile) {
            newNote.mobile = mobile;
        }
        if (ivrService) {
            newNote.ivrService = ivrService;
        }
        if (motherName) {
            newNote.motherName = motherName;
        }
        if (motherDOB) {
            newNote.motherDOB = motherDOB;
        }
        // Find the note to be updated and update it
        let note = await Notes.findById(req.params.id);
        // console.log(note.user);
        if (!note) {
            return res.status(404).send("Not Found");
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndUpdate(
            req.params.id, { $set: newNote }, { new: true }
        );
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error ");
    }
});

//Route - 2: Add a new notes using:Post 'api/notes/addnote' login required
router.post(
    "/addnote", [
        body("title", "Enter a valid Title").isLength({ min: 3 }),
        body("description", "description must be five Character").isLength({
            min: 5,
        }),
    ],
    fetchuser,
    async(req, res) => {
        try {
            const { title, description, tag } = req.body;
            // if there is an error return bad request and error message
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Notes({
                title,
                description,
                tag,
                user: req.user.id,
            });
            const savedNote = await note.save();
            res.json(savedNote);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error ");
        }
    }
);

//Route - 3: Update a notes using:put 'api/notes/addnote' login required
router.put("/updatenote/:id", fetchuser, async(req, res) => {
    const { title, description, tag } = req.body;
    // console.log(req.params.id)

    try {
        // create a new object
        const newNote = {};
        if (title) {
            newNote.title = title;
        }
        if (description) {
            newNote.description = description;
        }
        if (tag) {
            newNote.tag = tag;
        }

        // Find the note to be updated and update it
        let note = await Notes.findById(req.params.id);
        console.log(note.user);
        if (!note) {
            return res.status(404).send("Not Found");
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndUpdate(
            req.params.id, { $set: newNote }, { new: true }
        );
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error ");
    }
});

//Route - 4: Delete a notes using:Delete 'api/notes/deletenote' login required
router.delete("/deletenote/:id", fetchuser, async(req, res) => {
    try {
        // Find the note to be deleted and delete it
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found");
        }
        //Allow deletetion only if user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({ Success: "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error ");
    }
});

module.exports = router;