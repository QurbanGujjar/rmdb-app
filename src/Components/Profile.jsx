import React,{useState,useEffect} from 'react'
import { MDBInput }  from "mdbreact";
import './profile.css'
const Profile = ({bd}) => {



    const [info,setinfo]=useState({username:"Qurban",email:"qurban@gmail.com",contact:"0347",address:"LHR"})
    const[edit,setEdit]=useState(true)
    const handleInfo=(e)=>{
        setinfo({...info,[e.target.name]:[e.target.value]})
    }
    const handleProfile=()=>{
        if(edit){
            alert("You can Edit profile")
        }
        else{
            alert("Profile Updated")
        }
        setEdit(!edit)
    }
    useEffect(() => {
        if(bd.length===0){
        //   console.log(bd.length)
        }else{
            // console.log(bd[0].email)
            setinfo({...info,username:bd[0].cName,email:bd[0].email,contact:bd[0].mobile});
        }

      }, [bd]);
  return (
    <>
    <div className="container rounded bg-white mt-4 mb-2">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">{info.username}</span><span className="text-black-50">{info.email}</span><span> </span>

            {!edit?<MDBInput id='form0' type='file'  />: ""}
            </div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                {/* <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div> */}
                {/* <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" /></div>
                    <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control"  placeholder="surname"/></div>
                </div> */}

                <div className="row d-flex justify-content-center">
               <div className="m-1">
               <MDBInput label='Username' id='username' type='text' name="username" onChange={handleInfo} value={String(info.username)} disabled={edit} />

               </div>
               <div className="m-1">
               <MDBInput label='Email' id='form2' type='email'name="email" onChange={handleInfo} value={info.email} disabled={edit} />

               </div>

               <div className="m-1">
               <MDBInput label='Contact' id='form3' type='text' name="contact" onChange={handleInfo} value={String(info.contact)} disabled={edit} />

               </div>
               <div className="m-1">
               <MDBInput label='Address' id='form4' type='text'name="address" onChange={handleInfo} value={String(info.address)} disabled={edit} />

               </div>
                    <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" /></div>
                    <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control"  placeholder="state"/></div>
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" onClick={handleProfile
               } type="button">{!edit?"Save Profile":"Edit Profile"}</button></div>
            </div>
        </div>
        <div className="col-md-4">
            {/* <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br/>
                <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" /></div> <br/>
                <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" /></div>
            </div> */}
        </div>
    </div>
</div>
    </>
  )
}

export default Profile
