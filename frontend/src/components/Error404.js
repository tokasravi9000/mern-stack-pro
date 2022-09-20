import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../images/errorPage.jpg";
import Navbar from "./Navbar";

const Error404 = () => {
  return (
    <>
      <Navbar />
      <div id="notFound">
        <div className="not-found">
          <div className="text-center">
            <img className="error-Img" src={errorImg} alt="" />
          </div>
          <div className="text-center">
            <Link className="backToHome" to="/">
              Go to Home Page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
