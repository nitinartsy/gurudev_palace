import React from "react";
import Link from "next/link";
import RoomCards from "../RoomCards";

const HotelPlaceProperties = () => {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, black, transparent), url('https://thumbs.dreamstime.com/b/ayodhya-city-water-reflection-ayodhya-city-water-reflection-167082073.jpg')",
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
            <div className="col-md-9  pb-5 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link href="/">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </Link>
                </span>
                <span>
                  Properties <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-3 bread">
                Choose <br />
                Your Desired Room
              </h1>
            </div>
          </div>
        </div>
      </section>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="curved-separator"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,192L48,181.3C96,171,192,149,288,144C384,139,480,149,576,165.3C672,181,768,203,864,224C960,245,1056,267,1152,229.3C1248,192,1344,96,1392,48L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
          <RoomCards/>
          <RoomCards/>
          <RoomCards/>
          <RoomCards/>
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <Link href="#">&lt;</Link>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <Link href="#">2</Link>
                  </li>
                  <li>
                    <Link href="#">3</Link>
                  </li>
                  <li>
                    <Link href="#">4</Link>
                  </li>
                  <li>
                    <Link href="#">5</Link>
                  </li>
                  <li>
                    <Link href="#">&gt;</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelPlaceProperties;
