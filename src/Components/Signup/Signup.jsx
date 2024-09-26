import React, { useState } from "react";
import Style from "./Signup.module.css";
import signupImg from "../../Assets/img6.jpg";
import ggl from "../../Assets/gglicn.png";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";

export default function Signup() {
  const isScreenSmall = useMediaQuery({ maxWidth: 576 });
  let navigate = useNavigate();

  function navigateToLogin() {
    navigate("/");
  }

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container pt-5">
      <div className="row py-5">
          <div className="col-md-6">
            <img src={signupImg} className="w-100 h-100 rounded-2" alt="" />
          </div>
          <div className="col-md-6">
            <div>
              <h5 className={Style.title + " fw-bold text-center"}>
                Welcome to USAM, let's create an account now
              </h5>
              <div className="d-flex justify-content-center align-items-center">
                <h6 className={Style.textColor + " m-0"}>Or Connect With</h6>
                <div className="d-flex align-items-top">
                  <div>
                    <i
                      className={`${Style.blue} fa-brands fa-facebook mx-3`}
                    ></i>
                  </div>

                  <div style={{ width: "15px", height: "15px" }} className="">
                    <img src={ggl} className="w-100 mb-1 " />
                  </div>
                </div>
              </div>

              <form>
                <div className="row">
                  <div className={`col-md-6 ${isScreenSmall ? "px-2" : "mt-3 px-5"}`}>
                    <label
                      htmlFor="firstName"
                      className={Style.label + " form-label fs-5 fw-bold"}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className={Style.inputField + " w-100 py-2 gray-border rounded-5 px-3"}
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className={`col-md-6 ${isScreenSmall ? "px-2" : "mt-3 px-5"}`}>
                    <label
                      htmlFor="lastName"
                      className={Style.label + " form-label fs-5 fw-bold"}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className={Style.inputField + " w-100 py-2 gray-border rounded-5 px-3"}
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className={`${isScreenSmall ? "px-2 mb-2" : "mt-3 px-5"}`}>
                  <label
                    htmlFor="email"
                    className={Style.label + " form-label fs-5 fw-bold"}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className={Style.inputField + " w-100 py-2 gray-border rounded-5 px-3"}
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className={`${isScreenSmall ? "px-2 mb-2" : "mt-3 px-5"}`}>
                  <label
                    htmlFor="password"
                    className={Style.label + " form-label fs-5 fw-bold"}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className={Style.inputField + " w-100 py-2 gray-border rounded-5 px-3"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>

                <div className={`${isScreenSmall ? "px-2 mb-2" : "mt-3 px-5"}`}>
                  <label
                    htmlFor="role"
                    className={Style.label + " form-label fs-5 fw-bold"}
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    className={Style.selectField + " w-100 py-2 gray-border rounded-5 px-3"}
                  >
                    <option value="instructor">Instructor</option>
                    <option value="student">Student</option>
                  </select>
                </div>
                <div className="d-flex justify-content-end pe-5">
                <button
                  onClick={() => navigateToLogin()}
                  className="btn bg-color rounded-5 text-white px-4 py-1"
                >
                  Continue
                </button>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-4 ">
                <h6 className="m-0 me-1 small-font fw-bold">
                  Already have an account ?{" "}
                </h6>
                <Link to={"/login"} className="text-decoration-none">
                  <h6 className="text-color m-0 small-font fw-bold">
                    Login Now
                  </h6>
                </Link>
              </div>

              </form>
            </div>
          </div>

        </div>
      </div>
      </>
  );
}
          