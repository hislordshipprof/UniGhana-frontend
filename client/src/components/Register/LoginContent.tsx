import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { images } from "../Global/Image";
import axios from "axios";
const LoginContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // prevent default form submission behavior

    try {
      const response = await axios.post("/api/login", { name, email });
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
                      type="text"
                      className="form-control input"
                      id="name"
                      placeholder="Kirk Wolf"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                    <label htmlFor="name">Full name</label>
                  </div>
                  <div className="form-floating mb-5">
                    <input
                      type="email"
                      className="form-control input"
                      id="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <label htmlFor="email">Email address</label>
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
