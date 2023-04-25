import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { images } from "../Global/Image";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setUserProfile } from "@/redux-toolkit/slicies/profileSlice";
import { BiKey } from "react-icons/bi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const SignUpContent = () => {
  const { user } = useSelector((state: any) => state.prof);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError("");
    }
  };

  console.log(
    "----data",
    JSON.stringify({ name, email, password, passwordConfirm }, null, 2)
  );
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
    if (event.target.value) {
      setEmailError("");
    }
  };
  const handleNameChange = (event: any) => {
    setName(event.target.value);
    if (event.target.value) {
      setNameError("");
    }
  };
  const handlePasswordConfirmChange = (event: any) => {
    setPasswordConfirm(event.target.value);
    if (event.target.value) {
      setPasswordConfirmError("");
    }
  };

  const handlePasswordFocus = () => {
    setPasswordError("");
  };

  const handleEmailFocus = () => {
    setEmailError("");
  };
  const handleNameFocus = () => {
    setNameError("");
  };

  const handlePasswordConfirmFocus = () => {
    setPasswordConfirmError("");
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // prevent default form submission behavior

    let errors = false;

    // validate input fields
    if (!email) {
      setEmailError("Please enter your email.");
      errors = true;
    }
    if (!name) {
      setNameError("Please enter your name.");
      errors = true;
    }
    if (!password) {
      setPasswordError("Please enter your password.");
      errors = true;
    }
    if (!password) {
      setPasswordConfirmError("Please enter your password.");
      errors = true;
    }

    if (errors) {
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://uinghana-gyw9.onrender.com/api/v1/auth/register",
        { name, email, password, passwordConfirm }
      );

      if (response.status === 201) {
        const { user } = response.data.data;
        const { token } = response.data;

        dispatch(setUserProfile(user));
        sessionStorage.setItem("accessToken", token);
        setLoading(false);
        router.push("/Home");
      }
    } catch (error: any) {
      console.error("----", error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <section className="heroSection mt-5 pt-5">
        <div className="hero container mt-5">
          <div className="container mt-5">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 textSection">
                <h1 className="heroText">
                  <span></span>
                  <span className="highlight">Sign Up</span>
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating my-5">
                    <input
                      type="name"
                      className="form-control input"
                      id="name"
                      placeholder="Kirk Wolf"
                      value={name}
                      onChange={handleNameChange}
                      onFocus={handleNameFocus}
                    />
                    <label htmlFor="name">name</label>
                    {nameError && <p className="text-danger">{emailError}</p>}
                  </div>
                  <div className="form-floating my-5">
                    <input
                      type="email"
                      className="form-control input"
                      id="email"
                      placeholder="Kirk Wolf"
                      value={email}
                      onChange={handleEmailChange}
                      onFocus={handleEmailFocus}
                    />
                    <label htmlFor="name">Email</label>
                    {emailError && <p className="text-danger">{emailError}</p>}
                  </div>
                  <div className="form-floating mb-5">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control input"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                      onFocus={handlePasswordFocus}
                    />
                    <label htmlFor="password">Password</label>
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      onClick={togglePasswordVisibility}
                      style={{ marginRight: "17px" }}
                      className="password-toggle position-absolute top-50 end-0 translate-middle-y"
                    />
                    {passwordError && (
                      <p className="text-danger">{passwordConfirmError}</p>
                    )}
                  </div>
                  <div className="form-floating mb-5">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control input"
                      id="passwordConfirm"
                      placeholder="Confirm Password"
                      value={passwordConfirm}
                      onChange={handlePasswordConfirmChange}
                      onFocus={handlePasswordConfirmFocus}
                    />

                    <label htmlFor="passwordConfirm">Confirm Password</label>
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      onClick={togglePasswordVisibility}
                      style={{ marginRight: "17px" }}
                      className="password-toggle position-absolute top-50 end-0 translate-middle-y"
                    />
                    {passwordError && (
                      <p className="text-danger">{passwordConfirmError}</p>
                    )}
                  </div>
                  {loading && (
                    <p style={{ fontSize: 18, color: "greeen" }}>
                      Registering you in please wait .....
                    </p>
                  )}
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
                {/* <form onSubmit={handleSubmit}>
                  <div className="form-floating my-5">
                    <input
                      type="name"
                      className="form-control input"
                      id="name"
                      placeholder="Kirk Wolf"
                      value={name}
                      onChange={handleNameChange}
                      onFocus={handleNameFocus}
                    />
                    <label htmlFor="name">name</label>
                    {nameError && <p className="text-danger">{emailError}</p>}
                  </div>
                  <div className="form-floating my-5">
                    <input
                      type="email"
                      className="form-control input"
                      id="email"
                      placeholder="Kirk Wolf"
                      value={email}
                      onChange={handleEmailChange}
                      onFocus={handleEmailFocus}
                    />
                    <label htmlFor="name">Email</label>
                    {emailError && <p className="text-danger">{emailError}</p>}
                  </div>
                  <div className="form-floating mb-5">
                    <input
                      type="password"
                      className="form-control input"
                      id="password"
                      placeholder="name@example.com"
                      value={password}
                      onChange={handlePasswordChange}
                      onFocus={handlePasswordFocus}
                    />
                    <label htmlFor="email">Password</label>
                    {passwordError && (
                      <p className="text-danger">{passwordError}</p>
                    )}
                  </div>
                  <div className="form-floating mb-5">
                    <input
                      type="passwordConfirm"
                      className="form-control input"
                      id="passwordConfirm"
                      placeholder="name@example.com"
                      value={passwordConfirm}
                      onChange={handlePasswordConfirmChange}
                      onFocus={handlePasswordConfirmFocus}
                    />
                    <label htmlFor="passwordConfirm">Password Confirm</label>
                    {passwordError && (
                      <p className="text-danger">{passwordConfirmError}</p>
                    )}
                  </div>
                  <button type="submit" className="btn px-5">
                    Sign Up
                  </button>
                </form> */}
                <p style={{ color: "red" }}>{error}</p>
              </div>
              <div style={{ marginBottom: 20 }} className="col-lg-6 imgSection">
                <Image
                  src={images.school}
                  alt=""
                  className="img-fluid"
                  style={{ borderRadius: 30 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpContent;
