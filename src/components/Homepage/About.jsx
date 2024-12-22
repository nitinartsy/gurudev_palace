import React from "react";
import GridGallery from "../GridGallery";

const About = () => {
  return (
    <>
      <section id="about" class="ftco-section ftco-no-pb" style={{ marginBottom: "15rem" }}>
        <div class="container">
          <div class="row no-gutters">
            <div
              class="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: `url(/images/g5.jpeg) !important`,
                borderRadius: "25px",
              }}
            ></div>
            <div class="col-md-6 wrap-about py-md-5">
              <div class="heading-section p-md-5">
                <h2 class="mb-4 text-over">
                  Seamlessly Blending Work and worshiping
                </h2>

                <p class="text-over">
                  Located in the dynamic heart of Ayodhya, Gurudev Palace of hotels Ayodhya seamlessly blends business and pilgrimage, providing a convenient and enriching stay. Guests can enjoy unparalleled convenience with a diverse range of staycation  away. Situated within walking distance of Ayodhya City Point and the Ayodhya city center, our hotel offers easy access to exciting events year-round. With the Ayodhya Cant railway station  nearby, exploring the city center and other parts of Ayodhya  is effortless, ensuring a fulfilling itinerary without missing out on the vibrant Ayodhya - Dham  experience
                </p>
                <br />
                <p class="text-over">
                  Short walk to Maharshi Valmiki Airport , connecting you to Ayodhya Ram Mandir in proximity of 7 km , Proximity to Ayodhya-dham Railway station is just 7 km too and all of circumference of famous holly temple is around with easy access shuttle and cab services
                </p>
              </div>
            </div>
          </div>
         
        </div>
      </section>
    </>
  );
};

export default About;
