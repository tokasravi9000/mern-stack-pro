import React, { useState } from "react";
import Navbar from "./Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import signupimg from "../images/sign-up-img.jpg";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const formHandler = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Success");
      console.log("Registration Success");
      navigate("/login");
    }
  };

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
                      <form method="POST" className="p-3 pb-0">
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={user.name}
                            onChange={formHandler}
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            value={user.email}
                            onChange={formHandler}
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="phone"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Mobile Number"
                            value={user.phone}
                            onChange={formHandler}
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="work"
                            name="work"
                            placeholder="Your Profession"
                            value={user.work}
                            onChange={formHandler}
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={formHandler}
                            autoComplete="off"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="password"
                            className="form-control"
                            id="cpassword"
                            name="cpassword"
                            placeholder="Confirm your Password"
                            value={user.cpassword}
                            onChange={formHandler}
                            autoComplete="off"
                          />
                        </div>
                        <div className="text-center mt-3 mb-3">
                          <button
                            className="btn btn-primary"
                            onClick={postData}
                          >
                            Signup
                          </button>
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
