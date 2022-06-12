import React, { useState,useEffect } from "react";
import { MDBInput } from "mdbreact";
// nomineeDetails
const NomineeDetails = ({
  nd,
  addNomineeDetails,
    editNomineeDetails, }) => {
  const [Nedit, setNedit] = useState(true);
  const [nomineeDetails, setNomineeDetails] = useState({
    rName: "",
    relation:"",
    uinType: "",
    uin: "",
    uinExpiry: "2022-02-15",
    mobile: "",
    maddress: "",

  });

  useEffect(() => {
    if (nd.length === 0) {
      console.log(nd.length);
    } else {
      setNomineeDetails(nd[0]);
    }
  }, [nd]);
  const handleNomineeDetailsChange = (e) => {
    setNomineeDetails({...nomineeDetails,[e.target.name]:e.target.value})

  };
  const saveNomineeDetails = () => {
    if(Nedit){
      alert("You can edit Other details for new client")
    }else{
      addNomineeDetails(
        nomineeDetails.rName,
        nomineeDetails.relation,
        nomineeDetails.uinType,
        nomineeDetails.uin,
        nomineeDetails.uinExpiry,
        nomineeDetails.mobile,
        nomineeDetails.maddress,

      )
      alert("Other Details has been saved for new client")
    }
    setNedit(!Nedit)
  };

  const updatenomineeDetails = () => {
    if(Nedit){
      alert("You can edit Other details for Existing client")
    }else{
      editNomineeDetails(
        nomineeDetails._id,
        nomineeDetails.rName,
        nomineeDetails.relation,
        nomineeDetails.uinType,
        nomineeDetails.uin,
        nomineeDetails.uinExpiry,
        nomineeDetails.mobile,
        nomineeDetails.maddress,
      )

      alert("Other Details has been saved for Existing client")
    }
    setNedit(!Nedit)
  };
  return (
    <>
      <div className='container rounded bg-white mt-4 mb-2'>
        <div className='basicBtn d-flex justify-content-between'>
          <h1>Nominee Details</h1>
          {nd.length === 0 ? (
            <button
              className='btn btn-primary '
              onClick={saveNomineeDetails}
              type='button'
            >
              {!Nedit ? "Save Details" : "Edit Details"}
            </button>
          ) : (
            <button
              className='btn btn-success'
              onClick={updatenomineeDetails}
              type='button'
            >
              {!Nedit ? "Update Details" : "Edit Details"}
            </button>
          )}
        </div>

        <div className='row' style={{ height: "75vh" }}>
          <div className='col-md-4 border-right'>
            <div className='m-1'>
              <MDBInput
                 label='Name'
                 id='rName'
                 type='text'
                 name='rName'
                onChange={handleNomineeDetailsChange}
                value={String(nomineeDetails.rName)}
                disabled={Nedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                 label='Relation'
                 id='relation'
                 type='text'
                 name='relation'
                onChange={handleNomineeDetailsChange}
                value={String(nomineeDetails.relation)}
                disabled={Nedit}
              />
            </div>



          </div>
          <div className='col-md-4 border-right'>
          <div className='m-1'>
              <MDBInput
                label='UIN Type'
                id='uinType'
                type='text'
                name='uinType'
                onChange={handleNomineeDetailsChange}
                value={String(nomineeDetails.uinType)}
                disabled={Nedit}
              />
            </div>

            <div className='m-1'>
              <MDBInput
                 label='UIN'
                 id='uin'
                 type='text'
                 name='uin'
                onChange={handleNomineeDetailsChange}
                value={String(nomineeDetails.uin)}
                disabled={Nedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='UIN Expiry'
                id='uinExpiry'
                type='date'
                name='uinExpiry'
                onChange={handleNomineeDetailsChange}
                value={String(nomineeDetails.uinExpiry)}
                disabled={Nedit}
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
               label='Mobile'
               id='mobile'
               type='text'
               name='mobile'
                onChange={handleNomineeDetailsChange}
                value={String(nomineeDetails.mobile)}
                disabled={Nedit}
              />
            </div>

            <div className='m-1'>
              <MDBInput
               label='Malling Address'
               id='maddress'
               type='email'
               name='maddress'
                onChange={handleNomineeDetailsChange}
                value={String(nomineeDetails.maddress)}
                disabled={Nedit}
              />
            </div>





          </div>
        </div>

      </div>
    </>
  );
};

export default NomineeDetails;
