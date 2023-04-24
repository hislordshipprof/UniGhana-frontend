import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { images } from "../Global/Image";
import axios from "axios";
import { useRouter } from "next/router";
import { setUserProfile } from "@/redux-toolkit/slicies/profileSlice";
const LoginContent = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordError("");
    }
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
    if (event.target.value) {
      setEmailError("");
    }
  };

  const handlePasswordFocus = () => {
    setPasswordError("");
  };

  const handleEmailFocus = () => {
    setEmailError("");
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // prevent default form submission behavior

    let errors = false;

    // validate input fields
    if (!email) {
      setEmailError("Please enter your email.");
      errors = true;
    }
    if (!password) {
      setPasswordError("Please enter your password.");
      errors = true;
    }

    if (errors) {
      return;
    }

    try {
      const response = await axios.post(
        "https://uinghana-gyw9.onrender.com/api/v1/auth/login",
        { email, password }
      );
      if (response.status === 200) {
        const { user } = response.data.data;
        const { token } = response.data;

        dispatch(setUserProfile(user));
        sessionStorage.setItem("accessToken", token);
        router.push("/Home");
      }
      console.log(response.data); // log response data if successful
      // redirect to Home page or do any other actions you need
    } catch (error) {
      console.error(error); // handle error
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
                  <span className="highlight">Sign In</span>
                </h1>

                <form onSubmit={handleSubmit}>
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
                  <button type="submit" className="btn px-5">
                    Login
                  </button>
                </form>
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

export default LoginContent;
