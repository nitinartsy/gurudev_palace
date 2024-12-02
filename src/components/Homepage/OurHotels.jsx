import React from "react";
import RoomCards from "../RoomCards";
import { useRouter } from "next/router";

const OurHotels = () => {
  const router = useRouter();

  const handleProp1 = () => {
    router.push('/gurudev_palace')
  }
  
  return (
    <>
      <section class="ftco-section goto-here" style={{ marginTop: "4rem" }}>

        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 heading-section text-center  mb-5">
              <span class="subheading">Our hotels</span>
              {/* <h2 class="mb-2">Featured Rooms</h2> */}
            </div>
          </div>
          <div class="row hotel-wrap">
            <div onClick={handleProp1} class="col-md-6">
              <div class="property-wrap">
                
                <a
                  href="#"
                  class="img imgg"
                  style={{ backgroundImage: `url('/images/hotel1.png')` }}
                ></a>
                <div class="text textw">
                <p class="price">
                    <span className="startingfrom" > Starting from</span>
                    <span class="orig-price">
                      ₹ 3,050
                    </span>
                  </p>
                <h3>
                    <a href="#">Gurudev Palace</a>
                  </h3>
                  <span class="location">Civil line, Ayodhya</span>
                  <a
                    href="#"
                    class="d-flex align-items-center justify-content-center btn-custom customwith"
                  >
                    <span
                      // class="ion-ios-arrow-round-forward"
                      
                      style={{ fontWeight: "800" }}
                    >
                      View all rooms
                    </span>
                  </a>
             
                  <ul class="ul-ament">
                    <li>
                      Family Deluxe Room
                    </li>
                    <li>
                      Family Standard Room
                    </li>
                  </ul>
                
                </div>
              </div>
            </div>
            <div onClick={handleProp1} class="col-md-6">
              <div class="property-wrap">
                
                <a
                  href="#"
                  class="img imgg"
                  style={{ backgroundImage: `url('https://content3.jdmagicbox.com/comp/ayodhya/m5/9999px527.x527.201017175927.s4m5/catalogue/gurudev-palace-civil-line-ayodhya-hotels-f940rwymm5.jpg')` }}
                ></a>
                <div class="text textw">
                <p class="price">
                    <span className="startingfrom" > Starting from</span>
                    <span class="orig-price">
                      ₹ 3,050
                    </span>
                  </p>
                <h3>
                    <a href="#">GURUDEV KUNJ</a>
                  </h3>
                  <span class="location">Civil line, Ayodhya</span>
                  <a
                    href="#"
                    class="d-flex align-items-center justify-content-center btn-custom customwith"
                  >
                    <span
                      // class="ion-ios-arrow-round-forward"
                      
                      style={{ fontWeight: "800" }}
                    >
                      View all rooms
                    </span>
                  </a>
             
                  <ul class="ul-ament">
                    <li>
                    Premium Suite
                    
                    </li>
                    <li>
                    Premium Room
                    </li>
                  </ul>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurHotels;
