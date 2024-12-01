import React from "react";
import Link from "next/link";

const Properties = () => {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, black, transparent), url('images/bg_1.jpg')",
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
                Your Desired Home
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
            {/* Property Card 1 */}
            <div className="col-md-4">
              <div className="property-wrap ">
                <Link href="#">
                  <div
                    className="img"
                    style={{ backgroundImage: "url('images/work-1.jpg')" }}
                  ></div>
                </Link>
                <div className="text">
                  <p className="price">
                    <span className="old-price">800,000</span>
                    <span className="orig-price">
                      $3,050<small>/mo</small>
                    </span>
                  </p>
                  <ul className="property_list">
                    <li>
                      <span className="flaticon-bed"></span>3
                    </li>
                    <li>
                      <span className="flaticon-bathtub"></span>2
                    </li>
                    <li>
                      <span className="flaticon-floor-plan"></span>1,878 sqft
                    </li>
                  </ul>
                  <h3>
                    <Link href="#">Marina Beach Resorts</Link>
                  </h3>
                  <span className="location">DUBAI</span>
                  <Link
                    href="#"
                    className="d-flex align-items-center justify-content-center btn-custom"
                  >
                    <span className="ion-ios-arrow-round-forward"></span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="col-md-4">
              <div className="property-wrap ">
                <Link href="#">
                  <div
                    className="img"
                    style={{ backgroundImage: "url('images/work-2.jpg')" }}
                  ></div>
                </Link>
                <div className="text">
                  <p className="price">
                    <span className="old-price">900,000</span>
                    <span className="orig-price">
                      $3,550<small>/mo</small>
                    </span>
                  </p>
                  <ul className="property_list">
                    <li>
                      <span className="flaticon-bed"></span>4
                    </li>
                    <li>
                      <span className="flaticon-bathtub"></span>3
                    </li>
                    <li>
                      <span className="flaticon-floor-plan"></span>2,150 sqft
                    </li>
                  </ul>
                  <h3>
                    <Link href="#">Palm City Villa</Link>
                  </h3>
                  <span className="location">ABU DHABI</span>
                  <Link
                    href="#"
                    className="d-flex align-items-center justify-content-center btn-custom"
                  >
                    <span className="ion-ios-arrow-round-forward"></span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="col-md-4">
              <div className="property-wrap ">
                <Link href="#">
                  <div
                    className="img"
                    style={{ backgroundImage: "url('images/work-3.jpg')" }}
                  ></div>
                </Link>
                <div className="text">
                  <p className="price">
                    <span className="old-price">750,000</span>
                    <span className="orig-price">
                      $2,800<small>/mo</small>
                    </span>
                  </p>
                  <ul className="property_list">
                    <li>
                      <span className="flaticon-bed"></span>2
                    </li>
                    <li>
                      <span className="flaticon-bathtub"></span>1
                    </li>
                    <li>
                      <span className="flaticon-floor-plan"></span>1,200 sqft
                    </li>
                  </ul>
                  <h3>
                    <Link href="#">Sunny Apartment</Link>
                  </h3>
                  <span className="location">SHARJAH</span>
                  <Link
                    href="#"
                    className="d-flex align-items-center justify-content-center btn-custom"
                  >
                    <span className="ion-ios-arrow-round-forward"></span>
                  </Link>
                </div>
              </div>
            </div>
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

export default Properties;
