import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import loginimg from "../images/login-img.jpg";

const Login = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="signup-block p-3 mt-5">
          <div className="row">
            <div className="col-md-6">
              <h3 className="mb-5 mt-5 text-center">Login</h3>
              <form>
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
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    autoComplete="on"
                  />
                </div>
                <div className="text-center">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="text-center mt-3 mb-3">
                  create an account <NavLink to="/signup">Register</NavLink>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img src={loginimg} alt="" width="350" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
