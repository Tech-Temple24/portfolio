import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

function Signup() {
 
 
  

  return (
    <MDBContainer
      style={{ textAlign: "center", width: "500px", margin: "auto" }}
      fluid
      className="p-4"
    >
      <MDBRow>
        <MDBCard className="my-5">
          <MDBCardBody className="p-5">
            <h1>Sign Up</h1>
            <br />
            <form >
              <MDBRow>
                <MDBCol col="12">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Username"
                    id="username"
                    name="username"
                    type="text"
                  
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="email"
                name="email"
                type="email"
           
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="password"
                name="password"
                type="password"
            
              />

              <MDBBtn type="submit" className="w-100 mb-4" size="md">
                Sign Up
              </MDBBtn>
            </form>

            <div className="text-center">
              <p>
                Already a user? <Link to="/login">Login</Link>
              </p>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
