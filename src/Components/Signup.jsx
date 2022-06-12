import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const host = "http://localhost:5000";
  const [credential, setCredential] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]:e.target.value});
  };
  const handleSubmit = async(e) => {
    e.preventDefault();

    if(credential.password===credential.cpassword){
        console.log(credential);

        const response = await fetch(`${host}/api/auth/createuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username:credential.username,
            email: credential.email,
            password: credential.password,
          }),
        });
        const json = await response.json();

        console.log(json);

        if (json.success) {
          localStorage.setItem("token", json.authtoken);
          // console.log("Successully login", "success");
          // showAlert("Successully login", "success");
          navigate("/");
        } else {
          // console.log(json.error, "danger");
          // showAlert(json.error, "danger");
          alert(json.error)
        }

    }

  };
  return (
    <div className=' p-5 m-5 justify-content-center '>
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <form onSubmit={handleSubmit}>
              <p className='h2 text-center mb-4'>Sign up</p>
              {/* <h1 className='h1 text-center mb-4'>Login</h1> */}
              <div className='grey-text'>
                <MDBInput
                  label='Your name'
                  icon='user'
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                  name='username'
                  onChange={handleChange}
                />
                <MDBInput
                  label='Your email'
                  icon='envelope'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                  name='email'
                  onChange={handleChange}
                />

                <MDBInput
                  label='Your password'
                  icon='lock'
                  group
                  type='password'
                  validate
                  name='password'
                  onChange={handleChange}
                />
                <MDBInput
                  label='Confirm your password'
                  icon='exclamation-triangle'
                  group
                  type='password'
                  validate
                  error='wrong'
                  success='right'
                  name='cpassword'
                  onChange={handleChange}
                />
                <div className='text-center'>
                  <button type='submit' className='btn btn-primary'>
                    Signup
                  </button>
                </div>
                <div className='text-center'>
                <Link to='/login'>Click here to login</Link>
              </div>
              </div>
            </form>
          </MDBCol>
          <MDBCol md='6'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNXGXjVo8vVCN2UbxkKPGUka8IP86TX1bM1g&usqp=CAU'
              alt=''
              style={{ width: "100%", height: "100%" }}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Signup;
