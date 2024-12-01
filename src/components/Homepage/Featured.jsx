import React from "react";
import RoomCards from "../RoomCards";

const Featured = () => {
  return (
    <>
      <section class="ftco-section goto-here" style={{ marginTop: "4rem" }}>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 heading-section text-center  mb-5">
              <span class="subheading">best in the best</span>
              <h2 class="mb-2">Featured Rooms</h2>
            </div>
          </div>
          <div class="row">
            <RoomCards/>
            <RoomCards/>
            <RoomCards/>
            <RoomCards/>
            <RoomCards/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
