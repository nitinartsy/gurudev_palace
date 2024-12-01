import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!"); // Placeholder functionality
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, transparent 100%), url('/images/bg_1.jpg')",
          backgroundAttachment: "fixed",
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
                  Contact <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-3 bread">Contact Us</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Curved Separator */}
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

      {/* Contact Section */}
      <section className="ftco-section contact-section">
        <div className="container">
          {/* Contact Info */}
          <div className="row d-flex mb-5 contact-info justify-content-center">
            <div className="col-md-8">
              <div className="row mb-5">
                <div className="col-md-4 text-center py-4">
                  <div className="icon">
                    <span className="icon-map-o"></span>
                  </div>
                  <p>
                    <span>Address:</span> Sobha Hartland, Sales gallery 2 - Nad
                    Al Sheba 1 - Dubai - United Arab Emirates
                  </p>
                </div>
                <div className="col-md-4 text-center border-height py-4">
                  <div className="icon">
                    <span className="icon-mobile-phone"></span>
                  </div>
                  <p>
                    <span>Phone:</span>{" "}
                    <a href="tel:+971585152878">+971 58 515 2878</a>
                  </p>
                </div>
                <div className="col-md-4 text-center py-4">
                  <div className="icon">
                    <span className="icon-envelope-o"></span>
                  </div>
                  <p>
                    <span>Email:</span>{" "}
                    <a href="mailto:shamlimishra@wewinproperties.com">
                      shamlimishra@wewinproperties.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="row block-9 justify-content-center mb-5">
            <div className="col-md-8 mb-md-5">
              <h2 className="text-center">
                If you have any questions,
                <br />
                please do not hesitate to send us a message.
              </h2>
              <form
                className="bg-light p-5 contact-form"
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary py-3 px-5">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
