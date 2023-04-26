import { images } from "@/components/Global/Image";
import NavWithBack from "@/components/Global/NavWithBack";
import Navbar from "@/components/Global/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
const details = () => {
  const { school } = useSelector((state: any) => state.prof);
  console.log("--school", JSON.stringify(school.programs, null, 2));
  return (
    <>
      <header
        className="bg-image"
        style={{
          height: 600,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${school.imageBg})`,
        }}
      >
        {/* <Navbar home="" name={school.title} text="" /> */}
        <NavWithBack />
      </header>
      <main className=" bg-light ">
        <section id="history" className="section bg-light ">
          <div className="container ">
            <div className="row mt-5">
              <div className="col-md-6">
                <h2 className="section-title">School History</h2>
                <p>{school.history}</p>
              </div>
              <div className="col-md-6 ">
                <Image
                  src={school.imageBg}
                  className="img-fluid h-400 "
                  alt="School History"
                  width={500}
                  height={400}
                  style={{ borderRadius: 30 }}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="programs" className="section bg-light ">
          <div className="container mb-5">
            <h2 className="section-title">Programs Offered</h2>
            <ul className="list-group">
              {school?.programs?.map((item: any) => (
                <li key={item?.id} className="list-group-item">
                  {item?.title}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="colleges" className="section bg-light">
          <div className="container mb-4 ">
            <h2 className="section-title">Colleges</h2>
            <div className="row">
              {school?.colleges?.map((college: any) => (
                <div key={college?.id} className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{college?.name}</h5>
                      <p className="card-text">{college?.description}</p>
                      <a
                        href={college.more}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-primary">Learn More</button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cutoff" className=" bg-light">
          <div className="container mt-5 bg-light">
            <h2 className="section-title">Cut Off Points</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Subject 1</td>
                  <td>90</td>
                </tr>
                <tr>
                  <td>Subject 2</td>
                  <td>85</td>
                </tr>
                <tr>
                  <td>Subject 3</td>
                  <td>80</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
};

export default details;
