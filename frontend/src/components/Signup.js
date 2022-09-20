import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import signupimg from "../images/sign-up-img.jpg";

const Signup = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="mt-5 mb-4">
                <div className="signup-block">
                  <div className="row">
                    <div className="col-md-6 p-3">
                      <h2 className="form-title mb-3 text-center">Signup</h2>
                      <form className="p-3 pb-0">
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="fName"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="phone"
                            className="form-control"
                            id="phone"
                            placeholder="Mobile Number"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="profession"
                            placeholder="Your Profession"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            autoComplete="on"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="password"
                            className="form-control"
                            id="cPassword"
                            placeholder="Confirm your Password"
                            autoComplete="on"
                          />
                        </div>
                        <div className="text-center mt-3 mb-3">
                          <button className="btn btn-primary">Signup</button>
                        </div>
                      </form>
                      <div className="text-center ">
                        Already a member <NavLink to="/login">Login</NavLink>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <img src={signupimg} alt="" width="370" height="490" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
