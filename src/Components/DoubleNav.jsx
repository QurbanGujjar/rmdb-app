import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BasicDetails from "./BasicDetails";
import "./doubleNav.css";
import Header from "./Header";
import Profile from "./Profile";
import SideNav from "./SideNav";
import noteContext from "../context/notes/noteContext";
import MyTest from "./MyTest";
import ContactDetails from "./ContactDetails";
import OtherDetails from "./OtherDetails";
import AttorneyDetails from "./AttorneyDetails";
import NomineeDetails from "./NomineeDetails";
import TableProfile from "./TableProfile";
import MyPDF from "./MyPDF";
import Term_conditions from "./Term_conditions";
const DoubleNav = () => {
  const navigate = useNavigate();
  const context = useContext(noteContext);
  const {
    bd,
    getBasicDetails,
    addBasicDetails,
    editBasicDetails,
    cd,
    getContactDetails,
    addContactDetails,
    editContactDetails,
    od,
    getOtherDetails,
    addOtherDetails,
    editOtherDetails,
    ad,
    getAttorneyDetails,
    addAttorneyDetails,
    editAttorneyDetails,
    nd,
    getNomineeDetails,
    addNomineeDetails,
    editNomineeDetails,
  } = context;
  const [sideNav, setSideNav] = useState(true);
  const [openLink, setOpenLink] = useState("profile");
  const showLink = (val) => {
    setOpenLink(val);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // getNotes()
      getBasicDetails();
      getContactDetails();
      getOtherDetails();
      getAttorneyDetails();
      getNomineeDetails();
    } else {
      navigate("/login");
    }
  }, []);

  //  console.log(notes)
  //  console.log(bd.accountCode)

  return (
    <>
      <Header sideNav={sideNav} setSideNav={setSideNav} />
      <div className='main'>
        {sideNav ? <SideNav showLink={showLink} /> : ""}
        <main>
          {/* {console.log(getBasicDetails())} */}
          {openLink === "profile" ? <Profile bd={bd} /> : ""}
          {openLink === "basic" ? (
            <BasicDetails
              bd={bd}
              addBasicDetails={addBasicDetails}
              editBasicDetails={editBasicDetails}
            />
          ) : (
            ""
          )}
          {openLink === "contact" ? (
            <ContactDetails
              cd={cd}
              addContactDetails={addContactDetails}
              editContactDetails={editContactDetails}
            />
          ) : (
            ""
          )}
          {openLink === "other" ? (
            <OtherDetails
              od={od}
              addOtherDetails={addOtherDetails}
              editOtherDetails={editOtherDetails}
            />
          ) : (
            ""
          )}
          {openLink === "attorney" ? (
            <AttorneyDetails
              ad={ad}
              addAttorneyDetails={addAttorneyDetails}
              editAttorneyDetails={editAttorneyDetails}
            />
          ) : (
            ""
          )}
          {openLink === "nominee" ? (
            <NomineeDetails
              nd={nd}
              addNomineeDetails={addNomineeDetails}
              editNomineeDetails={editNomineeDetails}
            />
          ) : (
            ""
          )}

          {openLink === "term&conditions" ? <Term_conditions /> : ""}

          {openLink === "pdf" ? (
            // <TableProfile/>
            // <MyTest getBasicDetails={getBasicDetails} bd={bd} />
            <MyPDF bd={bd} cd={cd} od={od} ad={ad} nd={nd} />
          ) : (
            ""
          )}
        </main>
      </div>
      <footer></footer>
    </>
  );
};

export default DoubleNav;
