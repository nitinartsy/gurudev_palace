import React from "react";
import Link from "next/link";

const HotelkunjProperties = () => {
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
            <div class="col-md-4">
              <div class="property-wrap">
                <a
                  href="#"
                  class="img"
                  style={{ backgroundImage: `url('data:image/jpeg;base64,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')` }}
                ></a>
                <div class="text">
                  <p class="price">
                    <span class="old-price">₹ 800,000</span>
                    <span class="orig-price">
                      ₹ 3,050
                    </span>
                  </p>
                  {/* <ul class="property_list">
                            <li>
                                <span class="flaticon-bed"></span>3
                            </li>
                            <li>
                                <span class="flaticon-bathtub"></span>2
                            </li>
                            <li>
                                <span class="flaticon-floor-plan"></span>1,878 sqft
                            </li>
                        </ul> */}

                  <h3>
                    <a href="#">GURUDEV KUNJ
                    </a>
                  </h3>
                  <span class="location">
                  Premium Suite
                  </span>
                  <a
                    href="#"
                    class="d-flex align-items-center justify-content-center btn-custom"
                  >
                    <span
                      class="ion-ios-arrow-round-forward"
                      style={{ fontWeight: "800" }}
                    ></span>
                  </a>
                </div>
              </div>
            </div>







            <div class="col-md-4">
              <div class="property-wrap">
                <a
                  href="#"
                  class="img"
                  style={{ backgroundImage: `url('data:image/jpeg;base64,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')` }}
                ></a>
                <div class="text">
                  <p class="price">
                    <span class="old-price">₹ 800,000</span>
                    <span class="orig-price">
                      ₹ 3,050
                    </span>
                  </p>
                  {/* <ul class="property_list">
                            <li>
                                <span class="flaticon-bed"></span>3
                            </li>
                            <li>
                                <span class="flaticon-bathtub"></span>2
                            </li>
                            <li>
                                <span class="flaticon-floor-plan"></span>1,878 sqft
                            </li>
                        </ul> */}

                  <h3>
                    <a href="#">GURUDEV KUNJ                    </a>
                  </h3>
                  <span class="location">
                  Premium Room
                  </span>
                  <a
                    href="#"
                    class="d-flex align-items-center justify-content-center btn-custom"
                  >
                    <span
                      class="ion-ios-arrow-round-forward"
                      style={{ fontWeight: "800" }}
                    ></span>
                  </a>
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

export default HotelkunjProperties;
