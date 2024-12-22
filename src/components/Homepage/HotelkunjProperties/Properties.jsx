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
                 Gurudev Kunj
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
          <div className="row justify-content-center">
            <div class="col-md-4">
              <div class="property-wrap">
                <a
                  href="#"
                  class="img"
                  style={{ backgroundImage: `url(/images/kunj1.jpeg)` }}
                ></a>
                <div class="text">
                  <p class="price">
                    {/* <span class="old-price">₹ 800,000</span> */}
                    <span class="orig-price">
                      ₹ 3,500 <span class="incl-taxes">(incl. taxes)</span>
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
                    <a href="#">Premium room
                    </a>
                  </h3>
                  <span class="location">
                  GURUDEV KUNJ
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
                  style={{ backgroundImage: `url(/images/kunj2.jpeg)` }}
                ></a>
                <div class="text">
                  <p class="price">
                    {/* <span class="old-price">₹ 800,000</span> */}
                    <span class="orig-price">
                      ₹ 5,000 <span class="incl-taxes">(incl. taxes)</span>
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
                    <a href="#">Premium suite room</a>
                  </h3>
                  <span class="location">
                  GURUDEV KUNJ
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
          {/* <div className="row mt-5">
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
          </div> */}
        </div>
      </section>
    </>
  );
};

export default HotelkunjProperties;
