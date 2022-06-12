import React, { useState,useReducer } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitital = [];
    const [notes, setNotes] = useState(notesInitital);
    const [bd, setBd] = useState(notesInitital);
    const [cd, setCd] = useState(notesInitital);
    const [od, setOd] = useState(notesInitital);
    const [ad, setAd] = useState(notesInitital);
    const [nd, setNd] = useState(notesInitital);

    // ======================= Basic Details Functions Start=======================
    // Get basic details
    const getBasicDetails = async() => {
        // API call
        const response = await fetch(`${host}/api/notes/fetchBasicDetails`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });
        const json = await response.json();
        setBd(json);
    };
    // add basic details
    const addBasicDetails = async(
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
        motherDOB
    ) => {
        // API call
        const response = await fetch(`${host}/api/notes/addBasicDetails`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
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
            }),
        });

        const json = await response.json();
        console.log(json);
        getBasicDetails();
    };
    //  edit Basic Details

    const editBasicDetails = async(
        id,
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
        motherDOB
    ) => {
        // API call
        const response = await fetch(`${host}/api/notes/updateBasicDetails/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
                id,
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
            }),
        });
        await response.json();

        getBasicDetails();
    };
    // ======================= Basic Details Functions End=======================

    // ======================= Contact Details Functions Start=======================
    // Get basic details
    const getContactDetails = async() => {
        // API call
        const response = await fetch(`${host}/api/contactD/fetchContactDetails`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });
        const json = await response.json();
        setCd(json);
    };
    // add basic details
    const addContactDetails = async(
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
    ) => {
        // API call
        const response = await fetch(`${host}/api/contactD/addContactDetails`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
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
            }),
        });

        const json = await response.json();
        console.log(json);
        getContactDetails();
    };
    //  edit Basic Details

    const editContactDetails = async(
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
    ) => {
        // API call
        const response = await fetch(
            `${host}/api/contactD/updateContactDetails/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
                body: JSON.stringify({
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
                    pfax,
                }),
            }
        );
        await response.json();

        getContactDetails();
    };
    // ======================= Contact Details Functions End=======================

    // ======================= Other Details Functions Start=======================
    // Get Other details
    const getOtherDetails = async() => {
        // API call
        const response = await fetch(`${host}/api/otherD/fetchOtherDetails`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });
        const json = await response.json();
        // console.log(json)
        setOd(json);
    };
    // add Other details
    const addOtherDetails = async(
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
        remittance
    ) => {
        // API call
        const response = await fetch(`${host}/api/otherD/addOtherDetails`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
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
            }),
        });

        const json = await response.json();
        // console.log(json)
        getOtherDetails();
    };
    //  edit Basic Details

    const editOtherDetails = async(
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
        remittance
    ) => {
        // API call
        const response = await fetch(
            `${host}/api/otherD/updateOtherDetails/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
                body: JSON.stringify({
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
                }),
            }
        );
        await response.json();

        getOtherDetails();
    };
    // ======================= Other Details Functions End=======================

    // ======================= Attorney Details Functions Start=======================
    // Get Attorney details
    const getAttorneyDetails = async() => {
        // API call
        const response = await fetch(`${host}/api/attorneyD/fetchAttorneyDetails`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });
        const json = await response.json();
        // console.log(json)
        setAd(json);
    };
    // Add Attorney details
    const addAttorneyDetails = async(
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
        mfax
    ) => {
        // API call
        const response = await fetch(`${host}/api/attorneyD/addAttorneyDetails`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
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
            }),
        });

        const json = await response.json();
        // console.log(json)
        getAttorneyDetails();
    };
    //  edit/Update Attorney Details

    const editAttorneyDetails = async(
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
        mfax
    ) => {
        // API call
        const response = await fetch(
            `${host}/api/attorneyD/updateAttorneyDetails/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
                body: JSON.stringify({
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
                }),
            }
        );
        await response.json();

        getAttorneyDetails();
    };
    // ======================= Attorney Details Functions End=======================


    // ======================= Nominee Details Functions Start=======================
    // Get Attorney details
    const getNomineeDetails = async() => {
        // API call
        const response = await fetch(`${host}/api/nomineeD/fetchNomineeDetails`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });
        const json = await response.json();
        // console.log(json)
        setNd(json);
    };
    // Add Attorney details
    const addNomineeDetails = async(
        rName,
        relation,
        uinType,
        uin,
        uinExpiry,
        mobile,
        maddress

    ) => {
        // API call
        const response = await fetch(`${host}/api/nomineeD/AddNomineeDetails`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({
                rName,
                relation,
                uinType,
                uin,
                uinExpiry,
                mobile,
                maddress
            }),
        });

        const json = await response.json();
        // console.log(json)
        getNomineeDetails();
    };
    //  edit/Update Attorney Details

    const editNomineeDetails = async(
        id,
        rName,
        relation,
        uinType,
        uin,
        uinExpiry,
        mobile,
        maddress
    ) => {
        // API call
        const response = await fetch(
            `${host}/api/nomineeD/updateNomineeDetails/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    id,
                    rName,
                    relation,
                    uinType,
                    uin,
                    uinExpiry,
                    mobile,
                    maddress
                }),
            }
        );
        await response.json();

        getNomineeDetails();
    };
    // ======================= Nominee Details Functions End=======================





    // =====================================================================================================================
    // Get all notes
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0YjM1ZjQzNjM5NjA1NTQzNjU4Y2Y1In0sImlhdCI6MTY0OTEzODU0Nn0.U3f7zfWJD4xMt4FRZHpizyYwk3z6ZbjRulFXsV-lkqg"
    const getNotes = async() => {
        // API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });
        const json = await response.json();
        // console.log(json);
        setNotes(json);
    };
    // delete a note
    const deleteNote = async(id) => {
        // API call
        await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            // body: JSON.stringify({title,description,tag}),
        });
        // const json= response.json();
        const afterDel = notes.filter((note) => {
            return note._id !== id;
        });
        setNotes(afterDel);
    };

    // Add a note
    // title, description, tag
    // Add basic details
    const addNote = async(title, description, tag) => {
        // API call
        // console.log(title, description, tag,imgData)
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                // "Content-Type": "multipart/form-data;boundary=MyBoundary",
                // "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify(title, description, tag),
        });

        const json = await response.json();
        const note = json;
        // let note = {
        //   _id: json._id,
        //   user: json.user,
        //   title: title,
        //   description: description,
        //   tag: json.tag,
        //   date: json.date,
        //   __v: json.__v,
        // };
        setNotes(notes.concat(note));
    };

    // edit a note

    const editNote = async(id, title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ title, description, tag }),
        });
        await response.json();
        // const json = response.json();
        // console.log(json)

        let newNote = JSON.parse(JSON.stringify(notes));
        // Login to edit client

        for (let index = 0; index < newNote.length; index++) {
            const element = newNote[index];
            if (element._id === id) {
                // console.log(id)
                newNote[index].title = title;
                newNote[index].description = description;
                newNote[index].tag = tag;
                break;
            }
        }
        setNotes(newNote);
    };

    return ( <NoteContext.Provider value = {
            {
                notes,
                addNote,
                deleteNote,
                editNote,
                getNotes,
                // ==========Basic details function pass start
                bd,
                getBasicDetails,
                addBasicDetails,
                editBasicDetails,
                // ==========Basic details function pass end
                // ==========Contact details function pass start
                cd,
                getContactDetails,
                addContactDetails,
                editContactDetails,
                // ==========Contact details function pass end
                // ==========Other details function pass start
                od,
                getOtherDetails,
                addOtherDetails,
                editOtherDetails,
                // ==========Other details function pass end
                // ==========Attorney details function pass start
                ad,
                getAttorneyDetails,
                addAttorneyDetails,
                editAttorneyDetails,
                // ==========Attorney details function pass end
                // ==========Attorney details function pass start
                nd,
                getNomineeDetails,
                addNomineeDetails,
                editNomineeDetails,
                // ==========Attorney details function pass end
                // useReducer(reducer,initialState)

            }
        } > { props.children } </NoteContext.Provider>
    );
};

export default NoteState;