import React, { useState } from "react";
import Navbar from "./Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import loginimg from "../images/login-img.jpg";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    console.log(email, password);

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      console.log("Invalid Credentials 3");
    } else {
      console.log("Login Successfull");
      navigate("/about");
    }
  };
  return (
    <>
      <Navbar />
      <main>
        <div className="signup-block p-3 mt-5">
          <div className="row">
            <div className="col-md-6">
              <h3 className="mb-5 mt-5 text-center">Login</h3>
              <form method="POST">
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="on"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button onClick={loginUser} className="btn btn-primary">
                    Login
                  </button>
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
