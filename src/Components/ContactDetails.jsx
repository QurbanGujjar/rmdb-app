import React, { useState, useEffect } from "react";
import { MDBInput } from "mdbreact";

const ContactDetails = ({ cd, addContactDetails, editContactDetails }) => {
  const [Cedit, setCedit] = useState(true);
  const [mpaddress, setMPAddress] = useState({
    maddress: "",
    mcity: "",
    mprovince: "",
    mcountry: "",
    mphoneOff: "",
    mphoneRes: "",
    mfax: "",
    paddress: "",
    pcity: "",
    pprovince: "",
    pcountry: "",
    pphoneOff: "",
    pphoneRes: "",
    pfax: "",
  });

  useEffect(() => {
    if (cd.length === 0) {
      console.log(cd.length);
    } else {
      setMPAddress(cd[0]);
      console.log("run")
    }
  }, [cd]);
  const mpaddressDetailChange = (e) => {
    setMPAddress({ ...mpaddress, [e.target.name]: e.target.value });
  };

  const saveContactDetails = () => {
    if (Cedit) {
      alert("You can edit contact details for new client");
    } else {
      alert("Contact Details has been saved");
      addContactDetails(
        mpaddress.maddress,
        mpaddress.mcity,
        mpaddress.mprovince,
        mpaddress.mcountry,
        mpaddress.mphoneOff,
        mpaddress.mphoneRes,
        mpaddress.mfax,
        mpaddress.paddress,
        mpaddress.pcity,
        mpaddress.pprovince,
        mpaddress.pcountry,
        mpaddress.pphoneOff,
        mpaddress.pphoneRes,
        mpaddress.pfax
      );
    }
    setCedit(!Cedit);
  };
  const updateContactDetails = () => {
    if (Cedit) {
      alert("You can edit contact details for existing client");
    } else {
      editContactDetails(
        mpaddress._id,
        mpaddress.maddress,
        mpaddress.mcity,
        mpaddress.mprovince,
        mpaddress.mcountry,
        mpaddress.mphoneOff,
        mpaddress.mphoneRes,
        mpaddress.mfax,
        mpaddress.paddress,
        mpaddress.pcity,
        mpaddress.pprovince,
        mpaddress.pcountry,
        mpaddress.pphoneOff,
        mpaddress.pphoneRes,
        mpaddress.pfax
      );

      alert("contact details has been Updated");
    }
    setCedit(!Cedit);
  };
  return (
    <>
      <div className='container rounded bg-white mt-4 mb-2'>
        <div className='basicBtn d-flex justify-content-between'>
          <h1>Contact Details</h1>
          {cd.length === 0 ? (
            <button
              className='btn btn-primary '
              onClick={saveContactDetails}
              type='button'
            >
              {!Cedit ? "Save Profile" : "Edit Profile"}
            </button>
          ) : (
            <button
              className='btn btn-success'
              onClick={updateContactDetails}
              type='button'
            >
              {!Cedit ? "Update Profile" : "Edit Profile"}
            </button>
          )}
        </div>

        <div className='row'>
          <div className='col-md-4 border-right'>
            <div className='m-1'>
              <MDBInput
                label='Malling Address'
                id='maddress'
                type='email'
                name='maddress'
                onChange={mpaddressDetailChange}
                value={String(mpaddress.maddress)}
                disabled={Cedit}
                // required
                // min-length='4'
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='City'
                id='mcity'
                type='text'
                name='mcity'
                onChange={mpaddressDetailChange}
                value={String(mpaddress.mcity)}
                disabled={Cedit}
              />
            </div>

            <div className='m-1'>
              <MDBInput
                label='Province'
                id='mprovince'
                type='text'
                name='mprovince'
                onChange={mpaddressDetailChange}
                value={String(mpaddress.mprovince)}
                disabled={Cedit}
              />
            </div>
          </div>
          <div className='col-md-4 border-right'>
            <div className='m-1'>
              <MDBInput
                label='Country'
                id='mcountry'
                type='text'
                name='mcountry'
                onChange={mpaddressDetailChange}
                value={String(mpaddress.mcountry)}
                disabled={Cedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='Phone (Off)'
                id='mphoneOff'
                type='text'
                name='mphoneOff'
                onChange={mpaddressDetailChange}
                value={String(mpaddress.mphoneOff)}
                disabled={Cedit}
              />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='m-1'>
              <MDBInput
                label='Phone (Res)'
                id='mphoneRes'
                type='text'
                name='mphoneRes'
                onChange={mpaddressDetailChange}
                value={String(mpaddress.mphoneRes)}
                disabled={Cedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='Fax'
                id='mfax'
                type='text'
                name='mfax'
                onChange={mpaddressDetailChange}
                value={String(mpaddress.mfax)}
                disabled={Cedit}
              />
            </div>
          </div>
        </div>

        <hr />
        <div className='row'>
          <div className='col-md-4 border-right'>
            <div className='m-1'>
              <MDBInput
                label='Permanent Address'
                id='paddress'
                type='text'
                name='paddress'
                onChange={mpaddressDetailChange}
                value={String(mpaddress.paddress)}
                disabled={Cedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='City'
                id='pcity'
                type='text'
                name='pcity'
                onChange={mpaddressDetailChange}
                value={String(mpaddress.pcity)}
                disabled={Cedit}
              />
            </div>

            <div className='m-1'>
              <MDBInput
                label='Province'
                id='pprovince'
                type='text'
                name='pprovince'
                onChange={mpaddressDetailChange}
                value={String(mpaddress.pprovince)}
                disabled={Cedit}
              />
            </div>
          </div>
          <div className='col-md-4 border-right'>
            <div className='m-1'>
              <MDBInput
                label='Country'
                id='pcountry'
                type='text'
                name='pcountry'
                onChange={mpaddressDetailChange}
                value={String(mpaddress.pcountry)}
                disabled={Cedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='Phone (Off)'
                id='pphoneOff'
                type='text'
                name='pphoneOff'
                onChange={mpaddressDetailChange}
                value={String(mpaddress.pphoneOff)}
                disabled={Cedit}
              />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='m-1'>
              <MDBInput
                label='Phone (Res)'
                id='pphoneRes'
                type='text'
                name='pphoneRes'
                onChange={mpaddressDetailChange}
                value={String(mpaddress.pphoneRes)}
                disabled={Cedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='Fax'
                id='pfax'
                type='text'
                name='pfax'
                onChange={mpaddressDetailChange}
                value={String(mpaddress.pfax)}
                disabled={Cedit}
              />
            </div>
          </div>
        </div>
        {/* mpaddress Address
City
Province
Country
Phone (Off)
Phone (Res)
Fax
mpaddress Add
City
Province
Country
Phone (Off)
Phone (Res)
Fax */}
      </div>
    </>
  );
};

export default ContactDetails;
