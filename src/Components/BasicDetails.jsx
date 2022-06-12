import React, { useState, useEffect } from "react";
import { MDBInput } from "mdbreact";

const BasicDetails = ({ bd, addBasicDetails,editBasicDetails }) => {
  const [Bedit, setBedit] = useState(true);
  const [basicDetails, setBasicDetails] = useState({
    accountCode: "",
    openDate: " ",
    unkNumber: " ",
    unkIssueDate: " ",
    cName: "",
    cFName: "",
    resStatus: "",
    nationality: "",
    maritalStatus: "",
    placeOfBirth: "",
    uinType: "",
    uin: "",
    dateOfIssue: "2022-02-15",
    uinExpiry: "2022-02-15",
    email: "",
    mobile: "",
    ivrService: "",
    motherName: "",
    motherDOB: "",
  });
  useEffect(() => {
    if(bd.length===0){
      console.log(bd.length)
    }else{
 setBasicDetails(bd[0]);
    }

  }, [bd]);
  // console.log(ba)
  const handleBasicInfo = (e) => {
    setBasicDetails({ ...basicDetails, [e.target.name]: e.target.value });
  };
  // console.log(basicDetails)
  const handleBasicDetails = () => {
    if (Bedit) {
      alert("You can Edit profile");
    } else {
      addBasicDetails(basicDetails.accountCode,
        basicDetails.openDate,
        basicDetails.unkNumber,
        basicDetails.unkIssueDate,
        basicDetails.cName,
        basicDetails.cFName,
        basicDetails.resStatus,
        basicDetails.nationality,
        basicDetails.maritalStatus,
        basicDetails.placeOfBirth,
        basicDetails.uinType,
        basicDetails.uin,
        basicDetails.dateOfIssue,
        basicDetails.uinExpiry,
        basicDetails.email,
        basicDetails.mobile,
        basicDetails.ivrService,
        basicDetails.motherName,
        basicDetails.motherDOB)
    }
    setBedit(!Bedit);

  };

const handleeditBasicDetails=()=>{

  if (Bedit) {
    alert("You can Edit profile");
  } else {
    editBasicDetails(basicDetails._id,basicDetails.accountCode,
      basicDetails.openDate,
      basicDetails.unkNumber,
      basicDetails.unkIssueDate,
      basicDetails.cName,
      basicDetails.cFName,
      basicDetails.resStatus,
      basicDetails.nationality,
      basicDetails.maritalStatus,
      basicDetails.placeOfBirth,
      basicDetails.uinType,
      basicDetails.uin,
      basicDetails.dateOfIssue,
      basicDetails.uinExpiry,
      basicDetails.email,
      basicDetails.mobile,
      basicDetails.ivrService,
      basicDetails.motherName,
      basicDetails.motherDOB)
      console.log("Successfull updated")
  }
  setBedit(!Bedit);
}

  return (
    <>
      <div className='container rounded bg-white mt-4 mb-2'>
        <div className='basicBtn justify-content-between d-flex '>
        {/* flex-row-reverse */}
          <h1>Basic Details</h1>
         {bd.length===0? <button
            className='btn btn-primary '
            onClick={handleBasicDetails}
            type='button'
          >
            {!Bedit ? "Save Profile" : "Edit Profile"}
          </button>:<button
            className='btn btn-success'
            onClick={handleeditBasicDetails}
            type='button'
          >
            {!Bedit ? "Update Profile" : "Edit Profile"}
          </button>}
        </div>
        <div className='row'>
          <div className='col-md-3 border-right'>
            <div className='m-1'>
              <MDBInput
                label='Account Code'
                id='accountCode'
                type='text'
                name='accountCode'
                onChange={handleBasicInfo}
                value={String(basicDetails.accountCode)}
                disabled={Bedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='Open Date'
                id='openDate'
                type='text'
                name='openDate'
                onChange={handleBasicInfo}
                value={String(basicDetails.openDate)}
                disabled={Bedit}
              />
            </div>

            <div className='m-1'>
              <MDBInput
                label='UNK Number'
                id='unkNumber'
                type='text'
                name='unkNumber'
                onChange={handleBasicInfo}
                value={String(basicDetails.unkNumber)}
                disabled={Bedit}
              />
            </div>
            <div className='m-1'>
              <MDBInput
                label='UNK Issue Date'
                id='unkIssueDate'
                type='text'
                name='unkIssueDate'
                onChange={handleBasicInfo}
                value={String(basicDetails.unkIssueDate)}
                disabled={Bedit}
              />
            </div>
          </div>
          <div className='col-md-6 border-right'>
            <div className=''>
              {/* p-3 py-5 */}
              <div className='row d-flex justify-content-center'>
                <div className='m-1'>
                  <MDBInput
                    label='Name'
                    id='cName'
                    type='text'
                    name='cName'
                    onChange={handleBasicInfo}
                    value={String(basicDetails.cName)}
                    disabled={Bedit}
                  />
                </div>
                <div className='m-1'>
                  <MDBInput
                    label='Father Name'
                    id='cFName'
                    type='text'
                    name='cFName'
                    onChange={handleBasicInfo}
                    value={String(basicDetails.cFName)}
                    disabled={Bedit}
                  />
                </div>

                <div className='m-1'>
                  <MDBInput
                    label='Resident Status'
                    id='resStatus'
                    type='text'
                    name='resStatus'
                    onChange={handleBasicInfo}
                    value={String(basicDetails.resStatus)}
                    disabled={Bedit}
                  />
                </div>
                <div className='m-1'>
                  <MDBInput
                    label='Nationality'
                    id='nationality'
                    type='text'
                    name='nationality'
                    onChange={handleBasicInfo}
                    value={String(basicDetails.nationality)}
                    disabled={Bedit}
                  />
                </div>

                <div className='m-1'>
                  <MDBInput
                    label='Marital Status'
                    id='maritalStatus'
                    type='text'
                    name='maritalStatus'
                    onChange={handleBasicInfo}
                    value={String(basicDetails.maritalStatus)}
                    disabled={Bedit}
                  />
                </div>
                <div className='m-1'>
                  <MDBInput
                    label='Place Of Birth'
                    id='placeOfBirth'
                    type='text'
                    name='placeOfBirth'
                    onChange={handleBasicInfo}
                    value={String(basicDetails.placeOfBirth)}
                    disabled={Bedit}
                  />
                </div>
                <div className='m-1'>
                  <MDBInput
                    label='UIN Type'
                    id='uinType'
                    type='text'
                    name='uinType'
                    onChange={handleBasicInfo}
                    value={String(basicDetails.uinType)}
                    disabled={Bedit}
                  />
                </div>
                <div className='m-1'>
                  <MDBInput
                    label='UIN'
                    id='uin'
                    type='text'
                    name='uin'
                    onChange={handleBasicInfo}
                    value={String(basicDetails.uin)}
                    disabled={Bedit}
                  />
                </div>

                <div className='row'>
                  <div
                    className='col'
                    style={{ position: "relative", right: "30px" }}
                  >
                    <MDBInput
                      label='Date Of Issue'
                      id='dateOfIssue'
                      type='date'
                      name='dateOfIssue'
                      onChange={handleBasicInfo}
                      value={String(basicDetails.dateOfIssue)}
                      disabled={Bedit}
                    />
                  </div>
                  <div>
                    <MDBInput
                      label='UIN Expiry'
                      id='uinExpiry'
                      type='date'
                      name='uinExpiry'
                      onChange={handleBasicInfo}
                      value={String(basicDetails.uinExpiry)}
                      disabled={Bedit}
                    />
                  </div>
                  {/* <label for="uinExpiry">UIN Expiry</label>
  <input className="border-0" type="date" id="uinExpiry" name="birthdaytime"  onChange={handleBasicInfo}
                    value={basicDetails.uinExpiry}
                    disabled={Bedit}/>
 */}
                </div>


              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='mt-2 text-center'>
              <div className='m-1'>
                <MDBInput
                  label='Email'
                  id='email'
                  type='email'
                  name='email'
                  onChange={handleBasicInfo}
                  value={String(basicDetails.email)}
                  disabled={Bedit}
                />
              </div>

              <div className='m-1'>
                <MDBInput
                  label='Mobile'
                  id='mobile'
                  type='text'
                  name='mobile'
                  onChange={handleBasicInfo}
                  value={String(basicDetails.mobile)}
                  disabled={Bedit}
                />
              </div>

              <div className='m-1'>
                <MDBInput
                  label='Mother Name'
                  id='motherName'
                  type='text'
                  name='motherName'
                  onChange={handleBasicInfo}
                  value={String(basicDetails.motherName)}
                  disabled={Bedit}
                />
              </div>
              <div className='m-1'>
                <MDBInput
                  label='Mother DOB'
                  id='motherDOB'
                  type='text'
                  name='motherDOB'
                  onChange={handleBasicInfo}
                  value={String(basicDetails.motherDOB)}
                  disabled={Bedit}
                />
              </div>
<p>DO YOU WISH TO SUBSCRIBE TO FREE OF COST CDC IVR SERVICE Service</p>
              <div className='m-1'>
                  <MDBInput
                    label=''
                    id='ivrService'
                    type='text'
                    name='ivrService'
                    onChange={handleBasicInfo}
                    value={String(basicDetails.ivrService)}
                    disabled={Bedit}
                  />
                </div>

              {/* <button
                  className='btn btn-primary profile-button'
                  onClick={handleBasicDetails}
                  type='button'
                >
                  {!Bedit ? "Save Profile" : "Edit Profile"}
                </button> */}
            </div>
            {/* <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br/>
                <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" /></div> <br/>
                <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" /></div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicDetails;
