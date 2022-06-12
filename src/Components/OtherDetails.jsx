import React, { useState,useEffect } from "react";
import { MDBInput } from "mdbreact";

const OtherDetails = ({ od,
  addOtherDetails,
  editOtherDetails, }) => {
  const [Oedit, setOedit] = useState(true);
  const [otherDetails, setOtherDetails] = useState({
    annualIncome: "",
    incomeSource: "",
    occupation: "",
    jobTitle: "",
    jobDepartment: "",
    employerName: "",
    employerAdd: "",
    bank: "",
    iban: "",
    zakatStatus: "",
    remittance: "",
  });
  useEffect(() => {
    if(od.length===0){
      console.log(od.length)
    }else{
      // console.log(od)
      setOtherDetails(od[0]);
    }

  }, [od]);
  const handleOtherDetailsChange = (e) => {
    setOtherDetails({...otherDetails,[e.target.name]:e.target.value})

  };
  const saveOtherDetails = () => {
    if(Oedit){
      alert("You can edit Other details for new client")
    }else{
      addOtherDetails(
        otherDetails.annualIncome,
        otherDetails.incomeSource,
        otherDetails.occupation,
        otherDetails.jobTitle,
        otherDetails.jobDepartment,
        otherDetails.employerName,
        otherDetails.employerAdd,
        otherDetails.bank,
        otherDetails.iban,
        otherDetails.zakatStatus,
        otherDetails.remittance,
      )
      alert("Other Details has been saved for new client")
    }
    setOedit(!Oedit)
  };

  const updateOtherDetails = () => {
    if(Oedit){
      alert("You can edit Other details for Existing client")
    }else{
      editOtherDetails(
        otherDetails._id,
        otherDetails.annualIncome,
        otherDetails.incomeSource,
        otherDetails.occupation,
        otherDetails.jobTitle,
        otherDetails.jobDepartment,
        otherDetails.employerName,
        otherDetails.employerAdd,
        otherDetails.bank,
        otherDetails.iban,
        otherDetails.zakatStatus,
        otherDetails.remittance,
      )

      alert("Other Details has been saved for Existing client")
    }
    setOedit(!Oedit)
  };
  return (
    <>
      <div className='container rounded bg-white mt-4 mb-2'>
        <div className='basicBtn d-flex justify-content-between'>
          <h1>Other Details</h1>
          {od.length === 0 ? (
            <button
              className='btn btn-primary '
              onClick={saveOtherDetails}
              type='button'
            >
              {!Oedit ? "Save Details" : "Edit Details"}
            </button>
          ) : (
            <button
              className='btn btn-success'
              onClick={updateOtherDetails}
              type='button'
            >
              {!Oedit ? "Update Details" : "Edit Details"}
            </button>
          )}
        </div>

        <div className='row' style={{ height: "75vh" }}>
          <div className='col-md-4 border-right'>
            <div className='m-1'>
              <MDBInput
                label='Annual Income'
                id='annualIncome'
                type='text'
                name='annualIncome'
                onChange={handleOtherDetailsChange}
                value={String(otherDetails.annualIncome)}
                disabled={Oedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='Income Source'
                id='incomeSource'
                type='text'
                name='incomeSource'
                onChange={handleOtherDetailsChange}
                value={String(otherDetails.incomeSource)}
                disabled={Oedit}
              />
            </div>

            <div className='m-1'>
              <MDBInput
                label='Occupation'
                id='occupation'
                type='text'
                name='occupation'
                onChange={handleOtherDetailsChange}
                value={String(otherDetails.occupation)}
                disabled={Oedit}
              />
            </div>


            <div className='m-1'>
              <MDBInput
                label='Job Title'
                id='jobTitle'
                type='text'
                name='jobTitle'
                onChange={handleOtherDetailsChange}
                value={String(otherDetails.jobTitle)}
                disabled={Oedit}
              />
            </div>
          </div>
          <div className='col-md-4 border-right'>
            <div className='m-1'>
              <MDBInput
                label='Job Department'
                id='jobDepartment'
                type='text'
                name='jobDepartment'
                onChange={handleOtherDetailsChange}
                value={String(otherDetails.jobDepartment)}
                disabled={Oedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='Employer Name'
                id='employerName'
                type='text'
                name='employerName'
                onChange={handleOtherDetailsChange}
                value={String(otherDetails.employerName)}
                disabled={Oedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='Employer Add.'
                id='employerAdd'
                type='text'
                name='employerAdd'
                onChange={handleOtherDetailsChange}
                value={String(otherDetails.employerAdd)}
                disabled={Oedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='Bank'
                id='bank'
                type='text'
                name='bank'
                onChange={handleOtherDetailsChange}
                value={String(otherDetails.bank)}
                disabled={Oedit}
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
                label='Iban #'
                id='iban'
                type='text'
                name='iban'
                onChange={handleOtherDetailsChange}
                value={String(otherDetails.iban)}
                disabled={Oedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='Zakat Status'
                id='zakatStatus'
                type='text'
                name='zakatStatus'
                onChange={handleOtherDetailsChange}
                value={String(otherDetails.zakatStatus)}
                disabled={Oedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='Remittance'
                id='remittance'
                type='text'
                name='remittance'
                onChange={handleOtherDetailsChange}
                value={String(otherDetails.remittance)}
                disabled={Oedit}
              />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default OtherDetails;
