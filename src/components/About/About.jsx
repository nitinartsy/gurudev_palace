import React from "react";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, black, transparent), url('/images/bg_1.jpg')",
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
            <div className="col-md-9  pb-5 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="/">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>
                <span>
                  About us <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-3 bread">About Us</h1>
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

      {/* About Section */}
      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="row no-gutters">
            <div
              className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url('/images/about.jpg')" }}
            ></div>
            <div className="col-md-6 wrap-about py-md-5 ">
              <div className="heading-section p-md-5">
                <h2 className="mb-4">We Put People First.</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
                <p>
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. But nothing the
                  copy said could convince her and so it didn’t take long until
                  a few insidious Copy Writers ambushed her, made her drunk with
                  Longe and Parole and dragged her into their agency, where they
                  abused her for their.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="ftco-counter img" id="section-counter">
        <div className="container">
          <div className="row">
            {[
              { number: 305, label: "Area Population" },
              { number: 1090, label: "Total Properties" },
              { number: 209, label: "Average House" },
              { number: 67, label: "Total Branches" },
            ].map((item, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-3 justify-content-center counter-wrap "
              >
                <div className="block-18 py-4 mb-4">
                  <div className="text d-flex align-items-center">
                    <strong className="number" data-number={item.number}>
                      {item.number}
                    </strong>
                    <span>
                      {item.label.split(" ").map((text, i) => (
                        <React.Fragment key={i}>
                          {text}
                          <br />
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="ftco-section testimony-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section ">
              <span className="subheading">Testimonial</span>
              <h2 className="mb-3">Happy Clients</h2>
            </div>
          </div>
          <div className="row ftco-animate">
            <div className="col-md-12">
              <div className="carousel-testimony owl-carousel ftco-owl">
                {[
                  "/images/person_1.jpg",
                  "/images/person_2.jpg",
                  "/images/person_3.jpg",
                ].map((image, index) => (
                  <div key={index} className="item">
                    <div className="testimony-wrap py-4">
                      <div className="text">
                        <p className="mb-4">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <div className="d-flex align-items-center">
                          <div
                            className="user-img"
                            style={{ backgroundImage: `url(${image})` }}
                          ></div>
                          <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
