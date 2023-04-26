import { images } from "@/components/Global/Image";
import NavWithBack from "@/components/Global/NavWithBack";
import { data } from "@/utils/data";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { setUpdateSchool } from "@/redux-toolkit/slicies/profileSlice";
import { useRouter } from "next/router";

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [info, setData] = React.useState<any>(data);
  const handleDetail = (id: any) => {
    dispatch(setUpdateSchool(id));
    router.push("/Home/details");
  };

  return (
    <div>
      <NavWithBack />
      <section className="allDetails mt-3 pt-5">
        <div className=" container mt-5" style={{ overflow: "hidden" }}>
          <div>
            <h4 style={{ fontWeight: "300", color: "#022873" }}>
              Welcome to
              <span
                className="highlight"
                style={{ color: " #F28705", fontWeight: "bold" }}
              >
                {" "}
                UniGhana,
              </span>
            </h4>
            <p>
              Explore the contents from the various universities in the country,
              get to know <br></br> more about the courses they offer,
              <span>
                how the school can help your career journey and a <br></br>lot
                more exciting feature!!
              </span>
            </p>
          </div>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
            // style={{ height: "460px" }}
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image
                  src={images.knust}
                  className="d-block w-100"
                  alt="First Slide"
                  style={{ height: "450px", width: "auto" }}
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={images.upsa}
                  className="d-block w-100"
                  alt="Second Slide"
                  style={{ height: "450px", width: "auto" }}
                />
              </div>
              <div className="carousel-item">
                <Image
                  src={images.legon}
                  className="d-block w-100"
                  alt="Third Slide"
                  style={{ height: "450px", width: "auto" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center my-5 mx-auto">
          {info.map((item: any) => (
            <div key={item.id} className="col mb-4">
              <div className="card h-100">
                <Image
                  src={item.imgFront}
                  alt="Card Image"
                  className="card-img-top"
                  priority
                  width={500}
                  height={400}
                />
                <div className="card-body">
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-text">{item.description}</p>
                  <button
                    onClick={() => handleDetail(item)}
                    className="btn btn-primary"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
