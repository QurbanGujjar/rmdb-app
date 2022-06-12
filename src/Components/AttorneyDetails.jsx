import React, { useState,useEffect } from "react";
import { MDBInput } from "mdbreact";
// AttorneyDetails
const AttorneyDetails = ({ ad,

  addAttorneyDetails,
  editAttorneyDetails, }) => {
  const [Aedit, setAedit] = useState(true);
  const [attorneyDetails, setAttorneyDetails] = useState({
    cName: "",
    uinType: "",
    uin: "",
    uinExpiry: "2022-02-15",
    mobile: "",
    email: "",
    maddress: "",
    mcity: "",
    mprovince: "",
    mcountry: "",
    mphoneRes: "",
    mfax: "",
  });

  useEffect(() => {
    if (ad.length === 0) {
      // console.log(ad.length);
    } else {
      setAttorneyDetails(ad[0]);
    }
  }, [ad]);
  const handleAttorneyDetailsChange = (e) => {
    setAttorneyDetails({...attorneyDetails,[e.target.name]:e.target.value})

  };
  const saveAttorneyDetails = () => {
    if(Aedit){
      alert("You can edit Other details for new client")
    }else{
      addAttorneyDetails(
        attorneyDetails.cName,
        attorneyDetails.uinType,
        attorneyDetails.uin,
        attorneyDetails.uinExpiry,
        attorneyDetails.mobile,
        attorneyDetails.email,
        attorneyDetails.maddress,
        attorneyDetails.mcity,
        attorneyDetails.mprovince,
        attorneyDetails.mcountry,
        attorneyDetails.mphoneRes,
        attorneyDetails.mfax
      )
      alert("Other Details has been saved for new client")
    }
    setAedit(!Aedit)
  };

  const updateAttorneyDetails = () => {
    if(Aedit){
      alert("You can edit Other details for Existing client")
    }else{
      editAttorneyDetails(
        attorneyDetails._id,
      attorneyDetails.cName,
      attorneyDetails.uinType,
      attorneyDetails.uin,
      attorneyDetails.uinExpiry,
      attorneyDetails.mobile,
      attorneyDetails.email,
      attorneyDetails.maddress,
      attorneyDetails.mcity,
      attorneyDetails.mprovince,
      attorneyDetails.mcountry,
      attorneyDetails.mphoneRes,
      attorneyDetails.mfax
      )

      alert("Other Details has been saved for Existing client")
    }
    setAedit(!Aedit)
  };
  return (
    <>
      <div className='container rounded bg-white mt-4 mb-2'>
        <div className='basicBtn d-flex justify-content-between'>
          <h1>Attorney Details</h1>
          {ad.length === 0 ? (
            <button
              className='btn btn-primary '
              onClick={saveAttorneyDetails}
              type='button'
            >
              {!Aedit ? "Save Details" : "Edit Details"}
            </button>
          ) : (
            <button
              className='btn btn-success'
              onClick={updateAttorneyDetails}
              type='button'
            >
              {!Aedit ? "Update Details" : "Edit Details"}
            </button>
          )}
        </div>

        <div className='row' style={{ height: "75vh" }}>
          <div className='col-md-4 border-right'>
            <div className='m-1'>
              <MDBInput
                 label='Name'
                 id='cName'
                 type='text'
                 name='cName'
                onChange={handleAttorneyDetailsChange}
                value={String(attorneyDetails.cName)}
                disabled={Aedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='UIN Type'
                id='uinType'
                type='text'
                name='uinType'
                onChange={handleAttorneyDetailsChange}
                value={String(attorneyDetails.uinType)}
                disabled={Aedit}
              />
            </div>

            <div className='m-1'>
              <MDBInput
                 label='UIN'
                 id='uin'
                 type='text'
                 name='uin'
                onChange={handleAttorneyDetailsChange}
                value={String(attorneyDetails.uin)}
                disabled={Aedit}
              />
            </div>


            <div className='m-1'>
              <MDBInput
                label='UIN Expiry'
                id='uinExpiry'
                type='date'
                name='uinExpiry'
                onChange={handleAttorneyDetailsChange}
                value={String(attorneyDetails.uinExpiry)}
                disabled={Aedit}
              />
            </div>
          </div>
          <div className='col-md-4 border-right'>
            <div className='m-1'>
              <MDBInput
               label='Mobile'
               id='mobile'
               type='text'
               name='mobile'
                onChange={handleAttorneyDetailsChange}
                value={String(attorneyDetails.mobile)}
                disabled={Aedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                 label='Email'
                 id='email'
                 type='email'
                 name='email'
                onChange={handleAttorneyDetailsChange}
                value={String(attorneyDetails.email)}
                disabled={Aedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
               label='Malling Address'
               id='maddress'
               type='email'
               name='maddress'
                onChange={handleAttorneyDetailsChange}
                value={String(attorneyDetails.maddress)}
                disabled={Aedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='City'
                id='mcity'
                type='text'
                name='mcity'
                onChange={handleAttorneyDetailsChange}
                value={String(attorneyDetails.mcity)}
                disabled={Aedit}
              />
            </div>

            {/* Bank
Iban #
Zakat Status
Remittance */}
          </div>
          <div className='col-md-4'>
            <div className='m-1'>
              <MDBInput
               label='Province'
               id='mprovince'
               type='text'
               name='mprovince'
                onChange={handleAttorneyDetailsChange}
                value={String(attorneyDetails.mprovince)}
                disabled={Aedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
               label='Country'
               id='mcountry'
               type='text'
               name='mcountry'
                onChange={handleAttorneyDetailsChange}
                value={String(attorneyDetails.mcountry)}
                disabled={Aedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='Phone (Res)'
                id='mphoneRes'
                type='text'
                name='mphoneRes'
                onChange={handleAttorneyDetailsChange}
                value={String(attorneyDetails.mphoneRes)}
                disabled={Aedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='Fax'
                id='mfax'
                type='text'
                name='mfax'
                onChange={handleAttorneyDetailsChange}
                value={String(attorneyDetails.mfax)}
                disabled={Aedit}
              />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default AttorneyDetails;
