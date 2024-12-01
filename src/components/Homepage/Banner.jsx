import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <div class="hero-wrap ftco-degree-bg" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="video-header">
          <video
            src="/videos/video1.mp4"
            autoPlay
            loop
            playsInline
            muted
          ></video>
          <div class="viewport-header">
            <div class="text text-center">
              <h1 >
                  Explore Ayodhya
              </h1>
              {/* <p>
                lorem ipsum is the dummy text
              </p> */}
              {/*
              <p style={{ fontSize: "18px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, harum itaque.
              </p> */}
              {/* <form action="#" class="search-location mt-md-5">
                <div class="row justify-content-center">
                  <div class="col-lg-10 align-items-end">
                    <div class="form-group">
                      <div class="form-field">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search location"
                        />
                        <button>
                          <span class="ion-ios-search"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form> */}
            </div>
          </div>
        </div>
        <div class="mouse">
          <a href="#" class="mouse-icon">
            <div class="mouse-wheel">
              <span class="ion-ios-arrow-round-down"></span>
            </div>
          </a>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="curved-separator"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,192L48,181.3C96,171,192,149,288,144C384,139,480,149,576,165.3C672,181,768,203,864,224C960,245,1056,267,1152,229.3C1248,192,1344,96,1392,48L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default Banner;
